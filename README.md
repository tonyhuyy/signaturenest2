# Signature Nest Gifts LLC — Etsy services website

A responsive, dependency-free HTML/CSS/JavaScript website replacing the necklace storefront with Etsy operations services. Amazon and Shopify appear as supplementary platforms.

## Source

- `dist/index.html`: website content and enquiry form.
- `dist/styles.css`: responsive layout and visual styles.
- `dist/app.js`: navigation and email enquiry preparation/copying.
- `dist/privacy.html`, `dist/terms.html`: service and enquiry information.
- `dist/assets/etsy-wordmark.svg`: unmodified official Etsy wordmark from https://www.etsy.com/press (https://extfiles.etsy.com/Press/brand-assets/etsy-logos.zip). Etsy retains ownership of this trademark. It identifies the supported platform; no affiliation is claimed.
- `vercel.json`: static output configuration and redirects from old retail pages.

## Check

Node.js 18 or newer. No dependencies or installation required.

```sh
npm run check
node --check dist/app.js
```

## Deploy on Vercel

Import this GitHub repository into Vercel. Framework preset: Other. Build command: `npm run build`. Output directory: `dist`.

The production domain is `www.signaturenestgifts.com`. Preserve the existing Namecheap DNS and mail records unless an intentional hosting migration requires specific changes. Connecting this repository to an existing Vercel project is a separate step from pushing code to GitHub.

## Enquiries

The form validates the visitor's fields and opens a `mailto:` draft addressed to `contact@signaturenestgifts.com`. The visitor must press Send in their mail application. A copy action and manual-copy fallback are included. This website does **not** submit or store leads, send mail from a server, or display a false sent confirmation. Server-side email delivery can be added later with a provider and verified sender credentials; never commit secrets.

## Content

The five main service groups follow the supplied service invoice. No client names, private contract documents, bank information, signatures, invented testimonials or performance statistics are included. The existing LLC name, postal address, phone number and email are preserved. Service prices are quoted individually. Policy pages describe this implementation and defer engagement-specific terms to written agreements.

Google Fonts supplies Manrope and DM Sans. System fonts are used as fallbacks. No analytics scripts or cookies are configured by the website source.
