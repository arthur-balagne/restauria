# Restauria — Domain Entities

Data model derived from `project_backlog.md` and the reference pages in `restauria-html-template/`. Each entity lists its attributes, its relations and the user stories that require it.

Conventions:

- Every entity has an `id` (UUID), `createdAt` and `updatedAt`; they are not repeated below.
- `1 - n` reads "one A has many B"; `n - 1` is the owning side; `n - n` is a join table.
- Every tenant-scoped entity is reachable from a `Restaurant` (US-250). Global entities are marked as such.
- Money is stored as integer cents in the restaurant currency.

## Overview

```
Organization 1-n Restaurant 1-n Room 1-n Table 1-n TableSession 1-n Order 1-n OrderLine 1-n OrderLineOption
     |                |                                 |              |
     |                |                                 |              +-- n-1 Customer (optional)
     |                +-- 1-n MenuCategory 1-n Product 1-n ProductOptionGroup 1-n ProductOption
     |                +-- 1-n MenuImport 1-n MenuImportItem
     |                +-- 1-n StaffMembership n-1 User
     |                +-- 1-n OpeningHour, DeliveryZone, PaymentMethodConfig
     |                +-- 1-1 RestaurantSettings
     |                +-- n-1 Cuisine
     |                +-- 1-n OnboardingStep
     |                +-- 1-n SupportTicket 1-n SupportMessage
     +-- 1-1 Subscription n-1 Plan
                |
                +-- 1-n Invoice
Order 1-n Payment 1-n Refund
Order 1-n OrderStatusHistory
Order 1-1 DeliveryDetails, 1-1 TakeawayDetails
ReferenceProduct n-1 Cuisine (global referential)
```

## Epic 1 — Accounts

### User

Global entity. A person who can log in: restaurant owner, staff member or platform administrator.

| Attribute | Type | Notes |
| --- | --- | --- |
| email | string, unique | login identifier |
| password | string | hashed |
| firstName | string | |
| lastName | string | |
| roles | json | `ROLE_USER`, `ROLE_PLATFORM_ADMIN` (US-252) |
| isVerified | bool | US-003 |
| isActive | bool | platform-level disable (US-215) |
| lastLoginAt | datetime, nullable | |

Relations:

- `User 1 - n StaffMembership` (restaurants the user works in and with which role).
- `User 1 - n Organization` as owner.
- `User 1 - n EmailVerificationToken`, `User 1 - n PasswordResetToken`.

Stories: US-001, US-002, US-003, US-004, US-214, US-215.

### EmailVerificationToken

| Attribute | Type |
| --- | --- |
| user | n - 1 User |
| token | string, unique |
| expiresAt | datetime |

Story: US-003.

### PasswordResetToken

| Attribute | Type |
| --- | --- |
| user | n - 1 User |
| token | string, unique |
| expiresAt | datetime |
| usedAt | datetime, nullable |

Story: US-004.

## Epic 2 — Restaurant

### Organization

Billing tenant. The `app/` templates show a group ("Groupe Épicure, 3 restaurants") switching between its restaurants, so the subscription is attached to the organization rather than to a single restaurant.

| Attribute | Type | Notes |
| --- | --- | --- |
| name | string | |
| owner | n - 1 User | the account that registered (US-001) |
| billingEmail | string | |
| billingAddress | embedded Address | |
| vatNumber | string, nullable | |
| isActive | bool | |

Relations:

- `Organization 1 - n Restaurant`.
- `Organization 1 - 1 Subscription`.

Stories: US-001, US-010, US-191.

### Restaurant

Root of tenant isolation (US-250).

| Attribute | Type | Notes |
| --- | --- | --- |
| organization | n - 1 Organization | |
| cuisine | n - 1 Cuisine, nullable | admin referential |
| name | string | |
| slug | string, unique | public URL `/restaurants/{slug}` |
| description | text, nullable | |
| phone | string, nullable | |
| email | string, nullable | |
| address | embedded Address | street, postalCode, city, country, latitude, longitude |
| timezone | string | |
| currency | string | ISO 4217 |
| logoPath | string, nullable | US-012 |
| coverImagePath | string, nullable | branding settings page |
| isOrderingOpen | bool | manual switch, US-014 |
| isActive | bool | admin disable, US-213 |
| menuPublishedAt | datetime, nullable | US-034 |

Relations:

