#!/usr/bin/env bash
# Phase 3: Install cron job for 10 emails per weekday at 10:00 AM IST.
# Only run after Phase 2 shows engagement (>= 1 reply or demo request).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
LOG_DIR="$REPO_ROOT/data/outreach/logs"
CRON_MARKER="# techhind-openoutreach-phase3"
CRON_LINE="0 10 * * 1-5 cd \"$REPO_ROOT\" && openoutreach run 10 >> \"$LOG_DIR/cron.log\" 2>&1 $CRON_MARKER"

mkdir -p "$LOG_DIR"

if ! command -v openoutreach &>/dev/null; then
  echo "openoutreach not found. Complete Phase 0 first."
  exit 1
fi

read -r -p "Has Phase 2 succeeded (>= 1 reply or demo)? [y/N] " CONFIRM
if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
  echo "Aborted. Wait for Phase 2 results before automating."
  exit 1
fi

if crontab -l 2>/dev/null | grep -q "$CRON_MARKER"; then
  echo "Cron job already installed."
  exit 0
fi

( crontab -l 2>/dev/null || true
  echo "$CRON_LINE"
) | crontab -

echo "Installed cron: weekdays 10:00 AM — openoutreach run 10"
echo "Logs: $LOG_DIR/cron.log"
echo "Remove with: docs/outreach/scripts/uninstall-cron.sh"
