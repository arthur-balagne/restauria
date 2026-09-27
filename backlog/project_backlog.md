# Restauria — User Stories

These stories describe the pages and interactions in the current template. Ordering, catalog changes, and service-mode settings are browser-local demos; most other forms and dashboards are illustrative, not live services.

## Epic 1 — Public discovery

- **TPL-001 — Customer home (/):** As a visitor, I want to understand the customer ordering journey and enter a restaurant demo from the home page.
- **TPL-002 — Customer features (/features):** As a visitor, I want to see how the template presents menus, ordering, and order follow-up before exploring a restaurant.
- **TPL-004 — Restaurant directory (/restaurants):** As a customer, I want to browse the available demo restaurants and open the menu for one that interests me.
- **TPL-005 — Directory filters (/restaurants):** As a customer, I want to narrow demo restaurants by department and cuisine and see the matching results immediately.
- **TPL-006 — Empty directory results (/restaurants):** As a customer, I want to clear my filters when no demo restaurant matches.
- **TPL-007 — Restaurateur home (/restaurant):** As a restaurant owner, I want to explore the business-facing introduction separately from the customer site.
- **TPL-008 — Restaurateur features (/features/restaurant):** As a restaurant owner, I want to review the template's menu, service, and management feature presentation.
- **TPL-009 — Restaurateur pricing (/pricing/restaurant):** As a restaurant owner, I want to compare the illustrative plan presentation before viewing the app demo.
- **TPL-010 — Customer contact (/contact):** As a visitor, I want to see the customer contact form and its prototype-only submission feedback.
- **TPL-011 — Restaurateur contact (/contact/restaurant):** As a restaurant owner, I want to see the separate professional contact form and its prototype-only submission feedback.
- **TPL-012 — Customer information (/terms, /privacy):** As a visitor, I want to read the customer-side terms and privacy placeholder pages.
- **TPL-013 — Professional information (/terms/restaurant, /privacy/restaurant):** As a restaurant owner, I want to read the corresponding professional terms and privacy placeholder pages.

## Epic 2 — Account screens in the template

- **TPL-014 — Customer sign-in (/login):** As a customer, I want to inspect the email-and-password sign-in screen, knowing it does not create a session in this prototype.
- **TPL-015 — Customer registration (/register):** As a customer, I want to inspect the account creation form without assuming an account is created.
- **TPL-016 — Customer password recovery (/forgot-password, /reset-password, /reset-password/123):** As a customer, I want to see the recovery request and new-password screens in the template.
- **TPL-017 — Customer verification (/verify-email):** As a customer, I want to see the email-verification information screen.
- **TPL-018 — Restaurant sign-in (/login/restaurant):** As a restaurant employee, I want to see the professional login form without assuming it authenticates me.
- **TPL-019 — Restaurant registration (/register/restaurant):** As a restaurant owner, I want to fill out the prototype registration form with my establishment information.
- **TPL-020 — Cuisine selection (/register/restaurant):** As a restaurant owner, I want to choose from the available cuisine types, within the template's five-cuisine limit.
- **TPL-021 — Registration draft (/register/restaurant):** As a restaurant owner, I want my address and cuisine selections to remain in this browser while trying the registration preview.
- **TPL-022 — Restaurant recovery (/forgot-password/restaurant, /reset-password/restaurant, /reset-password/123/restaurant):** As a restaurant employee, I want to inspect the professional password-recovery screens.
- **TPL-023 — Restaurant verification (/verify-email/restaurant):** As a restaurant owner, I want to see the professional email-verification screen.

## Epic 3 — Demo navigation and documentation

