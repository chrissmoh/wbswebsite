# Deployment Checklist (Client Delivery)

## 1) Final Content and Branding

- [ ] Confirm all WBS text, phone numbers, emails, and office addresses are correct.
- [ ] Replace any remaining placeholder images with final brand assets.
- [ ] Verify logo appears in navbar, footer, and browser tab icon.
- [ ] Confirm WhatsApp link opens correct number with prefilled message.

## 2) Backend Server (Laravel: `wbs_consultation`)

- [ ] Hosting supports PHP 8.2+ and MySQL 8+.
- [ ] Upload backend code to server.
- [ ] Create production `.env` from `.env.example`.
- [ ] Set secure values:
  - `APP_ENV=production`
  - `APP_DEBUG=false`
  - `APP_URL=https://your-domain`
  - database credentials
- [ ] Run commands:
  - `php artisan key:generate`
  - `php artisan migrate --force`
  - `php artisan db:seed --force`
  - `php artisan config:cache`
  - `php artisan route:cache`
  - `php artisan view:cache`
- [ ] Set writable permissions for:
  - `storage/`
  - `bootstrap/cache/`
- [ ] Point document root to `wbs_consultation/public`.
- [ ] Verify:
  - `/admin`
  - `/api/health`

## 3) Frontend Server (Next.js: `nextjs-version`)

- [ ] Create `.env.local` with:
  - `NEXT_PUBLIC_LARAVEL_API_URL=https://api-domain-or-main-domain/api`
  - `NEXT_PUBLIC_LARAVEL_ASSET_URL=https://api-domain-or-main-domain`
- [ ] Install dependencies and build:
  - `npm install`
  - `npm run build`
  - `npm run start`
- [ ] If using static export/reverse proxy, map domain/subdomain correctly.
- [ ] Verify landing page and all anchor sections load correctly.

## 4) Domain, SSL, and DNS

- [ ] Connect primary domain to frontend.
- [ ] Connect API/backend (same domain or subdomain).
- [ ] Install SSL certificate for all domains/subdomains.
- [ ] Force HTTPS redirection.
- [ ] Confirm no mixed-content warnings in browser.

## 5) CORS and API Security

- [ ] Allow frontend domain in Laravel CORS config.
- [ ] Restrict `allowed_origins` to production domains.
- [ ] Keep `APP_DEBUG=false` in production.
- [ ] Add rate limiting / WAF rules if available from host.
- [ ] Run `php artisan storage:link` to expose uploaded CV files.

## 6) Functional QA Before Handover

- [ ] Contact form submits and appears in backend dashboard.
- [ ] Admissions form submits and appears as inquiry.
- [ ] Internship form submits and appears in backend dashboard.
- [ ] News/publications/training API endpoints respond correctly.
- [ ] Mobile responsiveness tested on phone and tablet.
- [ ] Dark/light mode checked.
- [ ] WhatsApp floating button works on mobile and desktop.

## 7) SEO and Analytics (Optional but Recommended)

- [ ] Set production metadata title and description.
- [ ] Add sitemap/robots if needed.
- [ ] Add Google Analytics / Search Console verification.

## 8) Backup and Recovery

- [ ] Enable database automatic backups.
- [ ] Schedule file backups.
- [ ] Keep backup restore instructions for client.

## 9) Client Handover Pack

- [ ] Source code archive delivered.
- [ ] Production `.env` variables documented (without exposing secrets).
- [ ] Admin URL, API base URL, and credentials delivered securely.
- [ ] Short admin usage guide shared with client.
- [ ] Support contacts and warranty period confirmed.
