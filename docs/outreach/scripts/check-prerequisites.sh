#!/usr/bin/env bash
# Verify prerequisites before each pilot phase.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
ENV_FILE="$REPO_ROOT/docs/outreach/.env.outreach.local"
PHASE="${1:-all}"

pass() { echo "  OK  $1"; }
fail() { echo "  FAIL $1"; ERRORS=$((ERRORS + 1)); }

ERRORS=0

echo "OpenOutreach pilot — prerequisite check (phase: $PHASE)"
echo ""

# CLI
if command -v openoutreach &>/dev/null; then
  pass "openoutreach CLI installed ($(openoutreach --help 2>&1 | head -1))"
else
  fail "openoutreach CLI — run: source ~/.local/bin/env && uv tool install openoutreach"
fi

# uv
if command -v uv &>/dev/null; then
  pass "uv installed"
else
  fail "uv — run: curl -LsSf https://astral.sh/uv/install.sh | sh"
fi

# Config files
for f in product.md target-india.md lead-review-rubric.md; do
  if [[ -f "$REPO_ROOT/docs/outreach/$f" ]]; then
    pass "docs/outreach/$f"
  else
    fail "docs/outreach/$f missing"
  fi
done

# Env secrets (needed for phase 0+)
if [[ -f "$ENV_FILE" ]]; then
  pass ".env.outreach.local exists"
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
  for var in OPENOUTFIND_LLM_API_KEY OPENOUTFIND_BETTERCONTACT_API_KEY OUTSEND_MAILBOX_PASSWORD; do
    if [[ -n "${!var:-}" && "${!var}" != *"your-"* && "${!var}" != *"sk-your"* ]]; then
      pass "$var set"
    else
      fail "$var not configured in .env.outreach.local"
    fi
  done
else
  fail ".env.outreach.local — copy from .env.outreach.local.example"
fi

# Init status
if openoutreach status &>/dev/null; then
  pass "openoutreach initialized (~/.openoutreach)"
else
  fail "not initialized — run docs/outreach/scripts/phase0-init-headless.sh"
fi

echo ""
if [[ "$ERRORS" -gt 0 ]]; then
  echo "$ERRORS check(s) failed."
  exit 1
fi

echo "All checks passed. Ready for phase commands in docs/outreach/README.md"