- **TPL-024 — Route directory (/pages):** As a reviewer, I want to see every route grouped by public, customer, restaurant, and platform-admin area.
- **TPL-025 — Profile-specific route links (/pages):** As a reviewer, I want to open a customer, restaurant, or admin screen under each of the four demo profiles.
- **TPL-026 — Profile switcher:** As a reviewer, I want to switch among the small, large, group, and takeaway-only profiles while exploring the same template.
- **TPL-027 — Group establishment switcher:** As a group operator, I want to view separate establishments within the group profile.
- **TPL-028 — Mobile navigation:** As a visitor on a narrow screen, I want to open the site's navigation and reach the same sections as on desktop.
- **TPL-029 — Design documentation (/design-docs):** As a builder, I want to read the component guide and copy its example snippets.
- **TPL-030 — User-story page (/user-stories):** As a reviewer, I want to read and download this template-derived story list in Markdown.
- **TPL-031 — Missing pages (/404):** As a visitor, I want a clear way back when I follow an unavailable route.

## Epic 4 — Customer menu and product selection, browser-local demo

- **TPL-032 — Restaurant menu (/demo-restau):** As a customer, I want to see the selected demo restaurant's menu, prices, photos, and service type.
- **TPL-033 — Category view (/demo-restau/category/boissons):** As a customer, I want to follow a category link into the menu view.
- **TPL-034 — Product detail (/demo-restau/product/burger):** As a customer, I want to open an item and read its description, price, and image before adding it.
- **TPL-035 — Ingredient information (/demo-restau/product/burger):** As a customer, I want to see the listed allergens and removable ingredients on an item.
- **TPL-036 — Ingredient removal (/demo-restau/product/burger):** As a customer, I want to remove a permitted ingredient from my own order line without changing the restaurant's recipe.
- **TPL-037 — Quick add (/demo-restau):** As a customer, I want to add an unmodified menu item directly from its menu card.
- **TPL-038 — Customized add (/demo-restau/product/burger):** As a customer, I want to add my selected ingredient-removal combination to the cart.
- **TPL-039 — Empty menu (/demo-restau):** As a customer, I want a clear empty state if the current restaurant has no available menu items.
- **TPL-040 — Unavailable item (/demo-restau/product/burger):** As a customer, I want a clear missing-item message if a product link no longer resolves.
- **TPL-041 — Service choice (/demo-restau):** As a customer at a restaurant that supports both modes, I want to switch between table ordering and takeaway.
- **TPL-042 — Service availability (/demo-restau):** As a customer, I want the menu to reflect whether the selected profile supports tables, takeaway, or both.

## Epic 5 — Customer cart, browser-local demo

- **TPL-043 — View cart (/demo-restau/cart):** As a customer, I want to review item photos, quantities, customizations, and line totals before ordering.
- **TPL-044 — Separate customizations (/demo-restau/cart):** As a customer, I want differently customized versions of the same item to remain separate cart lines.
- **TPL-045 — Change quantity (/demo-restau/cart):** As a customer, I want to increase or decrease a line's quantity, including removing the line when it reaches zero.
- **TPL-046 — Quantity limit (/demo-restau/cart):** As a customer, I want the cart to stop at the template's maximum of 20 of one configured line.
- **TPL-047 — Cart totals (/demo-restau/cart):** As a customer, I want to see the subtotal and final total recalculate as I change the cart.
- **TPL-048 — Empty cart (/demo-restau/cart):** As a customer, I want a link back to the menu when my cart is empty.
- **TPL-049 — Table and takeaway carts (/demo-restau/cart):** As a customer, I want my table selections and takeaway selections kept separate when changing service type.
- **TPL-050 — Restaurant-specific cart (/demo-restau/cart):** As a customer, I want selections at one group establishment kept separate from another establishment's menu.
- **TPL-051 — Return to menu (/demo-restau/cart):** As a customer, I want to continue choosing products before confirming an order.

## Epic 6 — Customer checkout and order follow-up, browser-local demo