- `Restaurant 1 - 1 RestaurantSettings`.
- `Restaurant 1 - n OpeningHour`.
- `Restaurant 1 - n MenuCategory`, `1 - n Product`, `1 - n MenuImport`.
- `Restaurant 1 - n Room`, `1 - n Table`.
- `Restaurant 1 - n Order`, `1 - n Customer`.
- `Restaurant 1 - n DeliveryZone`, `1 - n PaymentMethodConfig`.
- `Restaurant 1 - n StaffMembership`.
- `Restaurant 1 - n OnboardingStep`.
- `Restaurant 1 - n SupportTicket`.

Stories: US-010 to US-014, US-211 to US-213.

### RestaurantSettings

One row per restaurant, matching the `app/settings/*` pages (orders, takeaway, delivery, payments).

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | 1 - 1 Restaurant | |
| dineInEnabled | bool | |
| takeawayEnabled | bool | US-130 |
| takeawayLeadTimeMinutes | int | US-132 |
| takeawaySlotIntervalMinutes | int | US-132 |
| takeawayMaxOrdersPerSlot | int, nullable | US-132 |
| deliveryEnabled | bool | US-140 |
| deliveryMinimumAmount | int, nullable | |
| autoAcceptOrders | bool | orders settings page |
| orderNotePlaceholder | string, nullable | |
| primaryColor | string, nullable | branding |

Stories: US-130, US-132, US-140, US-142, US-150.

### OpeningHour

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| dayOfWeek | int | 1 to 7 |
| opensAt | time | |
| closesAt | time | |
| service | enum | `dine_in`, `takeaway`, `delivery`, `all` |

Story: US-013.

## Epic 3 and 4 — Menu

### MenuCategory

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| name | string | |
| description | text, nullable | |
| position | int | US-024 |
| isActive | bool | |

Relations: `MenuCategory 1 - n Product`.

Stories: US-020 to US-024, US-081.

### Product

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | denormalised for isolation queries |
| category | n - 1 MenuCategory | |
| referenceProduct | n - 1 ReferenceProduct, nullable | link to admin referential |
| name | string | |
| description | text, nullable | |
| price | int | cents |
| imagePath | string, nullable | |
| allergens | json, nullable | |
| position | int | |
| isAvailable | bool | US-028 |
| isDeleted | bool | soft delete keeps order history valid (US-027, US-117) |

Relations: `Product 1 - n ProductOptionGroup`, `Product 1 - n OrderLine`.

Stories: US-025 to US-028, US-082, US-182.

### ProductOptionGroup

A set of choices for a product ("Cuisson", "Suppléments").

| Attribute | Type | Notes |
| --- | --- | --- |
| product | n - 1 Product | |
| name | string | |
| minSelections | int | 0 means optional |
| maxSelections | int | 1 means single choice |
| position | int | |

Relations: `ProductOptionGroup 1 - n ProductOption`.

Stories: US-029, US-084, US-102.

### ProductOption

| Attribute | Type | Notes |
| --- | --- | --- |
| group | n - 1 ProductOptionGroup | |
| name | string | |
| priceDelta | int | cents, may be 0 |
| position | int | |
| isAvailable | bool | |

Stories: US-029, US-084.

### MenuImport

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| requestedBy | n - 1 User | |
| sourceType | enum | `pdf`, `image`, `url` |
| sourcePath | string, nullable | uploaded file |
| sourceUrl | string, nullable | |
| status | enum | `pending`, `processing`, `review`, `applied`, `failed` |
| errorMessage | text, nullable | |
| appliedAt | datetime, nullable | |

Relations: `MenuImport 1 - n MenuImportItem`.

Stories: US-030 to US-033, US-202.

### MenuImportItem

Extracted line awaiting review before becoming a `Product`.

| Attribute | Type | Notes |
| --- | --- | --- |
| import | n - 1 MenuImport | |
| categoryName | string | |
| name | string | |
| description | text, nullable | |
| price | int, nullable | |
| isAccepted | bool | |
| createdProduct | n - 1 Product, nullable | set once applied |

Story: US-033.

## Epic 5 to 8 — Floor

### Room

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| name | string | |
| position | int | |

Relations: `Room 1 - n Table`.

Stories: US-040 to US-043, US-203.

### Table

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| room | n - 1 Room, nullable | US-052 |
| name | string | label printed on the QR |
| capacity | int | US-053 |
| status | enum | `available`, `occupied`, `reserved`, `cleaning` (US-071, US-074) |
| isActive | bool | US-055 |
| qrToken | string, unique | current code, regenerated by US-063 |
| qrGeneratedAt | datetime | |

