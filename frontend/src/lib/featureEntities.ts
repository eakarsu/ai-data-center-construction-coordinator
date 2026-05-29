export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  [
    "site-readiness",
    "Site Readiness Records",
    "Site Readiness priority queue",
    "Open",
    "Site Readiness exception list",
    "Planning Lead",
    "$0"
  ],
  [
    "permit-tracker",
    "Permit Tracker Records",
    "Permit Tracker priority queue",
    "Review",
    "Permit Tracker exception list",
    "Permitting Lead",
    "$0"
  ],
  [
    "power-cooling-coordination",
    "Power Cooling Coordination Records",
    "Power Cooling Coordination priority queue",
    "Action needed",
    "Power Cooling Coordination exception list",
    "Engineering Lead",
    "$0"
  ],
  [
    "contractor-schedule",
    "Contractor Schedule Records",
    "Contractor Schedule priority queue",
    "Open",
    "Contractor Schedule exception list",
    "Execution Lead",
    "$0"
  ],
  [
    "supply-chain-risk",
    "Supply Chain Risk Records",
    "Supply Chain Risk priority queue",
    "Review",
    "Supply Chain Risk exception list",
    "Procurement Lead",
    "$0"
  ],
  [
    "inspection-readiness",
    "Inspection Readiness Records",
    "Inspection Readiness priority queue",
    "Action needed",
    "Inspection Readiness exception list",
    "Quality Lead",
    "$0"
  ],
  [
    "commissioning-plan",
    "Commissioning Plan Records",
    "Commissioning Plan priority queue",
    "Open",
    "Commissioning Plan exception list",
    "Commissioning Lead",
    "$0"
  ],
  [
    "change-order-review",
    "Change Order Review Records",
    "Change Order Review priority queue",
    "Review",
    "Change Order Review exception list",
    "Commercial Lead",
    "$0"
  ],
  [
    "safety-risk-log",
    "Safety Risk Log Records",
    "Safety Risk Log priority queue",
    "Action needed",
    "Safety Risk Log exception list",
    "Safety Lead",
    "$0"
  ],
  [
    "executive-build-report",
    "Executive Build Report Records",
    "Executive Build Report priority queue",
    "Open",
    "Executive Build Report exception list",
    "Reporting Lead",
    "$0"
  ],
  [
    "documents",
    "Documents Records",
    "Documents priority queue",
    "Review",
    "Documents exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "notifications",
    "Notifications Records",
    "Notifications priority queue",
    "Action needed",
    "Notifications exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "integrations",
    "Integrations Records",
    "Integrations priority queue",
    "Open",
    "Integrations exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "profiles",
    "Profiles Records",
    "Profiles priority queue",
    "Review",
    "Profiles exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "ai-assistant",
    "AI Assistant Records",
    "AI Assistant priority queue",
    "Action needed",
    "AI Assistant exception list",
    "Intelligence Layer Lead",
    "$0"
  ],
  [
    "ai-tools",
    "AI Tools Records",
    "AI Tools priority queue",
    "Open",
    "AI Tools exception list",
    "Intelligence Layer Lead",
    "$0"
  ]
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-06-03', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-06-06', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} audit queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-06-10', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
