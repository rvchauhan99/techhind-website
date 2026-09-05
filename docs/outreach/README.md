# OpenOutreach Free Pilot — India Solar EPC

Phased pilot to validate OpenOutreach for TechHind Solar CRM client acquisition. Start free, scale only if lead quality proves out.

## Quick reference

| Phase | Command | Cost |
|-------|---------|------|
| 0 | `openoutreach init` | ₹0 BetterContact |
| 1 | `openoutreach find 30` | ₹0 BetterContact (~₹20–40 LLM) |
| 2 | `openoutreach find 10 emails` + `openoutreach send 5` | Free credits (~₹30–50 LLM) |
| 3 | `openoutreach run 10` (weekdays) | ~₹4,100/mo BetterContact Pro |

## Files in this folder

| File | Purpose |
|------|---------|
| [product.md](./product.md) | Product description for OpenOutreach onboarding |
| [target-india.md](./target-india.md) | India-first ICP |
| [lead-review-rubric.md](./lead-review-rubric.md) | How to score Phase 1 leads |
| [.env.outreach.example](./.env.outreach.example) | Environment variable reference |

## Lead flows

```
OpenOutreach (outbound)          Website (inbound)
─────────────────────────        ─────────────────
find → qualify → email     ≠     contact form → Brevo → ravat@techhind.in
Replies → contact@techhind.in
BCC copy → ravat@techhind.in
```

Outbound leads do **not** enter the website contact form. See [app/api/send-email/route.ts](../../app/api/send-email/route.ts).

---

## Phase 0 — Install and onboard (one-time)

### 1. Install CLI

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source ~/.local/bin/env   # add uv to PATH for this session
uv tool install openoutreach
```

### 2. Create accounts

| Service | URL | Notes |
|---------|-----|-------|
| BetterContact | https://bettercontact.rocks | Free 40–50 credits; do not buy a plan yet |
| OpenAI | https://platform.openai.com | API key; set $5 billing hard cap |
| Google Workspace | Admin console | App password for `contact@techhind.in` |

### 3. Run onboarding

From the repo root:

```bash
cd "/Users/ravatrajsinhchauhan/iCloud Drive (Archive)/Documents/Programs/techHind/techhind-website"

openoutreach init \
  --product-docs docs/outreach/product.md \
  --target docs/outreach/target-india.md
```

When prompted, use:

| Setting | Value |
|---------|-------|
| AI model | `openai:gpt-4o-mini` |
| Country | `IN` |
| Mailbox | `contact@techhind.in` + app password |
| Operator email (BCC) | `ravat@techhind.in` |
| Booking link | `https://demo.techhind.in/auth/preview` |
| Legal notice | Accept |

Or run the helper script (interactive wizard):

```bash
./docs/outreach/scripts/phase0-init.sh
```

**Headless (recommended):** copy secrets file, fill keys, then:

```bash
cp docs/outreach/.env.outreach.local.example docs/outreach/.env.outreach.local
# edit .env.outreach.local with OpenAI + BetterContact keys + Gmail app password
./docs/outreach/scripts/phase0-init-headless.sh
./docs/outreach/scripts/check-prerequisites.sh
```

### 4. Verify

```bash
openoutreach status
```

### 5. Email forwarding (recommended)

Forward `contact@techhind.in` → `ravat@techhind.in` so prospect replies reach you. OpenOutreach reads replies via IMAP on the sending mailbox.

---

## Phase 1 — Free lead quality test

**Cost: ₹0 BetterContact credits**

```bash
./docs/outreach/scripts/phase1-find30.sh
```

Or manually:

```bash
openoutreach find 30 > data/outreach/exports/phase1-find30-$(date +%Y%m%d).csv
```

Score each lead using [lead-review-rubric.md](./lead-review-rubric.md).

**Pass threshold:** ≥ 9 of 30 leads score 2 or 3 (30% fit rate).

If fail: tighten `target-india.md` and re-run. If fail twice: stop — consider UAE/Australia secondary target.

---

## Phase 2 — Free email + small send test

**Only if Phase 1 passes. Uses ~5–10 free BetterContact credits.**

```bash
./docs/outreach/scripts/phase2-send-test.sh
```

Or manually:

```bash
openoutreach find 10 emails > data/outreach/exports/phase2-with-emails-$(date +%Y%m%d).csv
# Review CSV — confirm corporate emails look real
openoutreach send 5
```

Monitor for 7 days:

| Inbox | Watch for |
|-------|-----------|
| `contact@techhind.in` | Prospect replies |
| `ravat@techhind.in` | BCC of each send |
| Brevo / website form | Demo requests from CTA |

**Success:** ≥ 1 reply, demo click, or positive response.

---

## Phase 3 — Daily automation

**Only if Phase 2 shows engagement. Do not start before Phase 2 success.**

Subscribe to BetterContact Pro (~$49/mo) when free credits run low.

### Manual daily

```bash
openoutreach run 10
```

### Cron (weekdays 10:00 AM IST)

```bash
./docs/outreach/scripts/install-cron.sh
```

Removes with:

```bash
./docs/outreach/scripts/uninstall-cron.sh
```

---

## Lead management

```bash
# Weekly backup
openoutreach find 0 > data/outreach/exports/weekly-backup-$(date +%Y%m%d).csv
```

Track responders manually in TechHind Solar CRM demo tenant until API import is built.

---

## Cost summary

| Phase | BetterContact | LLM | Total |
|-------|---------------|-----|-------|
| 0–1 | ₹0 | ~₹20–40 | ~₹40 |
| 2 | ₹0 (free credits) | ~₹30–50 | ~₹50 |
| 3 | ~₹4,100/mo | ~₹100–300/mo | ~₹4,200–4,400/mo |

**Hard rule:** No paid BetterContact plan until Phase 2 shows at least one meaningful response.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `openoutreach: command not found` | Run `uv tool install openoutreach` and restart shell |
| Bad LLM key | Re-run `openoutreach init` or set `OPENOUTREACH_LLM_API_KEY` |
| SMTP login failed | Use Google **app password**, not login password |
| Low India fit rate | Refine `target-india.md`; re-run `find 30` (free) |
| Credits exhausted | Phase 2 only — wait for Phase 2 success before buying Pro |
