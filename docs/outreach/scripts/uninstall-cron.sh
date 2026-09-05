#!/usr/bin/env bash
# Remove Phase 3 cron job.

set -euo pipefail

CRON_MARKER="# techhind-openoutreach-phase3"

if ! crontab -l 2>/dev/null | grep -q "$CRON_MARKER"; then
  echo "No techhind OpenOutreach cron job found."
  exit 0
fi

crontab -l 2>/dev/null | grep -v "$CRON_MARKER" | crontab -
echo "Removed OpenOutreach cron job."
