# Restauria — Domain Entities

Data model derived from `project_backlog.md` (stories TPL-001 to TPL-166) and the reference pages in `restauria-html-template/`. Each entity lists its attributes, its relations and the user stories that require it.

Conventions:

- Every entity has an `id` (UUID), `createdAt` and `updatedAt`; they are not repeated below.
- `1 - n` reads "one A has many B"; `n - 1` is the owning side; `n - n` is a join table.
- Every tenant-scoped entity is reachable from a `Restaurant`. Global entities are marked as such.
- Money is stored as integer cents.
- The four demo profiles (small, large, group, takeaway-only) are data, not entities: a profile is an `Organization` with one or several `Restaurant` rows and their `serviceModes`.

## Overview

```
Organization 1-n Restaurant n-n Cuisine
     |                |
     |                +-- 1-n MenuCategory 1-n Dish n-1 BaseProduct (global catalog)
     |                |                        +-- 1-n DishOptionGroup 1-n DishOption
     |                +-- 1-n MenuImport 1-n MenuImportItem
     |                +-- 1-n Room 1-n Table 1-n TableSession 1-n Order 1-n OrderLine 1-n OrderLineOption
     |                +-- 1-n StaffMembership n-1 User
     |                +-- 1-n OpeningHour, DeliveryZone, PaymentMethodConfig
     |                +-- 1-1 RestaurantSettings
     |                +-- 1-n OnboardingStep, ActivityLog, SupportTicket 1-n SupportMessage
     +-- 1-1 Subscription n-1 Plan
                |
                +-- 1-n Invoice
Order 1-n Payment 1-n Refund
Order 1-n OrderStatusHistory
Order 1-1 TakeawayDetails, 1-1 DeliveryDetails
Order n-1 User (customer account, optional)
PlatformSetting, FeatureFlag, ContactMessage (global)
```

## Epic 2 — Accounts

### User

Global entity. Customers, restaurant owners, staff members and platform administrators share one login table; the template separates them only by entry point (`/login` vs `/login/restaurant`).

| Attribute | Type | Notes |
| --- | --- | --- |
| email | string, unique | login identifier |
| password | string | hashed |
| firstName | string | |
| lastName | string | |
| roles | json | `ROLE_CUSTOMER`, `ROLE_RESTAURANT`, `ROLE_PLATFORM_ADMIN` |
| isVerified | bool | TPL-017, TPL-023 |
| status | enum | `active`, `suspended`, `pending` (TPL-147) |
| lastLoginAt | datetime, nullable | TPL-147 security column |

Relations:

- `User 1 - n StaffMembership` (restaurants the user works in and with which role, TPL-148).
- `User 1 - n Organization` as owner.
- `User 1 - n Order` as optional customer account (TPL-062 states the demo works without one).
- `User 1 - n EmailVerificationToken`, `User 1 - n PasswordResetToken`.

Stories: TPL-014 to TPL-019, TPL-022, TPL-023, TPL-147, TPL-148.

### EmailVerificationToken

| Attribute | Type |
| --- | --- |
| user | n - 1 User |
| token | string, unique |
| expiresAt | datetime |

Stories: TPL-017, TPL-023.

### PasswordResetToken

| Attribute | Type |
| --- | --- |
| user | n - 1 User |
| token | string, unique |
| expiresAt | datetime |
| usedAt | datetime, nullable |

Stories: TPL-016, TPL-022.

### RestaurantRegistrationDraft

Server-side counterpart of the browser draft (TPL-021). Optional: only needed if drafts must survive the browser.

| Attribute | Type | Notes |
| --- | --- | --- |
| email | string | |
| address | embedded Address | |
| cuisines | n - n Cuisine | at most 5 (TPL-020) |
| expiresAt | datetime | |

Stories: TPL-019 to TPL-021.

## Epic 1 — Public site

### ContactMessage

Global entity storing the two contact forms.

| Attribute | Type | Notes |
| --- | --- | --- |
| audience | enum | `customer`, `restaurant` |
| name | string | |
| email | string | |
| restaurantName | string, nullable | professional form |
| message | text | |
| handledAt | datetime, nullable | |

Stories: TPL-010, TPL-011.

## Epic 7 and 13 — Organization and restaurant

### Organization

Billing tenant. The group profile ("Groupe Épicure") switches between several establishments, so the subscription is attached to the organization rather than to a single restaurant.

