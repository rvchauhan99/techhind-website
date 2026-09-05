#!/usr/bin/env python3
"""Run openoutreach CLI with pydantic-ai compatibility patch."""
from __future__ import annotations

import pydantic_ai_compat  # noqa: F401 — must run before openoutfind imports

from openoutreach.__main__ import main

if __name__ == "__main__":
    raise SystemExit(main())