Relations: `Table 1 - n TableSession`.

Stories: US-050 to US-056, US-060 to US-064, US-070 to US-074.

### TableSession

A seating from open to close; groups every order of the same guests (US-120).

| Attribute | Type | Notes |
| --- | --- | --- |
| table | n - 1 Table | |
| restaurant | n - 1 Restaurant | |
| openedBy | n - 1 User, nullable | waiter, null when opened by a QR scan |
| openedAt | datetime | |
| closedAt | datetime, nullable | US-073, US-161 |
| guestCount | int, nullable | |
| status | enum | `open`, `bill_requested`, `closed` |

Relations: `TableSession 1 - n Order`.

Stories: US-072, US-073, US-120 to US-122, US-160 to US-162.

## Epic 9 to 16 — Orders and payments

### Customer

Guest identity for takeaway and delivery. Dine-in orders may have no customer.

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| firstName | string | |
| lastName | string, nullable | |
| phone | string | |
| email | string, nullable | |

Relations: `Customer 1 - n Order`.

Stories: US-131, US-143, US-144.

### Order

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| number | string | per-restaurant sequence, shown as `#1042` |
| type | enum | `dine_in`, `takeaway`, `delivery` |
| channel | enum | `customer_qr`, `waiter`, `online` |
| tableSession | n - 1 TableSession, nullable | dine-in |
| customer | n - 1 Customer, nullable | takeaway and delivery |
| placedBy | n - 1 User, nullable | waiter (US-101) |
| status | enum | `pending`, `accepted`, `preparing`, `ready`, `served`, `out_for_delivery`, `delivered`, `cancelled` |
| note | text, nullable | US-086 |
| subtotal | int | |
| deliveryFee | int | |
| total | int | |
| paymentStatus | enum | `unpaid`, `paid`, `partially_refunded`, `refunded` (US-152) |
| cancellationReason | string, nullable | US-116 |
| trackingToken | string, unique | public tracking page (US-089) |

Relations:

- `Order 1 - n OrderLine`.
- `Order 1 - n OrderStatusHistory`.
- `Order 1 - n Payment`.
- `Order 1 - 1 TakeawayDetails` (when `type = takeaway`).
- `Order 1 - 1 DeliveryDetails` (when `type = delivery`).

Stories: US-087 to US-089, US-100 to US-117, US-131, US-133, US-143, US-146 to US-148, US-230, US-231.

### OrderLine

Snapshot of the product at order time so menu edits never alter history.

| Attribute | Type | Notes |
| --- | --- | --- |
| order | n - 1 Order | |
| product | n - 1 Product | |
| productName | string | snapshot |
| unitPrice | int | snapshot |
| quantity | int | |
| lineTotal | int | includes options |
| note | text, nullable | |

Relations: `OrderLine 1 - n OrderLineOption`.

Stories: US-083, US-085, US-122.

### OrderLineOption

| Attribute | Type | Notes |
| --- | --- | --- |
| orderLine | n - 1 OrderLine | |
| productOption | n - 1 ProductOption | |
| groupName | string | snapshot |
| optionName | string | snapshot |
| priceDelta | int | snapshot |

Stories: US-084, US-102.

### OrderStatusHistory

| Attribute | Type | Notes |
| --- | --- | --- |
| order | n - 1 Order | |
| fromStatus | enum, nullable | |
| toStatus | enum | |
| changedBy | n - 1 User, nullable | null for system or customer |
| changedAt | datetime | |

Stories: US-112 to US-116, US-147, US-148, US-183.

### TakeawayDetails

| Attribute | Type | Notes |
| --- | --- | --- |
| order | 1 - 1 Order | |
| pickupAt | datetime | US-132 |
| pickedUpAt | datetime, nullable | |

Stories: US-131 to US-133.

### DeliveryDetails

| Attribute | Type | Notes |
| --- | --- | --- |
| order | 1 - 1 Order | |
| deliveryZone | n - 1 DeliveryZone | resolved by US-145 |
| address | embedded Address | US-144 |
| instructions | text, nullable | |
| requestedAt | datetime, nullable | |
| dispatchedAt | datetime, nullable | US-147 |
| deliveredAt | datetime, nullable | US-148 |

Stories: US-143 to US-148.

