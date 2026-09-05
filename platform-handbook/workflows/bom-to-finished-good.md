# Workflow: BOM to Finished Good

## Overview

In-house production path from bill of materials through assembly bookings until finished goods are in stock and the work order is closed.

## Process Flow

```
BOM Master Setup → Work Order Create → Work Order Approve
    → Print Picklist → Production/Assembly Booking → Post Booking
    → Stock & Ledger Update → (Repeat bookings until complete)
    → Work Order Complete or Short Close
```

## Prerequisites

1. Finished good and component products exist in Product Master
2. Production warehouse is configured
3. Component stock is available (PO inward, transfer, or adjustment)
4. Rejection warehouse configured if rejects are expected
5. Role permissions for BOM Master, Work Orders, and Production/Assembly Booking

## Stage Summary

| Stage | Module | Outcome |
|-------|--------|---------|
| BOM setup | BOM Master | ACTIVE recipe with standard material + operation cost |
| Create WO | Work Orders | DRAFT work order with planned qty |
| Approve WO | Work Orders | BOM snapshot frozen; production authorized |
| Pick | Work Order picklist PDF | Components staged; shortages visible |
| Book | Production/Assembly Booking | Components issued; FG received; ledger updated |
| Close | Work Orders | Complete or short-close with history retained |

## Boundary Notes

- **Production BOM** = manufacturing recipe for FG kitting
- **Project Bill of Materials** = sales/planning BOM on quotes and orders — different purpose
- **Fabrication & Installation** = field/project execution after sales — not warehouse assembly
