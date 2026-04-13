# WBS Website Client Handover

## Project Structure

- `nextjs-version/` - Frontend website (Next.js)
- `wbs_consultation/` - Backend API + admin dashboard (Laravel)

## Features Delivered

- Responsive company website with core sections:
  - Home
  - About Us
  - Our Services
  - Training & Programs
  - Admissions
  - Publications
  - Internship Applications
  - Advertisements & News
  - Contact + office communication details
- WhatsApp floating quick assistance button.
- Contact inquiry API integration.
- Admissions inquiry API integration.
- Internship application API integration.
- Laravel API endpoints for office addresses, inquiries, internships, news, publications, and training programs.
- Laravel admin dashboard at `/admin` for quick backend review.

## Run Backend (Laravel)

1. Open terminal in `wbs_consultation/`
2. Copy `.env.example` to `.env`
3. Configure database credentials in `.env`
4. Run:
   - `php artisan key:generate`
   - `php artisan migrate:fresh --seed`
   - `php artisan serve`
5. Backend URLs:
   - Admin: `http://127.0.0.1:8000/admin`
   - API health: `http://127.0.0.1:8000/api/health`

## Run Frontend (Next.js)

1. Open terminal in `nextjs-version/`
2. Copy `.env.example` to `.env.local`
3. Ensure API URL:
   - `NEXT_PUBLIC_LARAVEL_API_URL=http://127.0.0.1:8000/api`
4. Install dependencies and run:
   - `npm install` (or `pnpm install`)
   - `npm run dev` (or `pnpm dev`)
5. Frontend URL:
   - `http://localhost:3000/landing`

## Delivery Notes

- Keep backend and frontend running together for form submissions.
- Update production domain URLs and SMTP settings before deployment.
- Replace placeholder images with final WBS brand assets if needed.