| Attribute | Type | Notes |
| --- | --- | --- |
| name | string | |
| owner | n - 1 User | the account that registered (TPL-019) |
| billingEmail | string | |
| billingAddress | embedded Address | TPL-129 |
| vatNumber | string, nullable | |
| status | enum | `active`, `suspended`, `trial` (TPL-142, TPL-145) |

Relations:

- `Organization 1 - n Restaurant`.
- `Organization 1 - 1 Subscription`.

Stories: TPL-019, TPL-027, TPL-068, TPL-127, TPL-142 to TPL-145.

### Restaurant

Root of tenant isolation; one row per establishment.

| Attribute | Type | Notes |
| --- | --- | --- |
| organization | n - 1 Organization | |
| name | string | |
| slug | string, unique | public URL, `demo-restau` in the template |
| description | text, nullable | |
| phone | string, nullable | TPL-118 |
| email | string, nullable | |
| address | embedded Address | street, postalCode, city, department, country, latitude, longitude |
| timezone | string | |
| currency | string | ISO 4217 |
| logoPath | string, nullable | TPL-122 |
| coverImagePath | string, nullable | directory card |
| serviceModes | json | subset of `table`, `takeaway`; at least one (TPL-065, TPL-066) |
| isOrderingOpen | bool | TPL-120 |
| isListedInDirectory | bool | TPL-004 |
| isActive | bool | TPL-145 |
| menuPublishedAt | datetime, nullable | TPL-166 |

Relations:

- `Restaurant n - n Cuisine` (up to 5, TPL-020; directory filter TPL-005).
- `Restaurant 1 - 1 RestaurantSettings`.
- `Restaurant 1 - n OpeningHour`.
- `Restaurant 1 - n MenuCategory`, `1 - n Dish`, `1 - n MenuImport`.
- `Restaurant 1 - n Room`, `1 - n Table`.
- `Restaurant 1 - n Order`.
- `Restaurant 1 - n DeliveryZone`, `1 - n PaymentMethodConfig`.
- `Restaurant 1 - n StaffMembership`.
- `Restaurant 1 - n OnboardingStep`, `1 - n ActivityLog`, `1 - n SupportTicket`.

Stories: TPL-004 to TPL-006, TPL-019, TPL-020, TPL-032, TPL-041, TPL-042, TPL-065 to TPL-068, TPL-118, TPL-122, TPL-136, TPL-142 to TPL-146.

### RestaurantSettings

One row per restaurant, matching the `app/settings/*` pages.

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | 1 - 1 Restaurant | |
| autoAcceptOrders | bool | TPL-120 |
| tipsEnabled | bool | TPL-120 |
| takeawayPreparationMinutes | int | pickup estimate (TPL-054, TPL-114) |
| takeawayPaymentAtPickup | bool | TPL-054 |
| deliveryEnabled | bool | TPL-117 |
| deliveryMinimumAmount | int, nullable | TPL-117 |
| primaryColor | string, nullable | TPL-122 |

Stories: TPL-054, TPL-114, TPL-117, TPL-120, TPL-122.

### OpeningHour

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| dayOfWeek | int | 1 to 7 |
| opensAt | time | |
| closesAt | time | |

Story: TPL-119.

## Epic 8 — Platform catalog

### Cuisine

Global referential managed at `/admin/cuisines`.

| Attribute | Type | Notes |
| --- | --- | --- |
| name | string, unique | TPL-070, TPL-077 |
| slug | string, unique | directory filter value |

Relations: `Cuisine n - n Restaurant`.

Stories: TPL-005, TPL-020, TPL-069 to TPL-072, TPL-077.

### BaseProduct

Global shared catalog managed at `/admin/products`; every restaurant dish is a variant of one base product.

| Attribute | Type | Notes |
| --- | --- | --- |
| name | string, unique | TPL-074, TPL-077 |
| searchTerms | json | alternate terms for autocomplete (TPL-081) |
| defaultCategoryName | string, nullable | |

Relations: `BaseProduct 1 - n Dish` (cascade delete, TPL-076).

Stories: TPL-073 to TPL-077, TPL-080 to TPL-083.

## Epic 9 and 17 — Restaurant menu

### MenuCategory

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| name | string | |
| position | int | TPL-160 |
| isActive | bool | |

Relations: `MenuCategory 1 - n Dish`.

Stories: TPL-033, TPL-159 to TPL-161.

### Dish

