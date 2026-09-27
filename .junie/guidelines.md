# Restauria project rules

These rules apply to every change made in this repository. Read `AGENTS.md` first
for the general Symfony conventions; this file adds the Restauria-specific ones.

## Source of truth

- User stories live in `backlog/project_backlog.md` (IDs `TPL-xxx`). Every feature
  must be traceable to one of them.
- The data model lives in `backlog/entities.md`; entities are created from it.
- The HTML/CSS reference for every page lives in `restauria-html-template/`
  (one folder per route, shared CSS in `assets/`, images in `images/`). Twig
  templates must reproduce that markup and reuse its CSS classes; never invent a
  parallel design.

## Testing

- Every user story you implement must be covered by a test that exercises it the
  way a caller would: an HTTP request through `WebTestCase` for a controller, a
  service call through `KernelTestCase` for a service.
- Every new page (new route rendering a template) must have a smoke test in
  `tests/Controller/` that requests the route, asserts a successful response and
  checks a meaningful selector (title, `h1`, form, etc.).
- Tests live in `tests/` and mirror the `src/` namespace (`App\Tests\...`).
- Tests run against the `restauria_test` MariaDB database. Prepare it once with
  `make test-db` (migrations + fixtures in the `test` env); rerun it after adding a
  migration or a fixture.
- Run `php bin/phpunit` (`make test` in Docker); the suite must be green before a
  task is considered done.

## Conventions

- Entities that need `createdAt`/`updatedAt` implement
  `App\Entity\Behaviour\TimestampableInterface` and use `TimestampableTrait`;
  `App\Doctrine\TimestampableListener` fills the values, never set them by hand.
- Account pages exist for two audiences (`App\Auth\Audience`: customer and
  restaurant). One controller action serves both through two `#[Route]` attributes
  (`/x` and `/x/restaurant`, route names `app_x` and `app_x_restaurant`); templates
  extend `auth/layout.html.twig` and reuse the `auth/_*.html.twig` partials.
- Split Twig into partials (`_name.html.twig`) as soon as markup is shared or a
  template grows beyond one screen.

## Code quality

- No unnecessary comments: no docblocks that only repeat the signature, no
  commented-out code, no "TODO" left behind. Write self-explanatory names instead.
- PHP follows the Symfony coding standard (`@Symfony` php-cs-fixer ruleset).
  Check with `composer cs`, fix with `composer cs:fix`.
- PHPStan level 2 must pass (`composer phpstan`, config in `phpstan.dist.neon`).
  Fix the code rather than adding baselines or `@phpstan-ignore` annotations.
- All Twig templates must pass `bin/console lint:twig templates/`; YAML config and
  the container must pass `lint:yaml config/` and `lint:container`
  (`composer lint`).
- `composer qa` (or `make qa` inside Docker) runs everything: coding standard,
  static analysis, lints and tests. Run it before finishing any task.

## Definition of done

1. The user story (or page) is implemented following `AGENTS.md`.
2. A test exercises it end to end; new pages have a smoke test.
3. `composer qa` passes with no errors.
