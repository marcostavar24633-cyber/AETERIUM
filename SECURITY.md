# Security and deployment notes

## Current security posture

AETERIUM is currently a static, single-page demonstration. It does not include a backend, database, authentication, payment processing, or a working enquiry-delivery endpoint.

- The contact form performs browser-side validation only. It does not transmit or persist submissions.
- Theme preference is stored locally in the visitor's browser using `localStorage`.
- The WebGL scene loads Three.js from cdnjs and web fonts from Google Fonts.
- The optional scene image paths are hard-coded in `SCENE_IMAGES`; do not populate them from untrusted user input.
- The page currently contains inline CSS and JavaScript. A strict Content Security Policy using only `'self'` will therefore block those blocks until they are extracted or authorized with nonces/hashes.

## Recommended HTTPS response headers

Configure these as hosting response headers (not HTML meta tags) when a production domain and hosting provider are selected:

- `Strict-Transport-Security: max-age=31536000; includeSubDomains` — enable only after HTTPS is confirmed for the domain and all subdomains.
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin` — the page also declares this policy as a meta fallback.
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy` — start with Report-Only, inspect violations, then enforce a policy tailored to the chosen host and the required CDN origins. Account for the current inline style/script blocks; do not blindly copy a policy that breaks the page. Prefer moving inline CSS/JS into same-origin files or using nonces/hashes before enforcing a restrictive policy.
- `frame-ancestors 'none'` should be set in the CSP response header if the site is not intended to be embedded.

## Before accepting real enquiries

1. Choose a trusted form endpoint or backend and document its data handling.
2. Add server-side validation; browser validation is only a usability feature.
3. Add abuse protection appropriate to the endpoint (rate limiting and, if needed, bot protection).
4. Publish a privacy notice explaining the purpose, legal basis, retention period, and contact for data requests.
5. Never place API secrets or private credentials in `index.html` or any public repository file.

## Release checks still outstanding

- Verify the production URL and HTTPS configuration.
- Test the deployed site in real browsers and on mobile devices.
- Run Lighthouse and inspect the browser console/network panel.
- Review actual response headers and CSP reports.
- Confirm third-party CDN availability and decide whether to pin and self-host dependencies.