Restaurant-specific variant of a `BaseProduct` (TPL-079). Unique on `(restaurant, baseProduct)` (TPL-086).

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| baseProduct | n - 1 BaseProduct | required (TPL-083) |
| category | n - 1 MenuCategory, nullable | |
| name | string | menu name (TPL-084) |
| description | text, nullable | |
| price | int | cents (TPL-086) |
| imagePath | string, nullable | resized upload (TPL-085) |
| allergens | json | list of strings (TPL-035) |
| removableIngredients | json | list of strings (TPL-035, TPL-036) |
| position | int | |
| isAvailable | bool | TPL-039, TPL-040 |
| isDeleted | bool | soft delete keeps order history valid (TPL-088) |

Relations: `Dish 1 - n DishOptionGroup`, `Dish 1 - n OrderLine`.

Stories: TPL-032 to TPL-040, TPL-078 to TPL-090, TPL-133.

### DishOptionGroup

Single-choice or multiple-choice option set (TPL-162).

| Attribute | Type | Notes |
| --- | --- | --- |
| dish | n - 1 Dish | |
| name | string | |
| minSelections | int | 0 means optional |
| maxSelections | int | 1 means single choice |
| position | int | |

Relations: `DishOptionGroup 1 - n DishOption`.

Story: TPL-162.

### DishOption

| Attribute | Type | Notes |
| --- | --- | --- |
| group | n - 1 DishOptionGroup | |
| name | string | |
| priceDelta | int | cents, may be 0 |
| position | int | |
| isAvailable | bool | |

Story: TPL-162.

### MenuImport

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| requestedBy | n - 1 User | |
| sourceType | enum | `pdf`, `url` (TPL-163) |
| sourcePath | string, nullable | |
| sourceUrl | string, nullable | |
| status | enum | `pending`, `processing`, `review`, `applied`, `failed` |
| errorMessage | text, nullable | |
| appliedAt | datetime, nullable | |

Relations: `MenuImport 1 - n MenuImportItem`.

Stories: TPL-137, TPL-163, TPL-164.

### MenuImportItem

| Attribute | Type | Notes |
| --- | --- | --- |
| import | n - 1 MenuImport | |
| categoryName | string | |
| name | string | |
| description | text, nullable | |
| price | int, nullable | |
| matchedBaseProduct | n - 1 BaseProduct, nullable | suggested match |
| isAccepted | bool | |
| createdDish | n - 1 Dish, nullable | set once applied |

Story: TPL-164.

## Epic 10 — Floor and tables

### Room

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| name | string | |
| position | int | |

Relations: `Room 1 - n Table`.

Stories: TPL-092, TPL-093, TPL-138.

### Table

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| room | n - 1 Room, nullable | TPL-094 |
| name | string | label printed on the QR |
| capacity | int | TPL-094 |
| status | enum | `available`, `occupied`, `reserved`, `cleaning` (TPL-091) |
| isActive | bool | |
| qrToken | string, unique | TPL-097, TPL-098 |
| qrGeneratedAt | datetime | |

Relations: `Table 1 - n TableSession`.

Stories: TPL-091, TPL-094 to TPL-099, TPL-108, TPL-109, TPL-134, TPL-139.

### TableSession

A seating from open to close; groups every order of the same guests so a table can hold several orders.

| Attribute | Type | Notes |
| --- | --- | --- |
| table | n - 1 Table | |
| restaurant | n - 1 Restaurant | |
| openedBy | n - 1 User, nullable | waiter, null when opened by a QR scan |
| openedAt | datetime | |
| closedAt | datetime, nullable | |
| guestCount | int, nullable | |
| status | enum | `open`, `bill_requested`, `closed` |

Relations: `TableSession 1 - n Order`.

Stories: TPL-052, TPL-056, TPL-096, TPL-109, TPL-110.

## Epic 6, 11 and 12 — Orders and payments

### Order

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | TPL-050 |
| number | string | per-restaurant sequence, shown as `#1042` |
| serviceMode | enum | `table`, `takeaway`, `delivery` (TPL-049) |
| channel | enum | `customer_qr`, `waiter`, `online` |
| tableSession | n - 1 TableSession, nullable | table orders |
| customerAccount | n - 1 User, nullable | TPL-062 |
| placedBy | n - 1 User, nullable | waiter (TPL-110) |
| status | enum | `received`, `preparing`, `ready`, `served`, `collected`, `out_for_delivery`, `delivered`, `cancelled` (TPL-102, TPL-103, TPL-112) |
| note | text, nullable | TPL-053 |
| subtotal | int | TPL-047 |
| deliveryFee | int | |
| tipAmount | int | TPL-120 |
| total | int | |
| paymentStatus | enum | `unpaid`, `paid`, `partially_refunded`, `refunded` (TPL-153) |
| trackingToken | string, unique | customer tracking page (TPL-058) |

