# SONORA — security and deployment notes

## Current security posture

SONORA is a static demonstration storefront. It has no backend, database, authentication, order API, payment processing, or real inventory connection.

- Cart and favorites are stored only in browser localStorage.
- Demo checkout prevents submission and displays a local-only notice; it does not send or persist customer data.
- Product catalog is a public JSON file and contains fictional data.
- Never store credentials, API keys, customer data, or private tokens in this repository.
- Do not add real payment forms or collect personal data until a secure backend, privacy notice, and data retention policy exist.

## Production requirements

Before real sales:
1. Replace every fictional product, brand, price, specification, and availability with verified supplier data.
2. Add licensed product imagery and correct image alt text.
3. Implement a secure backend for cart validation, orders, inventory, and customer communication.
4. Integrate a trusted payment provider through server-side flows; never handle raw card data in static JavaScript.
5. Add server-side input validation, rate limiting, abuse prevention, and secure session handling.
6. Publish privacy, returns, delivery, warranty, and seller identity information after legal review.
7. Configure HTTPS and response headers: HSTS after HTTPS validation, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, and a tested Content-Security-Policy.
8. Audit all third-party scripts, fonts, and image sources.

## Release checks

No production readiness is claimed until the backend, legal pages, payment, real inventory, deployed URL, response headers, accessibility, and device testing are verified.