- **TPL-052 — Table checkout (/demo-restau/checkout):** As a table customer, I want to review the cart and send a simulated order to the local kitchen queue without online payment.
- **TPL-053 — Takeaway checkout (/demo-restau/checkout):** As a takeaway customer, I want to enter a required pickup name and optional note before placing a local demo order.
- **TPL-054 — Pickup estimate (/demo-restau/checkout):** As a takeaway customer, I want to see the displayed preparation estimate and that payment is at pickup.
- **TPL-055 — Invalid checkout (/demo-restau/checkout):** As a customer, I want an empty cart or missing pickup name to prevent a takeaway order being placed.
- **TPL-056 — Table confirmation (/demo-restau/order/1042/confirmation):** As a table customer, I want a confirmation with my locally created order's number, items, table, and total.
- **TPL-057 — Takeaway confirmation (/demo-restau/order/1042/confirmation):** As a takeaway customer, I want a confirmation with my pickup name, note, items, and total.
- **TPL-058 — Order tracking (/demo-restau/order/1042):** As a customer, I want to revisit an order and see its current status and item summary.
- **TPL-059 — Local order history (/demo-restau/orders):** As a customer, I want to see the orders placed in this browser for the selected restaurant and service mode.
- **TPL-060 — Empty order history (/demo-restau/orders):** As a customer, I want a useful empty state when I have not placed an order on this device.
- **TPL-061 — Missing order (/demo-restau/order/1042):** As a customer, I want an understandable message when a requested order is not on this device.
- **TPL-062 — Account explanation (/demo-restau/account):** As a customer, I want to understand that the demo works without an account and its order history is local to this browser.

## Epic 7 — Restaurant dashboard and order modes

- **TPL-063 — Restaurant overview (/app/dashboard):** As a restaurant operator, I want to see the dashboard's example business indicators and shortcuts.
- **TPL-064 — Takeaway dashboard (/app/dashboard):** As a takeaway operator, I want a shortcut and local active-order count for pickup orders.
- **TPL-065 — Service-mode settings (/app/settings/restaurant):** As an owner, I want to turn table and takeaway modes on or off for the selected demo establishment.
- **TPL-066 — Mode safety (/app/settings/restaurant):** As an owner, I want the form to require at least one active order mode.
- **TPL-067 — Takeaway-only layout (/app/floor):** As a pickup-only operator, I want an explanation instead of table-floor tools that do not apply to my business.
- **TPL-068 — Establishment scope (/app/dashboard):** As a group operator, I want to change establishments and see the corresponding demo operations context.

## Epic 8 — Platform catalog, browser-local demo

- **TPL-069 — Cuisine catalog (/admin/cuisines):** As a platform catalog editor, I want to view the cuisine types available in this browser's demo catalog.
- **TPL-070 — Create cuisine (/admin/cuisines):** As a platform catalog editor, I want to add a uniquely named cuisine to the local catalog.
- **TPL-071 — Edit cuisine (/admin/cuisines):** As a platform catalog editor, I want to rename an existing cuisine and see the list update.
- **TPL-072 — Delete cuisine (/admin/cuisines):** As a platform catalog editor, I want a confirmation before removing a cuisine from the local catalog.
- **TPL-073 — Base products (/admin/products):** As a platform catalog editor, I want to browse the shared base products available for restaurant dishes.
- **TPL-074 — Create base product (/admin/products):** As a platform catalog editor, I want to add a base product with a unique name to the local catalog.
- **TPL-075 — Edit base product (/admin/products):** As a platform catalog editor, I want to correct a base product's name in the local catalog.
- **TPL-076 — Delete base product (/admin/products):** As a platform catalog editor, I want a warning that deleting a base product also removes its restaurant variants.
- **TPL-077 — Catalog validation (/admin/cuisines, /admin/products):** As a catalog editor, I want clear feedback when I submit a blank or duplicate name.

## Epic 9 — Restaurant menu editor, browser-local demo

