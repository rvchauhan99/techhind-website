# Hostinger Email Setup for OpenOutreach

Step-by-step guide after creating `contact@techhind.in` on Hostinger.

## Part A — Create mailbox in Hostinger (hPanel)

1. Log in to [Hostinger hPanel](https://hpanel.hostinger.com).
2. Go to **Emails** → select domain **techhind.in**.
3. Click **Create email account** (or **Add mailbox**).
4. Set:
   - **Email:** `contact`
   - **Password:** strong password (save it — you need it for OpenOutreach)
5. Click **Create**.

### Optional but recommended

- **Forward copies to ravat@:** Emails → Mailboxes → `contact@` → **Forwarders** → forward to `ravat@techhind.in`
- **DNS:** If email is new, confirm MX records exist (Hostinger usually adds them):
  - `mx1.hostinger.com`
  - `mx2.hostinger.com`

## Part B — Test the mailbox works

Before OpenOutreach, confirm send/receive:

1. Open **Hostinger Webmail** for `contact@techhind.in`.
2. Send a test email **to** `ravat@techhind.in`.
3. Reply from `ravat@` back to `contact@`.
4. Confirm both arrive.

If this fails, fix Hostinger/DNS before continuing.

## Part C — Hostinger server settings (for OpenOutreach)

| Setting | Value |
|---------|--------|
| Email | `contact@techhind.in` |
| Password | Your Hostinger mailbox password (not Brevo key) |
| SMTP host | `smtp.hostinger.com` |
| SMTP port | `465` (SSL) — or `587` (TLS) if 465 fails |
| IMAP host | `imap.hostinger.com` |
| IMAP port | `993` |

Find these in hPanel: **Emails** → **Mailboxes** → `contact@` → **Connect apps & devices** → **Manual setup**.

## Part D — Configure OpenOutreach secrets

From the repo root:

```bash
cd "/Users/ravatrajsinhchauhan/iCloud Drive (Archive)/Documents/Programs/techHind/techhind-website"
cp docs/outreach/.env.outreach.local.example docs/outreach/.env.outreach.local
```

Edit `docs/outreach/.env.outreach.local`:

1. Paste your **OpenAI API key** (both `OPENOUTFIND_LLM_API_KEY` and `OUTSEND_LLM_API_KEY`).
2. Paste your **BetterContact API key**.
3. Set `OUTSEND_MAILBOX_ADDRESS=contact@techhind.in`.
4. Set `OUTSEND_MAILBOX_PASSWORD=` your Hostinger mailbox password.
5. Keep Hostinger SMTP/IMAP lines (already in the example).

**Never commit `.env.outreach.local`** — it is gitignored.

## Part E — Install OpenOutreach (if not done)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source ~/.local/bin/env
uv tool install openoutreach
```

## Part F — Initialize (Phase 0)

```bash
source ~/.local/bin/env
docs/outreach/scripts/phase0-init-headless.sh
docs/outreach/scripts/check-prerequisites.sh
```

If SMTP login fails:
- Re-check password in Hostinger webmail login
- Try port `587` instead of `465` in `.env.outreach.local`

## Part G — Free lead test (Phase 1, ₹0 BetterContact)

```bash
docs/outreach/scripts/phase1-find30.sh
```

Open the CSV in `data/outreach/exports/` and score leads using [lead-review-rubric.md](./lead-review-rubric.md).

**Pass:** 9+ of 30 leads score 2 or 3 → continue to Phase 2.

## Part H — Send test (Phase 2, only if Phase 1 passes)

```bash
docs/outreach/scripts/phase2-send-test.sh
```

Monitor for 7 days:
- `contact@techhind.in` — prospect replies
- `ravat@techhind.in` — BCC of each send

## Part I — Daily automation (Phase 3, only if Phase 2 gets replies)

```bash
docs/outreach/scripts/install-cron.sh
```

---

## What stays on Brevo (no change)

Your **website contact form** keeps using Brevo (`noreply@techhind.in` → team inboxes). That is separate from OpenOutreach outbound.

| Channel | Service | Address |
|---------|---------|---------|
| Website form | Brevo | `noreply@techhind.in` → `ravat@` etc. |
| OpenOutreach cold email | Hostinger | `contact@techhind.in` → prospects |