Relations:

- `Order 1 - n OrderLine`.
- `Order 1 - n OrderStatusHistory`.
- `Order 1 - n Payment`.
- `Order 1 - 1 TakeawayDetails` (when `serviceMode = takeaway`).
- `Order 1 - 1 DeliveryDetails` (when `serviceMode = delivery`).

Stories: TPL-052 to TPL-061, TPL-064, TPL-100 to TPL-107, TPL-111 to TPL-113, TPL-115, TPL-116, TPL-131, TPL-132, TPL-153, TPL-154.

### OrderLine

Snapshot of the dish at order time so menu edits never alter history. Two lines with different `removedIngredients` or options stay separate (TPL-044).

| Attribute | Type | Notes |
| --- | --- | --- |
| order | n - 1 Order | |
| dish | n - 1 Dish | |
| dishName | string | snapshot |
| imagePath | string, nullable | snapshot (TPL-043) |
| unitPrice | int | snapshot |
| quantity | int | 1 to 20 (TPL-045, TPL-046) |
| removedIngredients | json | subset of the dish's `removableIngredients` (TPL-036, TPL-038) |
| lineTotal | int | includes options |
| note | text, nullable | TPL-110 |

Relations: `OrderLine 1 - n OrderLineOption`.

Stories: TPL-036 to TPL-038, TPL-043 to TPL-047, TPL-100, TPL-101, TPL-111.

### OrderLineOption

| Attribute | Type | Notes |
| --- | --- | --- |
| orderLine | n - 1 OrderLine | |
| dishOption | n - 1 DishOption, nullable | |
| groupName | string | snapshot |
| optionName | string | snapshot |
| priceDelta | int | snapshot |

Story: TPL-162.

### OrderStatusHistory

| Attribute | Type | Notes |
| --- | --- | --- |
| order | n - 1 Order | |
| fromStatus | enum, nullable | |
| toStatus | enum | |
| changedBy | n - 1 User, nullable | null for system or customer |
| changedAt | datetime | |

Stories: TPL-058, TPL-102, TPL-103, TPL-106, TPL-112.

### TakeawayDetails

| Attribute | Type | Notes |
| --- | --- | --- |
| order | 1 - 1 Order | |
| pickupName | string | required (TPL-053, TPL-055) |
| estimatedReadyAt | datetime | from `takeawayPreparationMinutes` (TPL-054) |
| collectedAt | datetime, nullable | TPL-112 |

Stories: TPL-053 to TPL-055, TPL-057, TPL-111 to TPL-113.

### DeliveryDetails

| Attribute | Type | Notes |
| --- | --- | --- |
| order | 1 - 1 Order | |
| deliveryZone | n - 1 DeliveryZone, nullable | |
| recipientName | string | |
| phone | string | |
| address | embedded Address | |
| instructions | text, nullable | |
| dispatchedAt | datetime, nullable | |
| deliveredAt | datetime, nullable | |

Stories: TPL-115, TPL-116.

### DeliveryZone

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| name | string | |
| postalCodes | json | |
| fee | int | TPL-117 |
| minimumOrderAmount | int, nullable | TPL-117 |
| isActive | bool | |

Story: TPL-117.

### PaymentMethodConfig

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| method | enum | `cash`, `card_on_site`, `online` |
| isEnabled | bool | |
| providerConfig | json, nullable | encrypted provider keys for `online` |

Story: TPL-121.

### Payment

| Attribute | Type | Notes |
| --- | --- | --- |
| order | n - 1 Order | |
| method | enum | same values as PaymentMethodConfig |
| amount | int | |
| status | enum | `pending`, `succeeded`, `failed` |
| provider | string, nullable | |
| providerReference | string, unique, nullable | payment identifier (TPL-154) |
| webhookStatus | enum, nullable | `pending`, `received`, `failed` (TPL-154) |
| paidAt | datetime, nullable | |

Relations: `Payment 1 - n Refund`.

