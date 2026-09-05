#!/usr/bin/env bash
# Headless OpenOutreach init — requires docs/outreach/.env.outreach.local with real secrets.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
ENV_FILE="$REPO_ROOT/docs/outreach/.env.outreach.local"
OPENOUTREACH_PY="${OPENOUTREACH_PY:-$HOME/.local/share/uv/tools/openoutreach/bin/python}"
OPENOUTREACH_CMD=("$OPENOUTREACH_PY" "$SCRIPT_DIR/run_openoutreach.py")

cd "$REPO_ROOT"

if ! command -v openoutreach &>/dev/null && [[ ! -x "$OPENOUTREACH_PY" ]]; then
  echo "openoutreach not found. Install: source ~/.local/bin/env && uv tool install openoutreach"
  exit 1
fi

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Missing $ENV_FILE"
  echo "Copy the example and fill in your API keys:"
  echo "  cp docs/outreach/.env.outreach.local.example docs/outreach/.env.outreach.local"
  exit 1
fi

set -a
# shellcheck disable=SC1090
source "$ENV_FILE"
set +a

REQUIRED_VARS=(
  OPENOUTFIND_LLM_API_KEY
  OPENOUTFIND_BETTERCONTACT_API_KEY
  OPENOUTFIND_OPERATOR_EMAIL
  OPENOUTFIND_COUNTRY
  OPENOUTFIND_ACCEPT_LEGAL_NOTICE
  OUTSEND_MAILBOX_ADDRESS
  OUTSEND_MAILBOX_PASSWORD
)

MISSING=()
for var in "${REQUIRED_VARS[@]}"; do
  if [[ -z "${!var:-}" ]]; then
    MISSING+=("$var")
  fi
done

if [[ ${#MISSING[@]} -gt 0 ]]; then
  echo "Missing required variables in .env.outreach.local:"
  printf '  - %s\n' "${MISSING[@]}"
  exit 1
fi

echo "Running headless openoutreach init..."
"${OPENOUTREACH_CMD[@]}" init \
  --product-docs "$REPO_ROOT/docs/outreach/product.md" \
  --target "$REPO_ROOT/docs/outreach/target-india.md"

echo ""
"${OPENOUTREACH_CMD[@]}" status
