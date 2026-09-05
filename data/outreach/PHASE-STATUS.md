# OpenOutreach Pilot — Phase Status

Last updated: implementation complete; execution requires your API keys.

## Completed (automated setup)

- [x] `docs/outreach/` config files (`product.md`, `target-india.md`, rubric, README)
- [x] Helper scripts in `docs/outreach/scripts/`
- [x] `data/outreach/exports/` and `data/outreach/logs/` gitignored
- [x] `uv` and `openoutreach` CLI installed on this machine

## Your next steps (requires API keys)

### Step 1 — Create accounts (free)

1. [BetterContact](https://bettercontact.rocks) — sign up, get API key (40–50 free credits)
2. [OpenAI](https://platform.openai.com) — create API key, set $5 billing cap
3. Google Workspace — app password for `contact@techhind.in`

### Step 2 — Configure secrets

```bash
cp docs/outreach/.env.outreach.local.example docs/outreach/.env.outreach.local
# Edit .env.outreach.local with real keys
```

### Step 3 — Initialize

```bash
source ~/.local/bin/env
docs/outreach/scripts/phase0-init-headless.sh
docs/outreach/scripts/check-prerequisites.sh
```

### Step 4 — Phase 1 (free, no email credits)

```bash
docs/outreach/scripts/phase1-find30.sh
# Score leads using docs/outreach/lead-review-rubric.md
```

| Phase | Status | Notes |
|-------|--------|-------|
| 0 Init | Partial | LLM + BetterContact OK; Outlook SMTP auth failed (535) — fix before Phase 2 |
| 1 Find 30 | **26 leads exported** | Stopped early (OpenAI connection error); review CSV below |
| 2 Send 5 | Blocked | Needs SMTP + Phase 1 review |
| 3 Daily cron | Blocked | — |

## Phase 1 results (2026-09-02)

| Metric | Value |
|--------|-------|
| Export file | `data/outreach/exports/phase1-find30-20260902.csv` |
| Leads found | **26** (goal was 30; run stopped on network error) |
| India solar EPC fit | **Strong** — Kashyap Solar, Hind Solar, Infisol Energy, Nesara Energy, Sprng Energy, etc. |
| Pass (>= 30%)? | **Yes** — well above 9/30 threshold |

Sample qualified companies: Hind Solar, Kashyap Solar EPC, Infisol Energy, Nesara Energy, Xwatt Energy, Agastya Energy, Axis Energy Group, Sprng Energy.

## Phase 2 results (fill after run)

| Metric | Value |
|--------|-------|
| Emails found | |
| Emails sent | |
| Replies (7 days) | |
| Demo requests | |
| Proceed to Phase 3? | |
