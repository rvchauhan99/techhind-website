# Production / Assembly

## Business Purpose

Plan and execute in-house assembly or kitting of **finished goods (FG)** from component materials at a production warehouse. The module covers BOM definition, work order planning, warehouse picking, component issue, finished-good receipt, cost roll-up, and management visibility — inside the TechHind Solar platform.

Typical use cases:

- Assembling inverter kits, junction boxes, or pre-wired combiner units from stocked components
- Converting bulk or lot-tracked materials into serialized finished goods
- Tracking material consumption, scrap, rejection, and production value for finance and operations

**Not this module:** Field fabrication boards and project installation (see Fabrication & Installation). Sales/project Bill of Materials used in quotations is a separate planning BOM.

## Who Uses It

| Role | Primary screens |
|------|-----------------|
| Production planner | BOM Master, Work Orders, Dashboard |
| Warehouse / stores | Work Order picklist, Production/Assembly Booking |
| Shop-floor operator | Production/Assembly Booking |
| Finance / management | Dashboard KPIs, Work Order cost tabs, Excel exports |

## Screens

| Menu item | Route |
|-----------|-------|
| Production/Assembly Dashboard | `/production-dashboard` |
| BOM Master | `/production-bom` |
| Work Orders | `/production-orders` |
| Production/Assembly Booking | `/production-bookings/new` |
| Booking History | `/production-bookings` |

## Key Capabilities

- **Versioned BOM Master** — Components, optional lines, scrap %, operation costs (labour/machine/overhead/subcontract), standard cost roll-up; DRAFT → ACTIVE → INACTIVE lifecycle
- **Work Orders** — Warehouse + FG + planned qty + priority + schedule; approve to freeze BOM snapshot; track produced / rejected / pending
- **Shortage-aware picklists** — Branded PDF with required / issued / outstanding / on-hand / shortage flags
- **Atomic booking** — One post issues components and receives good FG (and optional rejects); inventory ledger and WAC updated
- **Shop-floor variance** — System backflush for consumed qty; editable scrap + reason; rejection warehouse; component substitutes
- **Serial genealogy** — Capture component + FG serials; trace FG → booking → consumed serials
- **Ops dashboard** — Open WOs, rejection rate, production value, shortage count, overdue, analytics, Excel export
- **Documents** — Work Order PDF, Picklist PDF, multi-sheet Excel

## Core Workflow

```
BOM ACTIVE → Work Order DRAFT → Approve (BOM snapshot frozen)
  → Print Picklist → Post Booking(s) → Stock & cost update
  → Complete or Short Close
```

## How It Fits the Platform

| Adjacent module | Relationship |
|-----------------|--------------|
| Procurement & inventory | Components arrive via PO inward / transfer; production consumes them and returns FG to stock |
| Product Master / serials | FG and components must exist; serial rules enforced at booking |
| B2B / sales orders | Soft demand reference optional; FG stock then feeds dispatch and sales |
| Fabrication & installation | Field/project execution after sales — not warehouse kitting |

## Differentiators

- Manufacturing inside the solar CRM — same tenants, warehouses, serials, users, and branded PDFs
- Approval-gated BOM snapshot — recipe changes do not rewrite open work
- Atomic booking — no spreadsheet reconciliation between issue and FG receipt
- Shortage-aware picking before post
- Serial genealogy for warranty and quality traceability
