"""Compatibility shim: openoutfind expects OpenAIModel; pydantic-ai 2.x renamed it."""
from __future__ import annotations

import pydantic_ai.models.openai as openai_models

if not hasattr(openai_models, "OpenAIModel"):
    openai_models.OpenAIModel = openai_models.OpenAIChatModel
