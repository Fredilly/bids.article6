# Article6 Bids Product

## Product

`bids.article6.org`

Article6 Bids provides independent pre-submission review of tenders and bids.

The product helps organizations identify weaknesses before a submission reaches the buyer.

The service is not positioned as generic AI writing software and is not primarily a tender-writing service.

Core review areas:

- buyer requirements
- scoring criteria
- requested evidence
- compliance requirements
- response consistency
- unanswered requirements
- weak or unsupported claims

## Customer Outcome

The customer should understand:

> Before you submit, we independently check whether the response actually answers what the buyer is scoring.

Emphasize confidence before submission, reduced avoidable scoring losses, evidence sufficiency, and an independent final review.

Avoid technical descriptions of Article6's internal tooling.

## MVP Customer Journey

1. Visitor lands on `bids.article6.org`.
2. Visitor quickly understands what is reviewed and for whom.
3. Visitor understands what they receive.
4. Visitor sees enough evidence or explanation to trust the service.
5. Visitor submits tender information and documents.
6. Article6 receives the submission and files.
7. Visitor receives confirmation.
8. Article6 can process the submission operationally.

If these steps work reliably, declare the product a usable MVP before proposing additional product features.

## MVP Pages

Prefer one strong landing page plus a submission flow.

Landing page should cover:

- problem/outcome
- what Article6 checks
- who the service is for
- what the customer receives
- basic process
- trust/confidentiality
- price or commercial CTA when decided
- submission CTA

Add FAQ only for objections that actually need answering.

## Submission Form

Bids should have a dedicated submission form.

Minimum useful fields:

- contact name
- work email
- company
- tender or opportunity title
- buyer or contracting authority
- submission deadline
- deadline timezone
- documents
- optional context/message

Do not require a customer account for the MVP.

Deadline is operationally important and should be structured data.

## Submission Backend

Do not build a separate upload/storage backend.

Reuse the established Article6 pattern:

`browser -> presigned Cloudflare R2 upload -> confirmation -> R2 verification -> Neon submission record -> notification`

Use the existing Article6 Neon database where safe.

Label tender submissions with:

- `submission_type = TENDER`
- `source_site = bids.article6.org`
- CRM experiment = `TENDER_READINESS`

Where a genuine prospect submits documents, update/create the relevant CRM state so that document receipt corresponds to `OPPORTUNITY`.

Link submissions where practical to:

- sales organization
- contact
- tender opportunity
- tender documents

Keep CRM business rules centralized. Avoid duplicating complex CRM SQL in the bids application.

## Documents

Support the file types that real tender packages require.

Uploaded documents must be private.

The interface should make clear when upload succeeds.

Differentiate:

- submission received
- review accepted

Do not imply an engagement is accepted merely because files were uploaded.

## Confirmation

After successful submission, display a clear acknowledgement.

Provide email acknowledgement if the existing infrastructure can support it simply.

Do not build a customer notification system for the MVP.

## Trust

Tender documents may contain commercially sensitive information.

Communicate confidentiality without exaggerated security claims.

Include appropriate privacy and data-handling information before public launch.

## Not MVP

Do not build unless usage demonstrates a need:

- customer dashboard
- user accounts
- tender-writing editor
- real-time collaboration
- AI chatbot
- automated scoring portal
- subscription management
- company workspaces
- buyer database
- tender discovery engine
- generalized project management
- elaborate status tracking

The service should initially sell the human/business outcome, with software supporting delivery.