- **TPL-078 — Menu overview (/app/menu, /app/menu/products):** As a restaurant owner, I want to view only the dishes for the selected demo restaurant.
- **TPL-079 — Dish cards (/app/menu):** As a restaurant owner, I want to see each dish's base product, restaurant-specific name, description, price, image, allergens, and removable ingredients.
- **TPL-080 — New dish (/app/menu/products/new):** As a restaurant owner, I want to add a menu variant based on a product from the shared catalog.
- **TPL-081 — Product search (/app/menu/products/new):** As a restaurant owner, I want autocomplete to suggest base products while I type, including relevant alternate search terms.
- **TPL-082 — Keyboard selection (/app/menu/products/new):** As a keyboard user, I want to move through product suggestions and select one without a mouse.
- **TPL-083 — Required base product (/app/menu/products/new):** As a restaurant owner, I want a typed name alone to be insufficient until I select an existing base product.
- **TPL-084 — Dish details (/app/menu/products/new):** As a restaurant owner, I want to enter a menu name, description, price, allergens, and removable ingredients for my variant.
- **TPL-085 — Dish photo (/app/menu/products/new):** As a restaurant owner, I want to select a valid image and have it resized for local preview storage.
- **TPL-086 — Dish validation (/app/menu/products/new):** As a restaurant owner, I want errors for missing details, invalid price, duplicate variants, or invalid ingredient lists.
- **TPL-087 — Edit dish (/app/menu/products/1/edit):** As a restaurant owner, I want to open a variant and update its restaurant-specific details without changing the base product for everyone.
- **TPL-088 — Remove dish (/app/menu/products):** As a restaurant owner, I want confirmation before deleting a variant from my local menu.
- **TPL-089 — Customer preview (/app/menu):** As a restaurant owner, I want to open the customer menu to see my locally saved dish changes.
- **TPL-090 — Menu persistence (/app/menu):** As a restaurant owner, I want catalog and menu edits to remain visible after reloading this browser.

## Epic 10 — Floor, tables, and QR screens, illustrative

- **TPL-091 — Floor overview (/app/floor):** As a floor operator, I want to inspect the example table layout and statuses in the template.
- **TPL-092 — Room list (/app/floor/rooms):** As an owner, I want to view the example rooms represented in the floor section.
- **TPL-093 — Room forms (/app/floor/rooms/new, /app/floor/rooms/1/edit):** As an owner, I want to inspect the create and edit room form layouts.
- **TPL-094 — Table list (/app/floor/tables):** As an owner, I want to inspect the example table list and its room and capacity columns.
- **TPL-095 — Table forms (/app/floor/tables/new, /app/floor/tables/1/edit):** As an owner, I want to inspect the table creation and edit fields.
- **TPL-096 — Table details (/app/floor/tables/1):** As a server, I want to view the example table detail screen and its linked QR and order context.
- **TPL-097 — QR overview (/app/floor/qr-codes):** As an owner, I want to see where table QR codes are represented in the template.
- **TPL-098 — QR detail (/app/floor/tables/1/qr-code):** As an owner, I want to inspect the example QR screen for an individual table.
- **TPL-099 — QR print view (/app/floor/qr-codes/print):** As an owner, I want to see the intended print-sheet screen without assuming it generates printable codes yet.

## Epic 11 — Restaurant orders, kitchen, and waiter screens

- **TPL-100 — Table order board (/app/orders):** As a restaurant employee, I want to see table orders created in this browser, with items, customizations, totals, and statuses.
- **TPL-101 — Kitchen board (/app/kitchen):** As a kitchen employee, I want to read the local table tickets and any ingredient removals before preparing them.
- **TPL-102 — Prepare table order (/app/kitchen):** As a kitchen employee, I want to advance a local ticket from received through preparing and ready.
- **TPL-103 — Complete table order (/app/orders):** As an operator, I want to mark a ready local table ticket served and see the customer tracking status change.
- **TPL-104 — Sample order detail (/app/orders/1042):** As an operator, I want to inspect the illustrative order-detail layout separately from locally created orders.
- **TPL-105 — Active order screen (/app/orders/active):** As an operator, I want to inspect the template's active-orders view.
- **TPL-106 — Order history screen (/app/orders/history):** As an operator, I want to inspect the template's historical-orders view.
- **TPL-107 — Kitchen ticket screen (/app/kitchen/orders/1042):** As a kitchen employee, I want to inspect the example preparation-ticket detail page.
- **TPL-108 — Waiter floor (/app/waiter/floor):** As a waiter, I want to inspect the mobile-oriented floor list in the template.
- **TPL-109 — Waiter table (/app/waiter/tables/1):** As a waiter, I want to inspect the example table summary and linked order-entry page.
- **TPL-110 — Waiter order entry (/app/waiter/tables/1/order):** As a waiter, I want to see the product search, quantity, and note fields designed for staff ordering.