### DeliveryZone

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| name | string | |
| postalCodes | json | list of accepted postal codes |
| radiusKm | decimal, nullable | alternative to postal codes |
| fee | int | US-142 |
| minimumOrderAmount | int, nullable | |
| isActive | bool | |

Stories: US-141, US-142, US-145.

### PaymentMethodConfig

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| method | enum | `cash`, `card_on_site`, `online` |
| isEnabled | bool | |
| providerConfig | json, nullable | encrypted provider keys for `online` |

Story: US-150.

### Payment

| Attribute | Type | Notes |
| --- | --- | --- |
| order | n - 1 Order | |
| method | enum | same values as PaymentMethodConfig |
| amount | int | |
| status | enum | `pending`, `succeeded`, `failed` |
| provider | string, nullable | |
| providerReference | string, unique, nullable | |
| paidAt | datetime, nullable | |

Relations: `Payment 1 - n Refund`.

Stories: US-151, US-152, admin Transactions page.

### Refund

| Attribute | Type | Notes |
| --- | --- | --- |
| payment | n - 1 Payment | |
| amount | int | |
| reason | string, nullable | |
| status | enum | `pending`, `succeeded`, `failed` |
| providerReference | string, nullable | |
| requestedBy | n - 1 User | |

Story: US-153.

## Epic 17 — Staff

### StaffMembership

Join between a `User` and a `Restaurant` carrying the role. Replaces putting restaurant roles on the user so one person can work in several restaurants of a group.

| Attribute | Type | Notes |
| --- | --- | --- |
| user | n - 1 User | |
| restaurant | n - 1 Restaurant | |
| role | enum | `owner`, `manager`, `waiter`, `kitchen` (US-172, US-251) |
| isActive | bool | US-173 |
| invitedAt | datetime | |
| acceptedAt | datetime, nullable | |
| invitationToken | string, unique, nullable | US-171 |

Unique constraint on (`user`, `restaurant`).

Stories: US-170 to US-173, US-251.

## Epic 19 and 22 — Subscriptions

### Plan

Global entity managed by administrators (`admin/plans`).

| Attribute | Type | Notes |
| --- | --- | --- |
| name | string | |
| code | string, unique | |
| monthlyPrice | int | admin form "Prix mensuel" |
| yearlyPrice | int, nullable | |
| limits | json | admin form "Limites (JSON)": restaurants, tables, staff, imports |
| features | json | marketing bullet list on `/pricing` |
| isPublic | bool | shown on the pricing page |
| isActive | bool | |
| position | int | |

Relations: `Plan 1 - n Subscription`.

Stories: US-190, US-220.

### Subscription

| Attribute | Type | Notes |
| --- | --- | --- |
| organization | 1 - 1 Organization | |
| plan | n - 1 Plan | |
| status | enum | `trialing`, `active`, `past_due`, `cancelled`, `expired` |
| billingPeriod | enum | `monthly`, `yearly` |
| currentPeriodStart | datetime | |
| currentPeriodEnd | datetime | |
| trialEndsAt | datetime, nullable | |
| cancelledAt | datetime, nullable | US-194 |
| provider | string, nullable | |
| providerCustomerId | string, nullable | |
| providerSubscriptionId | string, nullable | |

Relations: `Subscription 1 - n Invoice`.

Stories: US-191 to US-194, US-221, US-222.

### Invoice

| Attribute | Type | Notes |
| --- | --- | --- |
| subscription | n - 1 Subscription | |
| number | string, unique | |
| amount | int | |
| currency | string | |
| status | enum | `draft`, `open`, `paid`, `void` |
| issuedAt | datetime | |
| paidAt | datetime, nullable | |
| pdfPath | string, nullable | US-195 |
| providerReference | string, nullable | |

Story: US-195.

## Epic 20 — Onboarding

### OnboardingStep

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| step | enum | `restaurant_info`, `menu`, `floor`, `qr_codes`, `payments` |
| completedAt | datetime, nullable | |

Unique constraint on (`restaurant`, `step`).

Stories: US-200 to US-205.

## Epic 21 — Platform referentials

### Cuisine

Global entity (`admin/cuisines`: française, italienne, fusion, gastronomique, café et pâtisserie, asiatique).

| Attribute | Type | Notes |
| --- | --- | --- |
| name | string, unique | |
| slug | string, unique | used to filter `/restaurants` |
| position | int | |

Relations: `Cuisine 1 - n Restaurant`, `Cuisine 1 - n ReferenceProduct`.

