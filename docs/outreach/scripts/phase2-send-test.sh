#!/usr/bin/env bash
# Phase 2: Get 10 emails (free credits) and send 5 test emails.
# Only run after Phase 1 passes (>= 30% fit rate).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
EXPORT_DIR="$REPO_ROOT/data/outreach/exports"
DATE_STAMP="$(date +%Y%m%d)"
OUTPUT="$EXPORT_DIR/phase2-with-emails-$DATE_STAMP.csv"

cd "$REPO_ROOT"
mkdir -p "$EXPORT_DIR"

if ! command -v openoutreach &>/dev/null; then
  echo "openoutreach not found. Run docs/outreach/scripts/phase0-init.sh first."
  exit 1
fi

echo "Phase 2 — uses up to 10 BetterContact credits"
echo ""
read -r -p "Has Phase 1 passed (>= 30% fit rate)? [y/N] " CONFIRM
if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
  echo "Aborted. Complete Phase 1 review first."
  exit 1
fi

echo ""
echo "Step 1: Finding 10 leads with verified emails..."
openoutreach find 10 emails > "$OUTPUT"
echo "Saved to $OUTPUT"
echo "Review emails before sending — confirm corporate domains look real."
echo ""
read -r -p "Proceed to send 5 emails? [y/N] " SEND_CONFIRM
if [[ ! "$SEND_CONFIRM" =~ ^[Yy]$ ]]; then
  echo "Send skipped. Run manually: openoutreach send 5"
  exit 0
fi

echo ""
echo "Step 2: Sending 5 emails from contact@techhind.in..."
openoutreach send 5

echo ""
echo "Done. Monitor for 7 days:"
echo "  - contact@techhind.in (replies)"
echo "  - ravat@techhind.in (BCC copies)"
echo "  - Website contact form (demo requests)"
