# Documentation IA redirects

The Cloudflare bulk redirect file contains **39 permanent redirects**. The source set is limited to URLs published on the production site before this PR. Every source points directly to its final post-PR URL; there are no redirects for intermediate URLs introduced and changed within this branch.

## Coverage

| Documentation area | Redirects | Current production path | Final path |
| --- | ---: | --- | --- |
| Get started content | 11 | Existing About, Design, Develop, and Templates URLs | Final `/get-started/...` paths |
| Utility classes | 15 | `/docs/content/utilities/...` | `/utility-classes/...` |
| Methods | 6 | `/docs/content/methods/...` | `/methods/...` |
| Contribute | 3 | `/docs/content/contribute/...` | `/contribute/...` |
| Release notes | 1 | `/docs/content/about/release-notes.html` | `/release-notes/index.html` |
| Guides | 1 | `/docs/content/design/guides.html` | `/get-started/guides.html` |
| Page layout | 2 | `/core/layout/` and `/core/layout/index.html` | `/core/page-layout/index.html` |

## Get started URL changes

| Page | Current production URL | Final URL |
| --- | --- | --- |
| About the NSW Design System | `/docs/content/about/what-is-design-system.html` | `/get-started/about-the-nsw-design-system.html` |
| Supporting different roles | `/docs/content/about/supporting-different-roles.html` | `/get-started/supporting-different-roles.html` |
| Our ecosystem | `/docs/content/about/our-ecosystem.html` | `/get-started/our-ecosystem.html` |
| For designers | `/docs/content/design/getting-started.html` | `/get-started/for-designers.html` |
| For developers | `/docs/content/develop/getting-started.html` | `/get-started/for-developers.html` |
| Figma UI Kit | `/docs/content/design/figma-ui-kit.html` | `/get-started/figma-ui-kit.html` |
| Templates | `/templates/` and `/templates/index.html` | `/get-started/templates.html` |
| Theming | `/docs/content/design/theming.html` | `/get-started/theming.html` |
| Theming for developers | `/docs/content/develop/theming.html` | `/get-started/theming-for-developers.html` |
| Extending | `/docs/content/design/extending.html` | `/get-started/extending.html` |

## Deliberately excluded

The redirect list does not include URLs that were never published on the current production site:

- branch-only `/docs/content/get-started/...` source paths
- branch-only `/get-started/set-up/...` output paths
- `/docs/content/about/about-the-nsw-design-system.html`, which existed only during this branch
- `/components/forms-and-input/index.html`, an intermediate component-group URL from this branch
- component `_guidance.html` paths, which are removed by `cleanBuild` and return 404 in production
- historical `/docs/content/setup/index.html` and `/docs/content/develop/helpers.html` paths, which currently return 404

This avoids rules of the form `currently live URL -> first branch URL -> final branch URL`; only the currently live URL redirects, and it redirects straight to the final destination.

The directory-style and explicit `index.html` forms are both included for Templates and Page layout. Both resolve in production, and Cloudflare evaluates the incoming path before the origin can resolve a directory request to `index.html`.

## Validation

`scripts/validate-docs-ia.js` verifies that:

- the CSV contains exactly the expected 39 production-to-final mappings, with no missing or extra sources
- every row uses the seven-column Cloudflare bulk redirect format
- every status is `301`
- source URLs are unique
- sources and targets differ
- targets are production URLs
- targets do not expose `/docs/content/`
- no target is another redirect source, preventing redirect chains
