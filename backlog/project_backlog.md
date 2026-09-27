# Restauria — User Stories

Product backlog. These stories describe intended behavior, not the current implementation status.

## Epic 1 — SaaS Account

- **US-001 — Register:** As a restaurant owner, I want to create a Restauria account, so that I can create my restaurant.
- **US-002 — Login:** As a user, I want to log in, so that I can access my Restauria account.
- **US-003 — Verify email:** As a user, I want to verify my email, so that my account can become active.
- **US-004 — Reset password:** As a user, I want to reset my password, so that I can recover access.

## Epic 2 — Restaurant

- **US-010 — Create restaurant:** As a restaurant owner, I want to create my restaurant, so that I can configure it in Restauria.
- **US-011 — Edit restaurant:** As a restaurant owner, I want to edit my restaurant information, so that customers see accurate information.
- **US-012 — Upload logo:** As a restaurant owner, I want to upload my logo, so that my digital menu reflects my brand.
- **US-013 — Configure opening hours:** As a restaurant owner, I want to configure opening hours, so that customers know when they can order.
- **US-014 — Open or close the restaurant:** As a restaurant owner, I want to manually open or close ordering, so that I can stop orders when necessary.

## Epic 3 — Menu

- **US-020 — View menu:** As a restaurant owner, I want to view my complete menu, so that I can manage my offer.
- **US-021 — Create category:** As a restaurant owner, I want to create a menu category, so that I can organize my products.
- **US-022 — Edit category:** As a restaurant owner, I want to edit a category, so that my menu stays accurate.
- **US-023 — Delete category:** As a restaurant owner, I want to delete a category, so that I can remove obsolete sections.
- **US-024 — Reorder categories:** As a restaurant owner, I want to reorder categories, so that they appear in the desired order.
- **US-025 — Create product:** As a restaurant owner, I want to create a product, so that customers can order it.
- **US-026 — Edit product:** As a restaurant owner, I want to edit a product, so that my menu remains up to date.
- **US-027 — Delete product:** As a restaurant owner, I want to remove a product, so that it is no longer available.
- **US-028 — Disable product:** As a restaurant owner, I want to temporarily disable a product, so that customers cannot order an unavailable item.
- **US-029 — Add product options:** As a restaurant owner, I want to define product options and supplements, so that customers can customize their orders.

## Epic 4 — Menu Import

- **US-030 — Import PDF menu:** As a restaurant owner, I want to upload my existing PDF menu, so that I don't have to recreate it manually.
- **US-031 — Import menu image:** As a restaurant owner, I want to upload a photo of my menu, so that Restauria can extract its content.
- **US-032 — Import menu from URL:** As a restaurant owner, I want to provide my existing menu URL, so that Restauria can pre-populate my digital menu.
- **US-033 — Review imported menu:** As a restaurant owner, I want to review extracted menu data, so that I can correct errors before publishing.
- **US-034 — Publish menu:** As a restaurant owner, I want to publish my menu, so that customers can access it.

## Epic 5 — Room Management

- **US-040 — View rooms:** As a restaurant owner, I want to view my restaurant rooms, so that I can manage my floor structure.
- **US-041 — Create room:** As a restaurant owner, I want to create a room, so that I can organize tables by physical area.
- **US-042 — Edit room:** As a restaurant owner, I want to edit a room, so that my floor structure stays accurate.
- **US-043 — Delete room:** As a restaurant owner, I want to delete a room, so that obsolete areas can be removed.

## Epic 6 — Table Management

- **US-050 — View tables:** As a restaurant owner, I want to see all my tables, so that I can manage my floor.
- **US-051 — Create table:** As a restaurant owner, I want to create a table, so that Restauria knows that the table exists physically.
- **US-052 — Assign table to room:** As a restaurant owner, I want to assign a table to a room, so that Restauria knows where the table is located.
- **US-053 — Set table capacity:** As a restaurant owner, I want to define the number of seats, so that table capacity is known.
- **US-054 — Edit table:** As a restaurant owner, I want to edit table information, so that the digital floor matches my real restaurant.
- **US-055 — Disable table:** As a restaurant owner, I want to disable a table, so that customers cannot order from it.
- **US-056 — View table details:** As a restaurant employee, I want to see table details, so that I can see its current orders and status.

