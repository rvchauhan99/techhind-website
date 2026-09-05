#!/usr/bin/env bash
# Phase 1: Free lead discovery — 30 qualified leads, no email credits spent.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
OPENOUTREACH_PY="${OPENOUTREACH_PY:-$HOME/.local/share/uv/tools/openoutreach/bin/python}"
OPENOUTREACH_CMD=("$OPENOUTREACH_PY" "$SCRIPT_DIR/run_openoutreach.py")
ENV_FILE="$REPO_ROOT/docs/outreach/.env.outreach.local"
EXPORT_DIR="$REPO_ROOT/data/outreach/exports"
DATE_STAMP="$(date +%Y%m%d)"
OUTPUT="$EXPORT_DIR/phase1-find30-$DATE_STAMP.csv"

cd "$REPO_ROOT"
mkdir -p "$EXPORT_DIR"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Missing $ENV_FILE — run phase0-init-headless.sh first."
  exit 1
fi

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

if [[ ! -x "$OPENOUTREACH_PY" ]]; then
  echo "openoutreach python not found at $OPENOUTREACH_PY"
  exit 1
fi

echo "Running: openoutreach find 30 (no email credits)"
echo "Output:  $OUTPUT"
echo ""

"${OPENOUTREACH_CMD[@]}" find 30 > "$OUTPUT"

LINE_COUNT=$(($(wc -l < "$OUTPUT") - 1))
echo ""
echo "Done. Exported $LINE_COUNT leads to $OUTPUT"
echo "Score leads using docs/outreach/lead-review-rubric.md"
echo "Pass threshold: >= 9 of 30 leads score 2 or 3 (30% fit rate)"
