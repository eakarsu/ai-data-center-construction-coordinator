export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai-data-center-construction-coordinator-site-readiness",
    "sourceProject": "Data Center Construction Coordinator",
    "name": "site_readiness",
    "displayName": "Site Readiness",
    "framework": "AppSchema",
    "sourceFile": "generated/site-readiness.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Planning",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-data-center-construction-coordinator-permit-tracker",
    "sourceProject": "Data Center Construction Coordinator",
    "name": "permit_tracker",
    "displayName": "Permit Tracker",
    "framework": "AppSchema",
    "sourceFile": "generated/permit-tracker.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Permitting",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-data-center-construction-coordinator-power-cooling-coordination",
    "sourceProject": "Data Center Construction Coordinator",
    "name": "power_cooling_coordination",
    "displayName": "Power Cooling Coordination",
    "framework": "AppSchema",
    "sourceFile": "generated/power-cooling-coordination.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Engineering",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-data-center-construction-coordinator-contractor-schedule",
    "sourceProject": "Data Center Construction Coordinator",
    "name": "contractor_schedule",
    "displayName": "Contractor Schedule",
    "framework": "AppSchema",
    "sourceFile": "generated/contractor-schedule.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Execution",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-data-center-construction-coordinator-supply-chain-risk",
    "sourceProject": "Data Center Construction Coordinator",
    "name": "supply_chain_risk",
    "displayName": "Supply Chain Risk",
    "framework": "AppSchema",
    "sourceFile": "generated/supply-chain-risk.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Procurement",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-data-center-construction-coordinator-inspection-readiness",
    "sourceProject": "Data Center Construction Coordinator",
    "name": "inspection_readiness",
    "displayName": "Inspection Readiness",
    "framework": "AppSchema",
    "sourceFile": "generated/inspection-readiness.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Quality",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-data-center-construction-coordinator-commissioning-plan",
    "sourceProject": "Data Center Construction Coordinator",
    "name": "commissioning_plan",
    "displayName": "Commissioning Plan",
    "framework": "AppSchema",
    "sourceFile": "generated/commissioning-plan.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Commissioning",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  },
  {
    "id": "ai-data-center-construction-coordinator-change-order-review",
    "sourceProject": "Data Center Construction Coordinator",
    "name": "change_order_review",
    "displayName": "Change Order Review",
    "framework": "AppSchema",
    "sourceFile": "generated/change-order-review.schema.ts",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": false,
        "primaryKey": true,
        "unique": true,
        "defaultValue": "generated",
        "sourceLine": "id UUID PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "open",
        "sourceLine": "status TEXT NOT NULL"
      },
      {
        "name": "owner",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "Commercial",
        "sourceLine": "category TEXT"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now()",
        "sourceLine": "updated_at TIMESTAMP NOT NULL DEFAULT now()"
      }
    ]
  }
];