## Epic 7 — QR Codes

- **US-060 — Generate table QR code:** As a restaurant owner, I want Restauria to automatically generate a unique QR code for each table, so that customers can access the correct table.
- **US-061 — Download QR code:** As a restaurant owner, I want to download a table QR code, so that I can print it.
- **US-062 — Print all QR codes:** As a restaurant owner, I want to generate a printable document containing all table QR codes, so that I can prepare my restaurant.
- **US-063 — Regenerate QR code:** As a restaurant owner, I want to regenerate a table QR code, so that the previous code can be invalidated.
- **US-064 — Resolve QR code:** As a customer, I want to scan a QR code, so that Restauria automatically identifies the restaurant and table.

## Epic 8 — Floor Management

- **US-070 — View floor:** As a waiter, I want to see the restaurant floor, so that I know what is happening at each table.
- **US-071 — View table status:** As a waiter, I want to see the current status of each table, so that I know which tables are available or occupied.
- **US-072 — Open table:** As a waiter, I want to open a table, so that I can start a dining session.
- **US-073 — Close table:** As a waiter, I want to close a table, so that the table becomes available again.
- **US-074 — Change table status:** As a waiter, I want to manually change a table's status, so that the digital floor reflects the real situation.

## Epic 9 — Customer Ordering

- **US-080 — Access restaurant menu:** As a customer, I want to access the restaurant menu after scanning the QR code, so that I can choose what to order.
- **US-081 — Browse menu categories:** As a customer, I want to browse menu categories, so that I can find products easily.
- **US-082 — View product details:** As a customer, I want to view product details, so that I can make an informed choice.
- **US-083 — Add product to cart:** As a customer, I want to add a product to my cart, so that I can build my order.
- **US-084 — Customize product:** As a customer, I want to select product options, so that I can customize my meal.
- **US-085 — Edit cart:** As a customer, I want to edit my cart, so that I can correct my order before submitting it.
- **US-086 — Add order note:** As a customer, I want to add a note to my order, so that I can communicate a special request.
- **US-087 — Submit order:** As a customer, I want to submit my order, so that the restaurant receives it.
- **US-088 — View order confirmation:** As a customer, I want to see my order confirmation, so that I know the restaurant received my order.
- **US-089 — Track order:** As a customer, I want to track my order, so that I know whether it is being prepared or is ready.

## Epic 10 — Waiter Ordering

- **US-100 — Select table:** As a waiter, I want to select a table, so that I can create an order for it.
- **US-101 — Take customer order:** As a waiter, I want to use the restaurant menu to create an order, so that I can take orders on behalf of customers.
- **US-102 — Customize waiter order:** As a waiter, I want to select product options, so that I can accurately record the customer's request.
- **US-103 — Submit waiter order:** As a waiter, I want to submit the order, so that it is sent to the restaurant workflow.

## Epic 11 — Order Management

- **US-110 — Receive order:** As a restaurant, I want to receive new orders in real time, so that I can process them immediately.
- **US-111 — View order:** As a restaurant employee, I want to view an order, so that I know what must be prepared.
- **US-112 — Accept order:** As a restaurant employee, I want to accept an order, so that the customer knows it has been received.
- **US-113 — Start preparation:** As a kitchen employee, I want to mark an order as being prepared, so that its status is updated.
- **US-114 — Mark order ready:** As a kitchen employee, I want to mark an order as ready, so that the waiter knows it can be served.
- **US-115 — Mark order served:** As a waiter, I want to mark an order as served, so that the order lifecycle is complete.
- **US-116 — Cancel order:** As a restaurant employee, I want to cancel an order, so that orders that cannot be fulfilled are correctly handled.
- **US-117 — View order history:** As a restaurant owner, I want to view historical orders, so that I can retrieve previous transactions.

