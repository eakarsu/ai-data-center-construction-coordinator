export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  {
    "name": "Construction schedules",
    "ownership": "Construction schedules contributes operating evidence, workflows, control signals, and reporting inputs to Data Center Construction Coordinator.",
    "coverage": [
      "Site Readiness",
      "Permit Tracker",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Permits",
    "ownership": "Permits contributes operating evidence, workflows, control signals, and reporting inputs to Data Center Construction Coordinator.",
    "coverage": [
      "Permit Tracker",
      "Power Cooling Coordination",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Supply chain plans",
    "ownership": "Supply chain plans contributes operating evidence, workflows, control signals, and reporting inputs to Data Center Construction Coordinator.",
    "coverage": [
      "Power Cooling Coordination",
      "Contractor Schedule",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Commissioning checklists",
    "ownership": "Commissioning checklists contributes operating evidence, workflows, control signals, and reporting inputs to Data Center Construction Coordinator.",
    "coverage": [
      "Contractor Schedule",
      "Supply Chain Risk",
      "AI tools",
      "Audit evidence"
    ]
  }
];

export const dashboardMetrics: Metric[] = [
  { label: 'Workflow Areas', value: '10', note: 'Dedicated modules' },
  { label: 'Evidence Sources', value: '4', note: 'Mapped sources' },
  { label: 'AI Tools', value: '13', note: 'Suite copilots' },
  { label: 'Open Work', value: '64', note: 'Across workflows' },
];

export const healthMetrics: Metric[] = [
  { label: 'Connector Health', value: '96%', note: 'Pilot baseline' },
  { label: 'Audit Coverage', value: '100%', note: 'All workflows logged' },
  { label: 'Review Queue', value: '22', note: 'Needs owner action' },
  { label: 'Automation Runs', value: '350', note: 'Last 24 hours' },
];

export const dashboardModules = [
  "Site Readiness operating view",
  "Permit Tracker operating view",
  "Power Cooling Coordination operating view",
  "Contractor Schedule operating view",
  "Supply Chain Risk operating view",
  "Inspection Readiness operating view",
  "Commissioning Plan operating view",
  "Change Order Review operating view"
];
export const workflowHighlights = [
  "Site Readiness workflow with records, AI assist, approvals, audit, and reporting",
  "Permit Tracker workflow with records, AI assist, approvals, audit, and reporting",
  "Power Cooling Coordination workflow with records, AI assist, approvals, audit, and reporting",
  "Contractor Schedule workflow with records, AI assist, approvals, audit, and reporting",
  "Supply Chain Risk workflow with records, AI assist, approvals, audit, and reporting",
  "Inspection Readiness workflow with records, AI assist, approvals, audit, and reporting"
];
