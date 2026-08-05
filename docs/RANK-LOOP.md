# TechHind Rank Loop (techhind.in only)

Internal automation inspired by RankAI’s discover → ship → measure → improve loop.
Not a multi-tenant RankAI clone.

## Cadence (GitHub Actions)

| Workflow | When (IST) | What |
|----------|------------|------|
| Weekly SEO Blog | Monday 10:00 | Ship 1 new handbook-grounded post |
| Weekly GSC Measure | Tuesday 10:00 | Measure (GSC or heuristic) + rewrite candidates |
| Weekly SEO Rewrite | Wednesday 10:00 | Improve 1 underperforming `/blog` post |
| Monthly AEO Refresh | 1st @ 10:00 | Refresh `llms.txt` / `llms-full.txt` |

Manual: Actions → Run workflow on each.

## Local commands

```bash
npm run seo:gsc
npm run seo:rewrite:dry
npm run seo:rewrite
npm run seo:enrich-links
npm run seo:aeo
npm run seo:weekly:dry
```

## Enable real Google Search Console measure

1. Google Cloud → enable **Search Console API**
2. Create service account → download JSON key
3. In [Google Search Console](https://search.google.com/search-console), add the SA email as a user on `https://techhind.in/`
4. GitHub → repo **Settings → Secrets and variables → Actions**:
   - `GSC_SERVICE_ACCOUNT_JSON` = full JSON (or base64 of JSON)
   - `GSC_SITE_URL` = `https://techhind.in/`

Without secrets, measure still runs in **heuristic mode** (oldest posts as rewrite candidates).

## Artifacts

- `data/seo-reports/gsc-weekly-YYYY-MM-DD.md`
- `data/seo-rewrite-candidates.json`
- `data/seo-rewrite-log.md`
- `data/seo-weekly-log.md`

## Quality caps

- 1 new post / week
- 1 rewrite / week
- Full Solar CRM positioning on every page (not module-only spam)