## Epic 12 — Takeaway and delivery

- **TPL-111 — Pickup queue (/app/takeaway):** As a pickup operator, I want to see local takeaway tickets with customer names, item changes, notes, and estimated pickup information.
- **TPL-112 — Advance pickup (/app/takeaway):** As a pickup operator, I want to move a local takeaway ticket through preparing, ready, and collected.
- **TPL-113 — Pickup history (/app/takeaway):** As a pickup operator, I want to switch between active and completed local pickup orders.
- **TPL-114 — Takeaway settings screen (/app/settings/takeaway):** As an owner, I want to inspect the example enablement and preparation-delay fields without assuming they save.
- **TPL-115 — Delivery queue (/app/delivery):** As an operator, I want to inspect the delivery-order overview included in the template.
- **TPL-116 — Delivery detail (/app/delivery/orders/1042):** As an operator, I want to inspect the example delivery detail screen.
- **TPL-117 — Delivery settings (/app/settings/delivery):** As an owner, I want to inspect the intended delivery-zone, fee, and minimum-order fields.

## Epic 13 — Restaurant configuration and staff, illustrative

- **TPL-118 — Restaurant information (/app/settings/restaurant):** As an owner, I want to see the example restaurant name, address, and phone form alongside the working local service-mode control.
- **TPL-119 — Opening hours (/app/settings/hours):** As an owner, I want to inspect the weekday hours form.
- **TPL-120 — Order rules (/app/settings/orders):** As an owner, I want to inspect the example order-acceptance and tips controls.
- **TPL-121 — Payment settings (/app/settings/payments):** As an owner, I want to inspect the payment configuration screen without mistaking its fields for a connected payment service.
- **TPL-122 — Branding (/app/settings/branding):** As an owner, I want to inspect the example logo and primary-color settings.
- **TPL-123 — Staff directory (/app/staff):** As an owner, I want to inspect the example employees and roles listed in the template.
- **TPL-124 — Staff invite (/app/staff/invite):** As an owner, I want to see the email and role fields intended for inviting a colleague.
- **TPL-125 — Staff profile (/app/staff/1):** As an owner, I want to inspect an example employee detail page.
- **TPL-126 — Staff permissions (/app/staff/1/edit):** As an owner, I want to inspect the role and access-rights edit form without assuming access changes are enforced.

## Epic 14 — Subscriptions and restaurant analytics, illustrative

- **TPL-127 — Subscription overview (/app/subscription):** As an owner, I want to see the example current-plan and billing-status information.
- **TPL-128 — Plan comparison (/app/subscription/plans):** As an owner, I want to inspect available subscription-plan cards in the template.
- **TPL-129 — Billing form (/app/subscription/billing):** As an owner, I want to inspect the card and billing-address form without initiating a payment.
- **TPL-130 — Invoice list (/app/subscription/invoices):** As an owner, I want to inspect the example invoice table.
- **TPL-131 — Analytics overview (/app/analytics):** As an owner, I want to inspect the template's business-performance overview without treating sample figures as live sales.
- **TPL-132 — Sales view (/app/analytics/sales):** As an owner, I want to inspect the example sales breakdown.
- **TPL-133 — Product view (/app/analytics/products):** As an owner, I want to inspect the example popular-products table.
- **TPL-134 — Table view (/app/analytics/tables):** As an owner, I want to inspect the example table-occupancy table.

## Epic 15 — Restaurant onboarding, illustrative

- **TPL-135 — Welcome (/app/onboarding):** As a new owner, I want an overview of the setup sequence.
- **TPL-136 — Restaurant setup (/app/onboarding/restaurant):** As a new owner, I want to see which restaurant details the setup flow asks for.
- **TPL-137 — Menu setup (/app/onboarding/menu):** As a new owner, I want to see the menu-import or creation step.
- **TPL-138 — Floor setup (/app/onboarding/floor):** As a table-service owner, I want to inspect the room-and-table setup step.
- **TPL-139 — QR setup (/app/onboarding/qr-codes):** As a table-service owner, I want to inspect the QR-code setup step.
- **TPL-140 — Completion (/app/onboarding/complete):** As a new owner, I want to see the template's setup-complete screen.

