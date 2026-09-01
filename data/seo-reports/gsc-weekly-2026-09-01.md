# GSC / SEO weekly measure — 2026-09-01

- Site: https://techhind.in/
- Window: 2026-08-04 → 2026-09-01
- Mode: **heuristic**

## Rewrite candidates (top)

- `solar-crm-for-epc-companies-checklist` — age>=21d_no_gsc · ageScore 27
- `solar-epc-software-india` — age>=21d_no_gsc · ageScore 27
- `solar-lead-management-software` — age>=21d_no_gsc · ageScore 27
- `solar-project-management-software-india` — age>=21d_no_gsc · ageScore 27
- `solar-quotation-software-india` — age>=21d_no_gsc · ageScore 27
- `end-to-end-solar-crm-for-epc` — age>=21d_no_gsc · ageScore 22

## Setup GSC API (to upgrade from heuristic mode)

1. Create a Google Cloud service account with Search Console API enabled.
2. Add the SA email as a user in Google Search Console (Full or Restricted).
3. Set GitHub secrets:
   - `GSC_SERVICE_ACCOUNT_JSON` — full SA JSON
   - `GSC_SITE_URL` — e.g. `https://techhind.in/`


## Manual GSC follow-ups

- Refresh sitemap: https://techhind.in/sitemap.xml
- URL Inspection for new/rewritten `/blog/*` URLs

