# Security policy

This is experimental software. The current development line is supported on a best-effort basis; no response-time guarantee or bug bounty is offered.

## Report privately

Use the repository's Security tab → Report a vulnerability when available. Otherwise email `letstalk@davidlabs.ca` with subject `TGF security report`. Do not open a public issue for an unpatched vulnerability or include credentials/customer data.

Include the affected revision, a minimal reproduction using synthetic data, impact and suggested mitigation. Coordinate disclosure with maintainers before publishing exploit details.

## Review boundaries

Untrusted input must remain data, not shell commands or executable expressions. Use least-privilege, read-only provider tokens. Do not print credentials, log authorization headers, or include private repository contents in public examples. Never run untrusted contributor code with write credentials or deployment secrets. Workflow, token handling, dependency and licensing changes require additional review.