Stories: TPL-153, TPL-154.

### Refund

| Attribute | Type | Notes |
| --- | --- | --- |
| payment | n - 1 Payment | |
| amount | int | |
| reason | string, nullable | |
| status | enum | `pending`, `succeeded`, `failed` |
| providerReference | string, nullable | |
| requestedBy | n - 1 User | |

Story: TPL-153.

## Epic 13 — Staff

### StaffMembership

Join between a `User` and a `Restaurant` carrying the role, so one person can work in several restaurants of a group.

| Attribute | Type | Notes |
| --- | --- | --- |
| user | n - 1 User | |
| restaurant | n - 1 Restaurant | |
| role | enum | `owner`, `manager`, `waiter`, `kitchen` |
| permissions | json, nullable | overrides of the role defaults (TPL-126) |
| invitedBy | n - 1 User, nullable | |
| invitationToken | string, unique, nullable | TPL-124 |
| invitedAt | datetime, nullable | |
| acceptedAt | datetime, nullable | |
| isActive | bool | |

Stories: TPL-018, TPL-123 to TPL-126, TPL-147, TPL-148.

## Epic 14 and 16 — Plans and subscriptions

### Plan

Global entity managed at `/admin/plans`.

| Attribute | Type | Notes |
| --- | --- | --- |
| name | string, unique | |
| code | string, unique | |
| monthlyPrice | int | TPL-152 |
| yearlyPrice | int, nullable | |
| maxRestaurants | int, nullable | TPL-152 limits |
| maxTables | int, nullable | |
| maxDishes | int, nullable | |
| maxStaff | int, nullable | |
| features | json | |
| isPublic | bool | shown on `/pricing/restaurant` (TPL-009, TPL-128) |
| isActive | bool | |

Relations: `Plan 1 - n Subscription`.

Stories: TPL-009, TPL-128, TPL-144, TPL-151, TPL-152.

### Subscription

| Attribute | Type | Notes |
| --- | --- | --- |
| organization | 1 - 1 Organization | |
| plan | n - 1 Plan | |
| status | enum | `trialing`, `active`, `past_due`, `cancelled` (TPL-127, TPL-149) |
| billingInterval | enum | `monthly`, `yearly` |
| currentPeriodStart | datetime | |
| currentPeriodEnd | datetime | renewal (TPL-149) |
| cancelAt | datetime, nullable | |
| providerCustomerId | string, nullable | |
| providerSubscriptionId | string, nullable | reference (TPL-150) |
| paymentMethodLast4 | string, nullable | TPL-129 |

Relations: `Subscription 1 - n Invoice`.

Stories: TPL-127 to TPL-129, TPL-144, TPL-145, TPL-149, TPL-150.

### Invoice

| Attribute | Type | Notes |
| --- | --- | --- |
| subscription | n - 1 Subscription | |
| number | string, unique | |
| amount | int | |
| status | enum | `draft`, `paid`, `failed`, `refunded` |
| issuedAt | datetime | |
| paidAt | datetime, nullable | |
| pdfPath | string, nullable | |

Stories: TPL-130, TPL-149, TPL-150.

## Epic 15 — Onboarding

### OnboardingStep

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant | |
| step | enum | `restaurant`, `menu`, `floor`, `qr_codes` |
| completedAt | datetime, nullable | |
| skippedAt | datetime, nullable | takeaway-only restaurants skip floor steps (TPL-067) |

Stories: TPL-135 to TPL-140.

## Epic 16 — Platform administration

### ActivityLog

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant, nullable | |
| actor | n - 1 User, nullable | |
| action | string | e.g. `plan.changed`, `restaurant.suspended` |
| payload | json, nullable | |
| occurredAt | datetime | |

Story: TPL-146.

### SupportTicket

| Attribute | Type | Notes |
| --- | --- | --- |
| restaurant | n - 1 Restaurant, nullable | |
| openedBy | n - 1 User | |
| assignedTo | n - 1 User, nullable | owner column (TPL-155) |
| reference | string, unique | shown as `T-1` |
| subject | string | |
| category | enum | `billing`, `technical`, `menu`, `orders`, `other` |
| priority | enum | `low`, `normal`, `high`, `urgent` |
| status | enum | `open`, `pending`, `resolved`, `closed` |
| closedAt | datetime, nullable | |

Relations: `SupportTicket 1 - n SupportMessage`.