Stories: US-211, public restaurant directory.

### ReferenceProduct

Global entity (`admin/products`: "Produits de référence"). A canonical catalogue used to pre-fill menus and to compare sales across restaurants.

| Attribute | Type | Notes |
| --- | --- | --- |
| cuisine | n - 1 Cuisine, nullable | |
| name | string | |
| defaultCategoryName | string, nullable | |

Relations: `ReferenceProduct 1 - n Product`.

Stories: US-182, US-210.

## Epic 24 — Support

### SupportTicket

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant, nullable | null for contact-form requests from visitors |
| openedBy | n - 1 User, nullable | |
| contactEmail | string | |
| subject | string | |
| status | enum | `open`, `pending`, `resolved`, `closed` |
| priority | enum | `low`, `normal`, `high` |
| assignedTo | n - 1 User, nullable | platform administrator |
| resolvedAt | datetime, nullable | |

Relations: `SupportTicket 1 - n SupportMessage`.

Stories: US-240, US-241, `/contact` page.

### SupportMessage

| Attribute | Type | Notes |
| --- | --- | --- |
| ticket | n - 1 SupportTicket | |
| author | n - 1 User, nullable | |
| body | text | |
| isInternal | bool | admin-only note |

Story: US-241.

## Embeddables

### Address

Reused by `Organization`, `Restaurant` and `DeliveryDetails`.

| Attribute | Type |
| --- | --- |
| street | string |
| complement | string, nullable |
| postalCode | string |
| city | string |
| country | string |
| latitude | decimal, nullable |
| longitude | decimal, nullable |

## Derived data (no entity)

- Cart (US-083 to US-085): kept in the session or local storage until US-087 creates the `Order`.
- Dashboard and analytics (US-180 to US-183, US-210): aggregated from `Order`, `OrderLine`, `Payment`, `TableSession` and `Subscription`; a materialised `DailyRestaurantStats` table can be added later if queries become slow.
- QR code image (US-060 to US-062): rendered on the fly from `Table.qrToken`, not stored.
- Printable QR document (US-062): generated on demand.

## Relations summary

| From | To | Cardinality |
| --- | --- | --- |
| User | Organization | 1 - n (owner) |
| User | StaffMembership | 1 - n |
| User | EmailVerificationToken / PasswordResetToken | 1 - n |
| Organization | Restaurant | 1 - n |
| Organization | Subscription | 1 - 1 |
| Plan | Subscription | 1 - n |
| Subscription | Invoice | 1 - n |
| Cuisine | Restaurant | 1 - n |
| Cuisine | ReferenceProduct | 1 - n |
| ReferenceProduct | Product | 1 - n |
| Restaurant | RestaurantSettings | 1 - 1 |
| Restaurant | OpeningHour | 1 - n |
| Restaurant | MenuCategory | 1 - n |
| Restaurant | Product | 1 - n |
| MenuCategory | Product | 1 - n |
| Product | ProductOptionGroup | 1 - n |
| ProductOptionGroup | ProductOption | 1 - n |
| Restaurant | MenuImport | 1 - n |
| MenuImport | MenuImportItem | 1 - n |
| MenuImportItem | Product | n - 1, nullable |
| Restaurant | Room | 1 - n |
| Room | Table | 1 - n |
| Restaurant | Table | 1 - n |
| Table | TableSession | 1 - n |
| TableSession | Order | 1 - n |
| Restaurant | Customer | 1 - n |
| Customer | Order | 1 - n |
| Restaurant | Order | 1 - n |
| User | Order | 1 - n (placedBy, nullable) |
| Order | OrderLine | 1 - n |
| OrderLine | ProductOption via OrderLineOption | 1 - n |
| Order | OrderStatusHistory | 1 - n |
| Order | TakeawayDetails | 1 - 1, optional |
| Order | DeliveryDetails | 1 - 1, optional |
| DeliveryZone | DeliveryDetails | 1 - n |
| Restaurant | DeliveryZone | 1 - n |
| Restaurant | PaymentMethodConfig | 1 - n |
| Order | Payment | 1 - n |
| Payment | Refund | 1 - n |
| Restaurant | StaffMembership | 1 - n |
| Restaurant | OnboardingStep | 1 - n |
| Restaurant | SupportTicket | 1 - n |
| SupportTicket | SupportMessage | 1 - n |
| User | SupportTicket | 1 - n (assignedTo, nullable) |
