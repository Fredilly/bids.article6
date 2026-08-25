'use client';

import { FormEvent, useRef, useState } from 'react';

const MAX_FILE_SIZE = 100 * 1024 * 1024;
const MAX_FILES = 10;
const MAX_TOTAL_SIZE = 500 * 1024 * 1024;
const ACCEPTED_EXTENSIONS = ['pdf', 'docx', 'xlsx', 'pptx'];

type Phase = 'idle' | 'uploading' | 'success' | 'error';

type PreparedUpload = {
  fileName: string;
  fileSize: number;
  contentType: string;
  uploadUrl: string;
  uploadReference: string;
};

function extension(name: string) {
  return name.split('.').pop()?.toLowerCase() || '';
}

async function uploadInBatches(files: File[], uploads: PreparedUpload[]) {
  const concurrency = 3;
  for (let start = 0; start < files.length; start += concurrency) {
    const batch = files.slice(start, start + concurrency);
    await Promise.all(batch.map(async (file, offset) => {
      const upload = uploads[start + offset];
      const response = await fetch(upload.uploadUrl, {
        method: 'PUT',
        headers: { 'Content-Type': upload.contentType },
        body: file,
      });
      if (!response.ok) throw new Error(`${file.name} failed to upload. Please try again.`);
    }));
  }
}

export default function TenderReviewForm() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');
  const [contactName, setContactName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [tenderTitle, setTenderTitle] = useState('');
  const [buyer, setBuyer] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [deadline, setDeadline] = useState('');
  const [note, setNote] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  function validate() {
    if (!contactName.trim()) return 'Your name is required.';
    if (!workEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail.trim())) return 'A valid work email is required.';
    if (!organization.trim()) return 'Company is required.';
    if (!tenderTitle.trim()) return 'Tender or opportunity title is required.';
    if (files.length < 1) return 'Upload at least one tender document.';
    if (files.length > MAX_FILES) return `Upload no more than ${MAX_FILES} files at a time.`;
    let total = 0;
    for (const file of files) {
      if (!ACCEPTED_EXTENSIONS.includes(extension(file.name))) return `${file.name} is not a supported file type.`;
      if (file.size <= 0) return `${file.name} is empty.`;
      if (file.size > MAX_FILE_SIZE) return `${file.name} exceeds the 100 MB per-file limit.`;
      total += file.size;
    }
    if (total > MAX_TOTAL_SIZE) return 'The total upload package must be 500 MB or less.';
    return null;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setPhase('error');
      setError(validationError);
      return;
    }

    setPhase('uploading');
    setError('');

    const submissionDeadline = deadline ? new Date(deadline).toISOString() : undefined;
    const metadata = {
      contactName: contactName.trim(),
      workEmail: workEmail.trim(),
      organization: organization.trim(),
      tenderTitle: tenderTitle.trim(),
      buyer: buyer.trim() || undefined,
      referenceNumber: referenceNumber.trim() || undefined,
      submissionDeadline,
      deadlineTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      note: note.trim() || undefined,
      files: files.map((file) => ({ fileName: file.name, fileSize: file.size })),
    };

    try {
      const presignResponse = await fetch('/api/tender-intake/presign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metadata),
      });
      const presignBody = await presignResponse.json();
      if (!presignResponse.ok) throw new Error(presignBody.error || 'Failed to prepare document uploads.');
      if (!Array.isArray(presignBody.uploads) || presignBody.uploads.length !== files.length) throw new Error('Upload preparation returned an incomplete package. Please try again.');

      await uploadInBatches(files, presignBody.uploads);

      const confirmResponse = await fetch('/api/tender-intake/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...metadata,
          intakeReference: presignBody.intakeReference,
          files: presignBody.uploads.map((upload: PreparedUpload) => ({
            fileName: upload.fileName,
            fileSize: upload.fileSize,
            uploadReference: upload.uploadReference,
          })),
        }),
      });
      const confirmBody = await confirmResponse.json();
      if (!confirmResponse.ok) throw new Error(confirmBody.error || 'Failed to confirm the tender package.');

      setReference(confirmBody.intakeReference || presignBody.intakeReference || '');
      setPhase('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
      setPhase('error');
    }
  }

  function reset() {
    setPhase('idle');
    setError('');
    setReference('');
    setContactName('');
    setWorkEmail('');
    setOrganization('');
    setTenderTitle('');
    setBuyer('');
    setReferenceNumber('');
    setDeadline('');
    setNote('');
    setFiles([]);
    if (fileRef.current) fileRef.current.value = '';
  }

  if (phase === 'success') {
    return (
      <div className="intake-success">
        <div className="success-mark">✓</div>
        <div>
          <h3>Tender package received</h3>
          <p>Your documents are linked to a new bid assurance opportunity in our review system.</p>
          {reference && <p className="form-note">Reference: <code>{reference}</code></p>}
          <button type="button" onClick={reset} className="text-button">Submit another tender</button>
        </div>
      </div>
    );
  }

  return (
    <form className="intake-form" onSubmit={handleSubmit} noValidate>
      {phase === 'error' && <div className="form-error"><strong>Submission failed</strong><span>{error}</span></div>}

      <div className="form-grid">
        <Field label="Your name" required><input value={contactName} onChange={(e) => setContactName(e.target.value)} disabled={phase === 'uploading'} /></Field>
        <Field label="Work email" required><input type="email" value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} disabled={phase === 'uploading'} /></Field>
        <Field label="Company" required><input value={organization} onChange={(e) => setOrganization(e.target.value)} disabled={phase === 'uploading'} /></Field>
        <Field label="Tender / opportunity title" required><input value={tenderTitle} onChange={(e) => setTenderTitle(e.target.value)} disabled={phase === 'uploading'} /></Field>
        <Field label="Buyer / contracting authority"><input value={buyer} onChange={(e) => setBuyer(e.target.value)} disabled={phase === 'uploading'} /></Field>
        <Field label="Tender reference"><input value={referenceNumber} onChange={(e) => setReferenceNumber(e.target.value)} disabled={phase === 'uploading'} /></Field>
        <Field label="Submission deadline"><input type="datetime-local" value={deadline} onChange={(e) => setDeadline(e.target.value)} disabled={phase === 'uploading'} /></Field>
      </div>

      <Field label="Anything we should know?"><textarea rows={4} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Optional context about the draft, evaluation or deadline" disabled={phase === 'uploading'} /></Field>

      <div className="file-field">
        <label>Tender documents <span>*</span></label>
        <input
          ref={fileRef}
          type="file"
          multiple
          accept=".pdf,.docx,.xlsx,.pptx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation"
          onChange={(e) => setFiles(Array.from(e.target.files || []))}
          disabled={phase === 'uploading'}
        />
        <p className="form-note">PDF, DOCX, XLSX or PPTX. Up to 10 files, 100 MB each, 500 MB total.</p>
        {files.length > 0 && <ul className="file-list">{files.map((file, index) => <li key={`${file.name}-${index}`}><span>{file.name}</span><small>{(file.size / 1024 / 1024).toFixed(1)} MB</small></li>)}</ul>}
      </div>

      <button type="submit" className="form-submit" disabled={phase === 'uploading'}>
        {phase === 'uploading' ? 'Uploading and verifying…' : 'Request bid assurance'}
      </button>
      <p className="form-note">Files are uploaded to private Article6 storage and are only added to the review opportunity after the full package is verified.</p>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return <div className="form-field"><label>{label} {required && <span>*</span>}</label>{children}</div>;
}
