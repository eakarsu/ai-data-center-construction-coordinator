export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "site-readiness",
    "label": "Site Readiness",
    "description": "Site Readiness action group for Data Center Construction Coordinator.",
    "href": "/site-readiness",
    "sourceProjects": [
      "Construction schedules",
      "Permits"
    ],
    "examples": [
      "Open Site Readiness",
      "Review Planning",
      "Run Site Readiness AI check"
    ],
    "count": 3
  },
  {
    "id": "permit-tracker",
    "label": "Permit Tracker",
    "description": "Permit Tracker action group for Data Center Construction Coordinator.",
    "href": "/permit-tracker",
    "sourceProjects": [
      "Permits",
      "Supply chain plans"
    ],
    "examples": [
      "Open Permit Tracker",
      "Review Permitting",
      "Run Permit Tracker AI check"
    ],
    "count": 3
  },
  {
    "id": "power-cooling-coordination",
    "label": "Power Cooling Coordination",
    "description": "Power Cooling Coordination action group for Data Center Construction Coordinator.",
    "href": "/power-cooling-coordination",
    "sourceProjects": [
      "Supply chain plans",
      "Commissioning checklists"
    ],
    "examples": [
      "Open Power Cooling Coordination",
      "Review Engineering",
      "Run Power Cooling Coordination AI check"
    ],
    "count": 3
  },
  {
    "id": "contractor-schedule",
    "label": "Contractor Schedule",
    "description": "Contractor Schedule action group for Data Center Construction Coordinator.",
    "href": "/contractor-schedule",
    "sourceProjects": [
      "Commissioning checklists"
    ],
    "examples": [
      "Open Contractor Schedule",
      "Review Execution",
      "Run Contractor Schedule AI check"
    ],
    "count": 3
  },
  {
    "id": "supply-chain-risk",
    "label": "Supply Chain Risk",
    "description": "Supply Chain Risk action group for Data Center Construction Coordinator.",
    "href": "/supply-chain-risk",
    "sourceProjects": [
      "Construction schedules",
      "Permits"
    ],
    "examples": [
      "Open Supply Chain Risk",
      "Review Procurement",
      "Run Supply Chain Risk AI check"
    ],
    "count": 3
  },
  {
    "id": "inspection-readiness",
    "label": "Inspection Readiness",
    "description": "Inspection Readiness action group for Data Center Construction Coordinator.",
    "href": "/inspection-readiness",
    "sourceProjects": [
      "Permits",
      "Supply chain plans"
    ],
    "examples": [
      "Open Inspection Readiness",
      "Review Quality",
      "Run Inspection Readiness AI check"
    ],
    "count": 3
  },
  {
    "id": "commissioning-plan",
    "label": "Commissioning Plan",
    "description": "Commissioning Plan action group for Data Center Construction Coordinator.",
    "href": "/commissioning-plan",
    "sourceProjects": [
      "Supply chain plans",
      "Commissioning checklists"
    ],
    "examples": [
      "Open Commissioning Plan",
      "Review Commissioning",
      "Run Commissioning Plan AI check"
    ],
    "count": 3
  },
  {
    "id": "change-order-review",
    "label": "Change Order Review",
    "description": "Change Order Review action group for Data Center Construction Coordinator.",
    "href": "/change-order-review",
    "sourceProjects": [
      "Commissioning checklists"
    ],
    "examples": [
      "Open Change Order Review",
      "Review Commercial",
      "Run Change Order Review AI check"
    ],
    "count": 3
  },
  {
    "id": "safety-risk-log",
    "label": "Safety Risk Log",
    "description": "Safety Risk Log action group for Data Center Construction Coordinator.",
    "href": "/safety-risk-log",
    "sourceProjects": [
      "Construction schedules",
      "Permits"
    ],
    "examples": [
      "Open Safety Risk Log",
      "Review Safety",
      "Run Safety Risk Log AI check"
    ],
    "count": 3
  },
  {
    "id": "executive-build-report",
    "label": "Executive Build Report",
    "description": "Executive Build Report action group for Data Center Construction Coordinator.",
    "href": "/executive-build-report",
    "sourceProjects": [
      "Permits",
      "Supply chain plans"
    ],
    "examples": [
      "Open Executive Build Report",
      "Review Reporting",
      "Run Executive Build Report AI check"
    ],
    "count": 3
  }
];
