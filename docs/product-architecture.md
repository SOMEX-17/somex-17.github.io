# TOPBARBERS — product architecture
Approved direction: 2026-11-25. Design requirements, not deployed.
- Preserve the current public catalog and booking links during development.
- Deliver an installable PWA first; keep the public website usable without installation. RU/EN interface; preserve user-authored text.
- Separate frontend, domain logic, HTTP API, database adapter and object storage adapter. Use versioned API contracts and migrations. Avoid provider-specific dependencies in domain logic.
- Keep production source in a private repository; test replacement hosting before any domain or visibility change. Never commit secrets or real private data.
- Use standard data export formats (JSON/CSV plus media manifest and checksums), documented restore procedure and tested backups. Document licenses, ownership, deployment and handover. Transfer personal data only with lawful basis.
- PWA: manifest, brand icons, standalone display, HTTPS, versioned static cache. Do not cache authenticated pages, invitation URLs, private media or API responses in service worker. Provide update and offline behavior; booking requires network.
- Use separate development and production resources, synthetic test data only until hosting/legal review. No paid services without owner approval.
- Release gates: automated tests, authorization isolation, mobile Safari/Android checks, accessibility, visual regression, backup restore, rollback and Russia connectivity checks.
- No production DNS changes or repository visibility changes before replacement hosting is validated.
