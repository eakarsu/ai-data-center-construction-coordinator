import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  Files,
  LayoutDashboard,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const suiteSourceOwners = ["Construction schedules","Permits","Supply chain plans","Commissioning checklists"];

const features = [
  {
    slug: "site-readiness",
    title: "Site Readiness",
    href: "/site-readiness",
    category: "Planning",
    icon: Bot,
    summary: "Land, access, utilities, geotech, constraints, and readiness score.",
    bullets: ["Site Readiness queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Site Readiness", value: "24", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "permit-tracker",
    title: "Permit Tracker",
    href: "/permit-tracker",
    category: "Permitting",
    icon: Workflow,
    summary: "Permit applications, agencies, comments, deadlines, and approval blockers.",
    bullets: ["Permit Tracker queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Permit Tracker", value: "33", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "power-cooling-coordination",
    title: "Power Cooling Coordination",
    href: "/power-cooling-coordination",
    category: "Engineering",
    icon: Users,
    summary: "Power equipment, cooling systems, capacity, dependencies, and risk.",
    bullets: ["Power Cooling Coordination queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Power Cooling Coordination", value: "42", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "contractor-schedule",
    title: "Contractor Schedule",
    href: "/contractor-schedule",
    category: "Execution",
    icon: CalendarCheck,
    summary: "Contractors, work packages, sequence, critical path, and delay risk.",
    bullets: ["Contractor Schedule queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Contractor Schedule", value: "51", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "supply-chain-risk",
    title: "Supply Chain Risk",
    href: "/supply-chain-risk",
    category: "Procurement",
    icon: ClipboardList,
    summary: "Long-lead equipment, vendors, shipment status, alternates, and expediting actions.",
    bullets: ["Supply Chain Risk queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Supply Chain Risk", value: "60", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "inspection-readiness",
    title: "Inspection Readiness",
    href: "/inspection-readiness",
    category: "Quality",
    icon: FileText,
    summary: "Inspection checklists, deficiencies, owner, remediation, and reinspection date.",
    bullets: ["Inspection Readiness queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Inspection Readiness", value: "69", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "commissioning-plan",
    title: "Commissioning Plan",
    href: "/commissioning-plan",
    category: "Commissioning",
    icon: BarChart3,
    summary: "Test scripts, systems, load banks, witnesses, failures, and acceptance criteria.",
    bullets: ["Commissioning Plan queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Commissioning Plan", value: "78", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "change-order-review",
    title: "Change Order Review",
    href: "/change-order-review",
    category: "Commercial",
    icon: PackageCheck,
    summary: "Scope changes, cost impact, schedule impact, entitlement, and approval status.",
    bullets: ["Change Order Review queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Change Order Review", value: "87", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "safety-risk-log",
    title: "Safety Risk Log",
    href: "/safety-risk-log",
    category: "Safety",
    icon: ShieldCheck,
    summary: "Safety incidents, observations, corrective actions, trends, and leadership review.",
    bullets: ["Safety Risk Log queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Safety Risk Log", value: "96", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "executive-build-report",
    title: "Executive Build Report",
    href: "/executive-build-report",
    category: "Reporting",
    icon: Activity,
    summary: "Schedule, cost, risk, blockers, commissioning status, and executive asks.",
    bullets: ["Executive Build Report queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Executive Build Report", value: "105", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "documents",
    title: "Documents",
    href: "/documents",
    category: "Core Platform",
    icon: Files,
    summary: "Data Center Construction Coordinator documents, evidence, attachments, and exports.",
    bullets: ["Documents","Controls","Audit trail"],
    metrics: [
      { label: "Documents", value: "48", note: 'Tracked' },
      { label: 'Open', value: "7", note: 'Needs review' },
      { label: 'Updated', value: "21", note: 'This week' },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    href: "/notifications",
    category: "Core Platform",
    icon: Bell,
    summary: "Data Center Construction Coordinator alerts, reminders, exceptions, and approvals.",
    bullets: ["Notifications","Controls","Audit trail"],
    metrics: [
      { label: "Notifications", value: "65", note: 'Tracked' },
      { label: 'Open', value: "10", note: 'Needs review' },
      { label: 'Updated', value: "29", note: 'This week' },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    href: "/integrations",
    category: "Core Platform",
    icon: Plug,
    summary: "Data Center Construction Coordinator connector health, sync status, and integration warnings.",
    bullets: ["Integrations","Controls","Audit trail"],
    metrics: [
      { label: "Integrations", value: "82", note: 'Tracked' },
      { label: 'Open', value: "13", note: 'Needs review' },
      { label: 'Updated', value: "37", note: 'This week' },
    ],
  },
  {
    slug: "profiles",
    title: "Profiles",
    href: "/profiles",
    category: "Core Platform",
    icon: UserRound,
    summary: "Data Center Construction Coordinator users, roles, teams, permissions, and ownership settings.",
    bullets: ["Profiles","Controls","Audit trail"],
    metrics: [
      { label: "Profiles", value: "99", note: 'Tracked' },
      { label: 'Open', value: "16", note: 'Needs review' },
      { label: 'Updated', value: "45", note: 'This week' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: "Data Center Construction Coordinator assistant for triage, drafting, analysis, recommendations, and operational review.",
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: "Data Center Construction Coordinator AI tools for scoring, generation, extraction, classification, exception review, and reporting.",
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const supplementalFeatures = [
  {
    slug: "permit-milestone-tracker",
    title: "Permit Milestone Tracker",
    href: "/permit-milestone-tracker",
    category: "Governance",
    icon: ShieldCheck,
    summary: "Permit Milestone Tracker workspace for approval routing, policy controls, ownership, exceptions, audit evidence, and management signoff in Data Center Construction Coordinator.",
    bullets: ["Permit Milestone Tracker queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Permit Milestone Tracker", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "long-lead-equipment-board",
    title: "Long Lead Equipment Board",
    href: "/long-lead-equipment-board",
    category: "Supply Chain",
    icon: Workflow,
    summary: "Long Lead Equipment Board workspace for domain workflows, approvals, evidence, and reporting in Data Center Construction Coordinator.",
    bullets: ["Long Lead Equipment Board queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Long Lead Equipment Board", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "commissioning-readiness",
    title: "Commissioning Readiness",
    href: "/commissioning-readiness",
    category: "Operations",
    icon: BarChart3,
    summary: "Commissioning Readiness workspace for intake queues, assignments, SLA tracking, exception handling, stakeholder updates, and closeout evidence in Data Center Construction Coordinator.",
    bullets: ["Commissioning Readiness queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Commissioning Readiness", value: "108", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "trade-coordination",
    title: "Trade Coordination",
    href: "/trade-coordination",
    category: "Operations",
    icon: ClipboardList,
    summary: "Trade Coordination workspace for intake queues, assignments, SLA tracking, exception handling, stakeholder updates, and closeout evidence in Data Center Construction Coordinator.",
    bullets: ["Trade Coordination queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Trade Coordination", value: "117", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "change-order-risk",
    title: "Change Order Risk",
    href: "/change-order-risk",
    category: "Finance",
    icon: CalendarCheck,
    summary: "Change Order Risk workspace for financial exposure, cost movement, approval thresholds, variance review, and executive reporting in Data Center Construction Coordinator.",
    bullets: ["Change Order Risk queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Change Order Risk", value: "126", note: 'Active records' },
      { label: 'Exceptions', value: "7", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "safety-observations",
    title: "Safety Observations",
    href: "/safety-observations",
    category: "Safety",
    icon: PackageCheck,
    summary: "Safety Observations workspace for safety observations, corrective actions, permit controls, incident evidence, and manager signoff in Data Center Construction Coordinator.",
    bullets: ["Safety Observations queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Safety Observations", value: "135", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "10", note: 'Next 14 days' },
    ],
  },
  {
    slug: "grid-interconnect-tasks",
    title: "Grid Interconnect Tasks",
    href: "/grid-interconnect-tasks",
    category: "Utilities",
    icon: Activity,
    summary: "Grid Interconnect Tasks workspace for domain workflows, approvals, evidence, and reporting in Data Center Construction Coordinator.",
    bullets: ["Grid Interconnect Tasks queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Grid Interconnect Tasks", value: "144", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "11", note: 'Next 14 days' },
    ],
  }
] as const;

const productionPlatformFeatures = [
  {
    slug: "enterprise-identity-access",
    title: "Enterprise Identity & Access",
    href: "/enterprise-identity-access",
    category: "Production Platform",
    icon: ShieldCheck,
    summary: "Enterprise Identity & Access workspace for domain workflows, approvals, evidence, and reporting in Data Center Construction Coordinator.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Enterprise Identity & Access", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "connector-operations-center",
    title: "Connector Operations Center",
    href: "/connector-operations-center",
    category: "Production Platform",
    icon: Workflow,
    summary: "Connector Operations Center workspace for domain workflows, approvals, evidence, and reporting in Data Center Construction Coordinator.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Connector Operations Center", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "audit-export-center",
    title: "Audit Export Center",
    href: "/audit-export-center",
    category: "Production Platform",
    icon: BarChart3,
    summary: "Audit Export Center workspace for domain workflows, approvals, evidence, and reporting in Data Center Construction Coordinator.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Audit Export Center", value: "108", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "notification-delivery-ledger",
    title: "Notification Delivery Ledger",
    href: "/notification-delivery-ledger",
    category: "Production Platform",
    icon: ClipboardList,
    summary: "Notification Delivery Ledger workspace for domain workflows, approvals, evidence, and reporting in Data Center Construction Coordinator.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Notification Delivery Ledger", value: "117", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "observability-runbooks",
    title: "Observability & Runbooks",
    href: "/observability-runbooks",
    category: "Production Platform",
    icon: CalendarCheck,
    summary: "Observability & Runbooks workspace for domain workflows, approvals, evidence, and reporting in Data Center Construction Coordinator.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Observability & Runbooks", value: "126", note: 'Active records' },
      { label: 'Exceptions', value: "7", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "release-test-harness",
    title: "Release Test Harness",
    href: "/release-test-harness",
    category: "Production Platform",
    icon: PackageCheck,
    summary: "Release Test Harness workspace for domain workflows, approvals, evidence, and reporting in Data Center Construction Coordinator.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Release Test Harness", value: "135", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "10", note: 'Next 14 days' },
    ],
  },
  {
    slug: "production-gap-workspace",
    title: "Production Gap Workspace",
    href: "/production-gap-workspace",
    category: "Production Platform",
    icon: Activity,
    summary: "Production Gap Workspace workspace for domain workflows, approvals, evidence, and reporting in Data Center Construction Coordinator.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Production Gap Workspace", value: "144", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "11", note: 'Next 14 days' },
    ],
  }
] as const;

const allFeatures = [...features, ...supplementalFeatures, ...productionPlatformFeatures, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Production Readiness', href: '/production-readiness', icon: ShieldCheck },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Production Platform Controls', features: ['Enterprise Identity & Access', 'Connector Operations Center', 'Audit Export Center', 'Notification Delivery Ledger', 'Observability & Runbooks', 'Release Test Harness', 'Production Gap Workspace'] },
  { name: "Data Center Build Controls", features: ["Permit Milestone Tracker","Long Lead Equipment Board","Commissioning Readiness","Trade Coordination","Change Order Risk","Safety Observations","Grid Interconnect Tasks"] },
  {
    "name": "Planning",
    "features": [
      "Site Readiness"
    ]
  },
  {
    "name": "Permitting",
    "features": [
      "Permit Tracker"
    ]
  },
  {
    "name": "Engineering",
    "features": [
      "Power Cooling Coordination"
    ]
  },
  {
    "name": "Execution",
    "features": [
      "Contractor Schedule"
    ]
  },
  {
    "name": "Procurement",
    "features": [
      "Supply Chain Risk"
    ]
  },
  {
    "name": "Quality",
    "features": [
      "Inspection Readiness"
    ]
  },
  {
    "name": "Commissioning",
    "features": [
      "Commissioning Plan"
    ]
  },
  {
    "name": "Commercial",
    "features": [
      "Change Order Review"
    ]
  },
  {
    "name": "Safety",
    "features": [
      "Safety Risk Log"
    ]
  },
  {
    "name": "Reporting",
    "features": [
      "Executive Build Report"
    ]
  },
  {
    "name": "Core Platform",
    "features": [
      "Documents",
      "Notifications",
      "Integrations",
      "Profiles"
    ]
  },
  {
    "name": "Intelligence Layer",
    "features": [
      "AI Assistant",
      "AI Tools"
    ]
  }
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: feature.title + ' is implemented as a dedicated Data Center Construction Coordinator workflow with records, AI assistance, approvals, audit, and reporting.',
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries([...features, ...supplementalFeatures, ...productionPlatformFeatures].map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: suiteSourceOwners,
      operatingQueues: [feature.title + ' records', feature.title + ' approvals', feature.title + ' exceptions'],
      outputs: [feature.title + ' dashboard', feature.title + ' export', feature.title + ' audit trail'],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'AI Tools', href: '/features/ai-tools' }],
    },
  ]),
);