## Epic 16 — Platform administration, illustrative except the local catalog above

- **TPL-141 — Platform overview (/admin/dashboard):** As a platform administrator, I want to inspect the example account, subscription, revenue, and order indicators.
- **TPL-142 — Restaurant list (/admin/restaurants):** As a platform administrator, I want to browse the sample restaurant accounts and their plan/status columns.
- **TPL-143 — Restaurant detail (/admin/restaurants/1):** As a platform administrator, I want to inspect one sample restaurant's account page.
- **TPL-144 — Restaurant creation (/admin/restaurants/new):** As a platform administrator, I want to see the intended owner-email and subscription-plan fields for creating a restaurant.
- **TPL-145 — Restaurant editing (/admin/restaurants/1/edit):** As a platform administrator, I want to inspect the example account-status and plan fields.
- **TPL-146 — Restaurant activity (/admin/restaurants/1/activity):** As a platform administrator, I want to inspect the sample activity log.
- **TPL-147 — User list (/admin/users):** As a platform administrator, I want to review the example users, roles, establishment access, security, and account statuses.
- **TPL-148 — User profile (/admin/users/1):** As a platform administrator, I want to inspect a sample user's verification and restaurant associations.
- **TPL-149 — Subscription list (/admin/subscriptions):** As a platform administrator, I want to inspect sample plans, recurring revenue, renewal, and payment states.
- **TPL-150 — Subscription detail (/admin/subscriptions/1):** As a platform administrator, I want to inspect an example subscription reference and history.
- **TPL-151 — Plan list (/admin/plans):** As a platform administrator, I want to compare example SaaS plans and subscriber counts.
- **TPL-152 — Plan editing (/admin/plans/1):** As a platform administrator, I want to inspect the price and limits form without changing live billing.
- **TPL-153 — Order ledger (/admin/orders):** As a platform administrator, I want to inspect example transactions across restaurants and their payment states.
- **TPL-154 — Order inspection (/admin/orders/1042):** As a platform administrator, I want to inspect the example order, payment identifier, and webhook status.
- **TPL-155 — Support inbox (/admin/support):** As a platform administrator, I want to scan example tickets by priority, category, owner, age, and status.
- **TPL-156 — Support ticket (/admin/support/T-1):** As a platform administrator, I want to inspect a sample customer issue and see the reply action in the template.
- **TPL-157 — Platform settings (/admin/settings):** As a platform administrator, I want to inspect the app-name, sender-email, and webhook configuration form.
- **TPL-158 — Feature flags (/admin/settings/features):** As a platform administrator, I want to inspect the example beta-feature toggles.

## Epic 17 — Additional menu configuration screens, illustrative

- **TPL-159 — Category list (/app/menu/categories):** As an owner, I want to inspect the template's ordered list of menu categories.
- **TPL-160 — New category (/app/menu/categories/new):** As an owner, I want to see the name and display-order fields for a category.
- **TPL-161 — Edit category (/app/menu/categories/1/edit):** As an owner, I want to inspect the example category edit form.
- **TPL-162 — Option groups (/app/menu/options):** As an owner, I want to inspect the sample single-choice and multiple-choice menu options.
- **TPL-163 — Menu import (/app/menu/import):** As an owner, I want to see the intended PDF-or-URL import form without assuming it extracts menu data.
- **TPL-164 — Import review (/app/menu/import/1):** As an owner, I want to inspect the example extracted-menu review screen.
- **TPL-165 — Menu preview (/app/menu/preview):** As an owner, I want to inspect the menu preview page and its publishing link.
- **TPL-166 — Publishing screen (/app/menu/publishing):** As an owner, I want to see the illustrative published-menu confirmation without assuming a menu was sent online.
