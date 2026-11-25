# Approved baseline v22

Approved by owner on 2026-11-25.
Reference: prototype/invite-system-v22.html (blob e15f9dde6f2290112ca622aba40d0af53c70e10d).

Preserve approved compact dark/gold/silver interface, mobile layout, photo ordering, deletion, fullscreen horizontal swipes and downward dismissal. Each master has one profile and multiple workplaces, each with its own HTTPS booking URL. Identical URLs are permitted. No duplicated schedule or calendar. Future map pins reference individual workplaces.

Production requirements: private expiring invitations, server-side authentication and authorization, persistent storage, secure photo uploads, moderation, publication only after approval. Do not expose demo as production or collect real personal data until storage jurisdiction and legal requirements are resolved. Preserve existing public site and booking links.

Internationalization: Russian and English interface dictionaries, language selection retained across visits, browser language as initial default with Russian fallback. Translate UI and validation messages; preserve original master-entered content. Public-site rollout requires regression testing and owner review.

Demo remains isolated until production readiness is verified.