Stories: TPL-155, TPL-156.

### SupportMessage

| Attribute | Type | Notes |
| --- | --- | --- |
| ticket | n - 1 SupportTicket | |
| author | n - 1 User | |
| body | text | |
| isInternal | bool | |

Story: TPL-156.

### PlatformSetting

Global key-value configuration.

| Attribute | Type | Notes |
| --- | --- | --- |
| key | string, unique | `app_name`, `sender_email`, `webhook_url`, `webhook_secret` |
| value | text, nullable | |

Story: TPL-157.

### FeatureFlag

| Attribute | Type | Notes |
| --- | --- | --- |
| code | string, unique | |
| label | string | |
| isEnabled | bool | |
| restaurants | n - n Restaurant, nullable | beta scope; empty means global |

Story: TPL-158.

## Embeddable

### Address

| Attribute | Type |
| --- | --- |
| street | string |
| postalCode | string |
| city | string |
| department | string, nullable |
| country | string |
| latitude | decimal, nullable |
| longitude | decimal, nullable |

Used by `Restaurant`, `Organization`, `DeliveryDetails`, `RestaurantRegistrationDraft`. The `department` field backs the directory filter (TPL-005).

## Derived data, no entity

- Cart (Epic 5): browser-local until checkout; only the resulting `Order` is persisted.
- Local order history (TPL-059 to TPL-061): list of `Order.trackingToken` kept in the browser.
- Demo profile and establishment switchers (TPL-025 to TPL-027): selection of an `Organization` and `Restaurant`.
- Analytics (TPL-131 to TPL-134): aggregations over `Order`, `OrderLine`, `TableSession`.
- Dashboard indicators (TPL-063, TPL-064, TPL-141): counts over `Order`, `Subscription`, `Payment`.
- QR code images (TPL-097 to TPL-099): rendered from `Table.qrToken`.
- Route directory, design docs, user-story page, 404 (Epic 3): static pages.

## Relations summary

| From | To | Cardinality |
| --- | --- | --- |
| User | StaffMembership | 1 - n |
| User | Organization | 1 - n (owner) |
| User | Order | 1 - n (customerAccount, nullable) |
| User | EmailVerificationToken | 1 - n |
| User | PasswordResetToken | 1 - n |
| Organization | Restaurant | 1 - n |
| Organization | Subscription | 1 - 1 |
| Plan | Subscription | 1 - n |
| Subscription | Invoice | 1 - n |
| Restaurant | Cuisine | n - n |
| Restaurant | RestaurantSettings | 1 - 1 |
| Restaurant | OpeningHour | 1 - n |
| Restaurant | MenuCategory | 1 - n |
| Restaurant | Dish | 1 - n |
| BaseProduct | Dish | 1 - n |
| MenuCategory | Dish | 1 - n |
| Dish | DishOptionGroup | 1 - n |
| DishOptionGroup | DishOption | 1 - n |
| Restaurant | MenuImport | 1 - n |
| MenuImport | MenuImportItem | 1 - n |
| BaseProduct | MenuImportItem | 1 - n (matchedBaseProduct, nullable) |
| Restaurant | Room | 1 - n |
| Room | Table | 1 - n |
| Restaurant | Table | 1 - n |
| Table | TableSession | 1 - n |
| TableSession | Order | 1 - n |
| Restaurant | Order | 1 - n |
| Order | OrderLine | 1 - n |
| Dish | OrderLine | 1 - n |
| OrderLine | OrderLineOption | 1 - n |
| DishOption | OrderLineOption | 1 - n (nullable) |
| Order | OrderStatusHistory | 1 - n |
| Order | TakeawayDetails | 1 - 1 |
| Order | DeliveryDetails | 1 - 1 |
| DeliveryZone | DeliveryDetails | 1 - n (nullable) |
| Restaurant | DeliveryZone | 1 - n |
| Restaurant | PaymentMethodConfig | 1 - n |
| Order | Payment | 1 - n |
| Payment | Refund | 1 - n |
| Restaurant | StaffMembership | 1 - n |
| Restaurant | OnboardingStep | 1 - n |
| Restaurant | ActivityLog | 1 - n (nullable) |
| Restaurant | SupportTicket | 1 - n (nullable) |
| SupportTicket | SupportMessage | 1 - n |
| User | SupportTicket | 1 - n (assignedTo, nullable) |
| FeatureFlag | Restaurant | n - n |
