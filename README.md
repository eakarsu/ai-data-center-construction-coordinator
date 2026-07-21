# AI Data Center Construction Coordinator

Runnable Next.js full-stack app for Data Center Construction Coordinator.

## Workflows

- `/site-readiness` - Site Readiness (Planning): Land, access, utilities, geotech, constraints, and readiness score.
- `/permit-tracker` - Permit Tracker (Permitting): Permit applications, agencies, comments, deadlines, and approval blockers.
- `/power-cooling-coordination` - Power Cooling Coordination (Engineering): Power equipment, cooling systems, capacity, dependencies, and risk.
- `/contractor-schedule` - Contractor Schedule (Execution): Contractors, work packages, sequence, critical path, and delay risk.
- `/supply-chain-risk` - Supply Chain Risk (Procurement): Long-lead equipment, vendors, shipment status, alternates, and expediting actions.
- `/inspection-readiness` - Inspection Readiness (Quality): Inspection checklists, deficiencies, owner, remediation, and reinspection date.
- `/commissioning-plan` - Commissioning Plan (Commissioning): Test scripts, systems, load banks, witnesses, failures, and acceptance criteria.
- `/change-order-review` - Change Order Review (Commercial): Scope changes, cost impact, schedule impact, entitlement, and approval status.
- `/safety-risk-log` - Safety Risk Log (Safety): Safety incidents, observations, corrective actions, trends, and leadership review.
- `/executive-build-report` - Executive Build Report (Reporting): Schedule, cost, risk, blockers, commissioning status, and executive asks.

## Local Run

```bash
cd ai-data-center-construction-coordinator/frontend
npm run dev
```

Create the first administrator with the explicit BOOTSTRAP_ADMIN_EMAIL,
BOOTSTRAP_ADMIN_PASSWORD, and BOOTSTRAP_ACKNOWLEDGEMENT environment settings.