## Epic 12 — Multiple Orders Per Table

- **US-120 — Place multiple orders:** As a customer, I want to place several orders during my meal, so that I can order additional products later.
- **US-121 — View all table orders:** As a waiter, I want to see all orders associated with a table, so that I know everything that has been ordered.
- **US-122 — Add products to an active table:** As a waiter, I want to add products to an existing table session, so that I can handle additional customer requests.

## Epic 13 — Takeaway

- **US-130 — Enable takeaway:** As a restaurant owner, I want to enable takeaway ordering, so that customers can order for pickup.
- **US-131 — Place takeaway order:** As a customer, I want to place a takeaway order, so that I can collect it at the restaurant.
- **US-132 — Configure pickup time:** As a restaurant owner, I want to define pickup rules, so that customers can choose appropriate pickup times.
- **US-133 — Manage takeaway orders:** As a restaurant employee, I want to manage takeaway orders separately, so that they do not get mixed with dine-in orders.

## Epic 14 — Delivery

- **US-140 — Enable delivery:** As a restaurant owner, I want to enable delivery, so that customers can order remotely.
- **US-141 — Configure delivery zones:** As a restaurant owner, I want to define delivery zones, so that I only accept orders I can deliver.
- **US-142 — Configure delivery fee:** As a restaurant owner, I want to define delivery fees, so that delivery costs are correctly charged.
- **US-143 — Place delivery order:** As a customer, I want to place a delivery order, so that I can receive my meal at home.
- **US-144 — Enter delivery address:** As a customer, I want to provide my delivery address, so that the restaurant knows where to deliver my order.
- **US-145 — Validate delivery zone:** As a system, I want to verify that the address is within the delivery zone, so that impossible orders are rejected.
- **US-146 — Manage delivery orders:** As a restaurant employee, I want to manage delivery orders, so that they can be prepared and delivered.
- **US-147 — Mark order out for delivery:** As a restaurant employee, I want to mark an order as out for delivery, so that its status is updated.
- **US-148 — Mark order delivered:** As a restaurant employee, I want to mark an order as delivered, so that the order lifecycle is completed.

## Epic 15 — Payments

- **US-150 — Configure payment methods:** As a restaurant owner, I want to configure payment methods, so that customers can pay appropriately.
- **US-151 — Pay online:** As a customer, I want to pay online, so that I can complete my remote order.
- **US-152 — View payment status:** As a restaurant employee, I want to see whether an order has been paid, so that I can process it correctly.
- **US-153 — Refund order:** As a restaurant owner, I want to refund an online order, so that I can handle cancellations.

## Epic 16 — Table Closing

- **US-160 — View table bill:** As a waiter, I want to view the complete bill of a table, so that I know what the customer owes.
- **US-161 — Close table:** As a waiter, I want to close a table, so that it becomes available again.
- **US-162 — Release table:** As a system, I want to release a table after its session is completed, so that it becomes available for new customers.

## Epic 17 — Staff

- **US-170 — View staff:** As a restaurant owner, I want to view my staff, so that I know who has access.
- **US-171 — Invite staff member:** As a restaurant owner, I want to invite an employee, so that they can use Restauria.
- **US-172 — Assign role:** As a restaurant owner, I want to assign a role, so that each employee has appropriate permissions.
- **US-173 — Disable staff member:** As a restaurant owner, I want to disable an employee account, so that the employee can no longer access the restaurant.

## Epic 18 — Analytics

- **US-180 — View dashboard:** As a restaurant owner, I want to see today's activity, so that I can monitor my restaurant.
- **US-181 — View sales analytics:** As a restaurant owner, I want to view sales by period, so that I can understand revenue trends.
- **US-182 — View product analytics:** As a restaurant owner, I want to see my best-selling products, so that I can understand customer preferences.
- **US-183 — View table analytics:** As a restaurant owner, I want to see table activity, so that I can understand how my floor is performing.

