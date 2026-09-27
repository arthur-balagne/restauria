# Restauria static HTML template

This folder contains 117 semantic HTML route pages (including /404), plus 404.html for static hosts, shared CSS and JavaScript assets. Serve this folder from the root of a static web server so absolute `/assets` and `/images` paths resolve correctly. Configure your host to serve 404.html for unknown URLs with a 404 status.

## Browser-only prototype

The registration form saves only its address and selected cuisine types in this browser; it does not create an account or save the name, email or password. Admin cuisine and base-product changes, restaurant-specific menu products and their compressed photos also remain in this browser's local storage. They are not synchronized between devices or sent to a restaurant. Deleting an admin base product also deletes all associated restaurant dishes in this browser. Customers see restaurant dishes, not base products.

Sample dishes include allergen information and ingredients customers may request removed. These samples are not verified allergen declarations: confirm actual ingredients and allergens with the restaurant before use. An omitted ingredient does not guarantee the absence of an allergen or cross-contact. Table and takeaway orders can be sent to the kitchen view on this browser only. No restaurant receives the orders and no real payment occurs. The contact form does not send a message. Connect these features to a backend before offering a live service.

## SEO domain

No production domain is configured yet, so canonical URLs are relative and no sitemap is generated. Before publishing, run `PUBLIC_SITE_URL=https://your-domain.example pnpm run export:template` to generate absolute canonicals and `sitemap.xml`.
