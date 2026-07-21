# Construction coordination operations

`/api/governed-construction` is authoritative for the narrow BOM-to-work-release journey. It records source versions, part/lot/supplier identity, inventory units, inspections, schedule/quality plans, exceptions, change orders, overrides, approvals, and immutable events. It does not control equipment or certify site safety; qualified personnel approve work.

Configure `.env.example`, install dependencies explicitly, run `./start.sh check`, back up PostgreSQL, then use `ALLOW_SCHEMA_MIGRATION=1 ./start.sh migrate`. Startup never installs, seeds, resets, creates schema, edits credentials, or kills ports. Rollback deploys prior code with additive tables retained after reconciling released work and provider receipts.

BOM, supplier, inventory, quality, schedule, telemetry, and work-order adapters require stable IDs/versions, event times, units, hashes, idempotency, and typed receipts. Stale telemetry, unit mismatch, insufficient stock, failed inspection, violated deterministic constraints, stale versions, and unauthorized overrides fail closed. Reconcile dead letters and physical state before replanning/replay.

Supplier commitments, field telemetry calibration, inspection authority, safety/business rule approval, work-order credentials, field validation, and security/safety certification are external gates and are not asserted here. Rotate potentially real secrets after Git-history review.
