#!/usr/bin/env bash
# Phase 0: Run openoutreach init with repo config files.
# Fill OPENOUTREACH_LLM_API_KEY and OPENOUTREACH_BETTERCONTACT_API_KEY before running,
# or let the interactive wizard prompt you.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"

cd "$REPO_ROOT"

if ! command -v openoutreach &>/dev/null; then
  echo "openoutreach not found. Install with: uv tool install openoutreach"
  exit 1
fi

echo "Initializing OpenOutreach from:"
echo "  Product: $REPO_ROOT/docs/outreach/product.md"
echo "  Target:  $REPO_ROOT/docs/outreach/target-india.md"
echo ""
echo "Suggested values when prompted:"
echo "  AI model:        openai:gpt-4o-mini"
echo "  Country:         IN"
echo "  Mailbox:         contact@techhind.in"
echo "  Operator email:  ravat@techhind.in"
echo "  Booking link:    https://demo.techhind.in/auth/preview"
echo ""

openoutreach init \
  --product-docs "$REPO_ROOT/docs/outreach/product.md" \
  --target "$REPO_ROOT/docs/outreach/target-india.md"

echo ""
echo "Verify setup:"
openoutreach status