## Epic 19 — Restaurant Subscription

- **US-190 — View plans:** As a restaurant owner, I want to compare Restauria plans, so that I can choose the right subscription.
- **US-191 — Subscribe:** As a restaurant owner, I want to subscribe to a paid plan, so that I can access premium features.
- **US-192 — View subscription:** As a restaurant owner, I want to view my current subscription, so that I know my plan and billing status.
- **US-193 — Change plan:** As a restaurant owner, I want to change my plan, so that my subscription matches my needs.
- **US-194 — Cancel subscription:** As a restaurant owner, I want to cancel my subscription, so that I can stop future billing.
- **US-195 — View invoices:** As a restaurant owner, I want to view and download my invoices, so that I can keep accounting records.

## Epic 20 — Restaurant Onboarding

- **US-200 — Start onboarding:** As a restaurant owner, I want to follow a guided setup, so that I can get Restauria running quickly.
- **US-201 — Configure restaurant:** As a restaurant owner, I want to configure my restaurant during onboarding, so that the basic information is ready.
- **US-202 — Configure menu:** As a restaurant owner, I want to import or create my menu, so that customers can order.
- **US-203 — Configure floor:** As a restaurant owner, I want to create my rooms and tables, so that my physical restaurant is represented in Restauria.
- **US-204 — Generate QR codes:** As a restaurant owner, I want to generate QR codes for my tables, so that I can place them on the tables.
- **US-205 — Check setup status:** As a restaurant owner, I want to know what remains to be configured, so that I can make my restaurant ready for orders.

## Epic 21 — Platform Administration

- **US-210 — View platform dashboard:** As a Restauria administrator, I want to see platform metrics, so that I can monitor the SaaS.
- **US-211 — View restaurants:** As a Restauria administrator, I want to view all restaurants, so that I can manage the platform.
- **US-212 — View restaurant details:** As a Restauria administrator, I want to inspect a restaurant, so that I can provide support.
- **US-213 — Disable restaurant:** As a Restauria administrator, I want to disable a restaurant, so that access can be blocked when necessary.
- **US-214 — View platform users:** As a Restauria administrator, I want to view all users, so that I can manage accounts.
- **US-215 — View user details:** As a Restauria administrator, I want to inspect a user, so that I can understand their access.

## Epic 22 — Platform Subscriptions

- **US-220 — Manage plans:** As a Restauria administrator, I want to manage subscription plans, so that I can control SaaS pricing.
- **US-221 — View subscriptions:** As a Restauria administrator, I want to view subscriptions, so that I can monitor recurring revenue.
- **US-222 — Inspect subscription:** As a Restauria administrator, I want to inspect a subscription, so that I can troubleshoot billing issues.

## Epic 23 — Platform Orders

- **US-230 — Search platform orders:** As a Restauria administrator, I want to search orders across restaurants, so that I can support customers and restaurants.
- **US-231 — Inspect platform order:** As a Restauria administrator, I want to inspect an order, so that I can diagnose issues.

## Epic 24 — Support

- **US-240 — View support requests:** As a Restauria administrator, I want to view support requests, so that I can help restaurant customers.
- **US-241 — Manage support ticket:** As a Restauria administrator, I want to manage a support ticket, so that I can resolve customer issues.

## Epic 25 — Security and Tenant Isolation

- **US-250 — Isolate restaurant data:** As a system, I want to isolate each restaurant's data, so that one restaurant cannot access another restaurant's data.
- **US-251 — Enforce role permissions:** As a system, I want to enforce permissions based on user roles, so that users only access authorized features.
- **US-252 — Protect platform administration:** As a system, I want to restrict `/admin/*` to Restauria administrators, so that restaurant users cannot access platform administration.
