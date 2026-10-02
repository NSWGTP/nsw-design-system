/*! NSW Design System v3.28.1 | MIT License */
(function (factory) {
  typeof define === 'function' && define.amd ? define('NSW', factory) :
  factory();
})((function () { 'use strict';

  /* eslint-disable max-len */
  const searchValues = [{
    label: 'Actions and controls',
    template: 'result',
    keywords: 'component group, component groups, component category, actions, controls',
    url: '/components/actions-and-controls/index.html'
  }, {
    label: 'Content',
    template: 'result',
    keywords: 'component group, component groups, component category, content, content display',
    url: '/components/content/index.html'
  }, {
    label: 'Feedback and status',
    template: 'result',
    keywords: 'component group, component groups, component category, feedback, status, alerts',
    url: '/components/feedback-and-status/index.html'
  }, {
    label: 'Forms and inputs',
    template: 'result',
    keywords: 'component group, component groups, component category, forms, form, inputs, input, data entry',
    url: '/components/forms-and-inputs/index.html'
  }, {
    label: 'Navigation',
    template: 'result',
    keywords: 'component group, component groups, component category, navigation, menus, wayfinding',
    url: '/components/navigation/index.html'
  }, {
    label: 'Overlays',
    template: 'result',
    keywords: 'component group, component groups, component category, overlays, layered content',
    url: '/components/overlays/index.html'
  }, {
    label: 'Page structure',
    template: 'result',
    keywords: 'component group, component groups, component category, page structure, global page structure, page layout',
    url: '/components/page-structure/index.html'
  }, {
    label: 'Search and task flow',
    template: 'result',
    keywords: 'component group, component groups, component category, search, task flow',
    url: '/components/search-and-task-flow/index.html'
  }, {
    label: 'Accordion',
    template: 'result',
    keywords: 'component, components, content, show, hide, collapse, expand, expandable, vertical, panels, details, summary',
    url: '/components/accordion/index.html'
  }, {
    label: 'Back to top',
    template: 'result',
    keywords: 'component, components, navigation, back top, scroll, return to top, page position',
    url: '/components/back-to-top/index.html'
  }, {
    label: 'Breadcrumbs',
    template: 'result',
    keywords: 'component, components, navigation, breadcrumb, information architecture, IA, wayfinding, you are here',
    url: '/components/breadcrumbs/index.html'
  }, {
    label: 'Buttons',
    template: 'result',
    keywords: 'component, components, actions and controls, button, blue diamond, links, submit, call to action, transaction, CTA',
    url: '/components/button/index.html'
  }, {
    label: 'Callout',
    template: 'result',
    keywords: 'component, components, feedback and status, action, highlight, attention, message',
    url: '/components/callout/index.html'
  }, {
    label: 'Card carousel',
    template: 'result',
    keywords: 'component, components, content, carousel, cards, slider, content promotion',
    url: '/components/card-carousel/index.html'
  }, {
    label: 'Cards',
    template: 'result',
    keywords: 'component, components, content, card, highlight, images, links, summary, related content, navigation',
    url: '/components/card/index.html'
  }, {
    label: 'Close button',
    template: 'result',
    keywords: 'component, components, actions and controls, close, dismiss, dialog, global alert, icon button',
    url: '/components/close-button/index.html'
  }, {
    label: 'Content blocks',
    template: 'result',
    keywords: 'component, components, content, content block, columns, links, image, icon, text',
    url: '/components/content-block/index.html'
  }, {
    label: 'Cookie consent',
    template: 'result',
    keywords: 'component, components, feedback and status, cookie, consent, privacy, GDPR, CCPA, cookie policy, cookie preferences, cookie banner, tracking consent, online privacy compliance, data protection, regulatory compliance, digital consent',
    url: '/components/cookie-consent/index.html'
  }, {
    label: 'Date input',
    template: 'result',
    keywords: 'component, components, forms and inputs, date, day, month, year, calendar, input field, manual entry, form field, accessibility, validation, required, date format, date field',
    url: '/components/date-input/index.html'
  }, {
    label: 'Date picker',
    template: 'result',
    keywords: 'component, components, forms and inputs, date, calendar, UI picker, dropdown calendar, select date, form, input field, visual selector, accessibility, date selection, date input, date field',
    url: '/components/date-picker/index.html'
  }, {
    label: 'Dialog',
    template: 'result',
    keywords: 'component, components, overlays, modal, window, alert, message, action, information, notification, transactional, single call to action, danger, dismissible',
    url: '/components/dialog/index.html'
  }, {
    label: 'File upload',
    template: 'result',
    keywords: 'component, components, forms and inputs, upload, file, attachment, browse, choose file, validation',
    url: '/components/file-upload/index.html'
  }, {
    label: 'Filters',
    template: 'result',
    keywords: 'component, components, search and task flow, filter, filtering, results, data, refine, narrow results',
    url: '/components/filters/index.html'
  }, {
    label: 'Footer',
    template: 'result',
    keywords: 'component, components, page structure, links, copyright, blue diamond, social, privacy, contact, global footer',
    url: '/components/footer/index.html'
  }, {
    label: 'Forms',
    template: 'result',
    keywords: 'component, components, forms and inputs, form, data, input, field, freeform, selection, label, checkbox, dropdown, radio, validation, help text, placeholder, autofill, autocorrect, blue diamond',
    url: '/components/form/index.html'
  }, {
    label: 'Global alert',
    template: 'result',
    keywords: 'component, components, feedback and status, attention, important, critical, alert, banner, sitewide message',
    url: '/components/global-alert/index.html'
  }, {
    label: 'Header',
    template: 'result',
    keywords: 'component, components, page structure, logo, site descriptors, search, masthead, blue diamond, global header',
    url: '/components/header/index.html'
  }, {
    label: 'Hero banner',
    template: 'result',
    keywords: 'component, components, page structure, landing page, homepage, hero, banner',
    url: '/components/hero-banner/index.html'
  }, {
    label: 'Hero search',
    template: 'result',
    keywords: 'component, components, search and task flow, search, homepage search, prominent search, suggested links',
    url: '/components/hero-search/index.html'
  }, {
    label: 'In-page alert',
    template: 'result',
    keywords: 'component, components, feedback and status, alert, notification, message, warning, error, success, information',
    url: '/components/in-page-alert/index.html'
  }, {
    label: 'In-page navigation',
    template: 'result',
    keywords: 'component, components, navigation, in-page nav, table of contents, anchor links, contents list',
    url: '/components/in-page-nav/index.html'
  }, {
    label: 'Link',
    template: 'result',
    keywords: 'component, components, actions and controls, links, hyperlink, external link, text link',
    url: '/components/link/index.html'
  }, {
    label: 'Link list',
    template: 'result',
    keywords: 'component, components, content, links, link list, columns, related links, navigation list',
    url: '/components/link-list/index.html'
  }, {
    label: 'List items',
    template: 'result',
    keywords: 'component, components, content, list item, listing, image list, label, date, tags',
    url: '/components/list-item/index.html'
  }, {
    label: 'Loader',
    template: 'result',
    keywords: 'component, components, feedback and status, loading, spinner, progress, wait, busy',
    url: '/components/loader/index.html'
  }, {
    label: 'Main navigation',
    template: 'result',
    keywords: 'component, components, navigation, main nav, mega menu, menu, top level, information architecture, IA, search, off-canvas, animation, slide-in',
    url: '/components/main-nav/index.html'
  }, {
    label: 'Masthead',
    template: 'result',
    keywords: 'component, components, page structure, topbar, top bar, blue diamond, alert, site identity',
    url: '/components/masthead/index.html'
  }, {
    label: 'Media',
    template: 'result',
    keywords: 'component, components, content, visual, elements, images, video, captions, figure, figcaption',
    url: '/components/media/index.html'
  }, {
    label: 'Pagination',
    template: 'result',
    keywords: 'component, components, navigation, pages, total, listing, page numbers, next, previous',
    url: '/components/pagination/index.html'
  }, {
    label: 'Popover',
    template: 'result',
    keywords: 'component, components, overlays, popover, tooltip, toggletip, dropdown, menu, contextual information',
    url: '/components/popover/index.html'
  }, {
    label: 'Progress indicator',
    template: 'result',
    keywords: 'component, components, feedback and status, Progress Indicator, progress, step, steps, stage, completion',
    url: '/components/progress-indicator/index.html'
  }, {
    label: 'Quick exit',
    template: 'result',
    keywords: 'component, components, actions and controls, quick exit, safety, privacy, discreet, exit now, safe destination, safe url, emergency exit, panic button, escape key, esc, double esc, keyboard, sticky, global sticky container, 400% zoom, WCAG reflow',
    url: '/components/quick-exit/index.html'
  }, {
    label: 'Results bar',
    template: 'result',
    keywords: 'component, components, search and task flow, result bar, results, list, sort, counter, filter, filtering',
    url: '/components/results-bar/index.html'
  }, {
    label: 'Select',
    template: 'result',
    keywords: 'component, components, forms and inputs, select, dropdown, option, form field, single select',
    url: '/components/select/index.html'
  }, {
    label: 'Show more',
    template: 'result',
    keywords: 'component, components, content, disclosure, show less, expand, collapse, progressive disclosure, supplementary content, optional details',
    url: '/components/show-more/index.html'
  }, {
    label: 'Side navigation',
    template: 'result',
    keywords: 'component, components, navigation, side nav, hierarchy, single level, multiple level, nesting, nav',
    url: '/components/side-nav/index.html'
  }, {
    label: 'Status labels',
    template: 'result',
    keywords: 'component, components, feedback and status, status label, badge, tag, label, state, status',
    url: '/components/status-labels/index.html'
  }, {
    label: 'Steps',
    template: 'result',
    keywords: 'component, components, search and task flow, step, stages, timeline, wizard, sequence, sequential, task flow',
    url: '/components/steps/index.html'
  }, {
    label: 'Support list',
    template: 'result',
    keywords: 'component, components, content, support list, contact list, help, assistance, user support, government support, resource links, navigation, customer service, accessibility',
    url: '/components/support-list/index.html'
  }, {
    label: 'Tables',
    template: 'result',
    keywords: 'component, components, content, table, data, rows, columns, scan, sort, compare, information, horizontal lined, striped, bordered, stripe, border',
    url: '/components/table/index.html'
  }, {
    label: 'Tabs',
    template: 'result',
    keywords: 'component, components, navigation, tab, UI, toolbar, interface, panels, tabbed content, tab switcher, content grouping, horizontal tabs, accessibility, interactive, layout, section control',
    url: '/components/tabs/index.html'
  }, {
    label: 'Tags',
    template: 'result',
    keywords: 'component, components, content, tag, badge, button, chip, marker, identification, label, categorise, checkbox, toggle, status, pill, filter, selection, selectable, metadata, classification, category',
    url: '/components/tag/index.html'
  }, {
    label: 'Tooltip',
    template: 'result',
    keywords: 'component, components, overlays, tooltip, toggletip, hint, help text, contextual help',
    url: '/components/tooltip/index.html'
  }, {
    label: 'Utility list',
    template: 'result',
    keywords: 'component, components, navigation, utility list, top links, secondary links, quick links',
    url: '/components/utility-list/index.html'
  }, {
    label: 'Logo',
    template: 'result',
    keywords: 'foundation, foundations, brand, core styles, branding, visual identity, primary logo, usage, placement, clear space, sizing, Masterbrand, Co-brand, Endorsed, Independent, blue diamond',
    url: '/core/logo/index.html'
  }, {
    label: 'Colour',
    template: 'result',
    keywords: 'foundation, foundations, brand, core styles, color, colours, palette, visual identity, grey, text, status, dark, light, supplementary, accent, blue diamond',
    url: '/core/colour/index.html'
  }, {
    label: 'Typography',
    template: 'result',
    keywords: 'foundation, foundations, brand, core styles, font, headings, body text, lists, paragraphs, styles, Public Sans, font stack, CSS, links, blockquote, unordered, ordered, definition, blue diamond',
    url: '/core/typography/index.html'
  }, {
    label: 'Iconography',
    template: 'result',
    keywords: 'foundation, foundations, brand, core styles, icon, icons, actions, communicate, status, interaction, attention, information, Material Design, SVG, scalable vector graphics, rotation, blue diamond',
    url: '/core/iconography/index.html'
  }, {
    label: 'Pictograms',
    template: 'result',
    keywords: 'foundation, foundations, brand, core styles, pictogram, illustration, idea, usage, styling, SVG, blue diamond',
    url: '/core/pictograms/index.html'
  }, {
    label: 'Graphic elements',
    template: 'result',
    keywords: 'foundation, foundations, brand, core styles, logo positioning, hierarchy, interactions, digital branding, border radius, drop shadow, line system, tabs, card, in-page navigation, blue diamond',
    url: '/core/graphic-elements/index.html'
  }, {
    label: 'Grid',
    template: 'result',
    keywords: 'foundation, foundations, layout, core styles, breakpoints, 12 column, responsive, viewport, token, container, gutters, max active content, area, layouts, grids',
    url: '/core/grid/index.html'
  }, {
    label: 'Page layout',
    template: 'result',
    keywords: 'foundation, foundations, layout, core styles, page layouts, standard, full width, two column, left, right, main content, desktop, viewport',
    url: '/core/page-layout/index.html'
  }, {
    label: 'Section',
    template: 'result',
    keywords: 'foundation, foundations, layout, core styles, flexible layout, content, consistent, vertical spacing, container, image, box, colour, inverted, dark background',
    url: '/core/section/index.html'
  }, {
    label: 'Search and filters',
    template: 'result',
    keywords: 'method, methods, Search & Filters, search, filters, pattern, patterns, explore, keywords, phrases, find, results, predictive search, suggestions, autocomplete',
    url: '/methods/search.html'
  }, {
    label: 'Charts and graphs',
    template: 'result',
    keywords: 'method, methods, charts, graphs, data visualisation, comparison, trends, display, statistics, processes, workflows, mapping, diagramming, colours, theming, accessibility, dashboards, NSW Brand Toolkit, screen readers, Chart.js',
    url: '/methods/charts-and-graphs.html'
  }, {
    label: 'Easy Read',
    template: 'result',
    keywords: 'method, methods, Easy Read guidance, Easy Read format, accessible information, cognitive accessibility, intellectual disability, low literacy, simple words, plain language, meaningful pictures, image and text, content blocks, nsw-easy-read-content, information architecture, page anatomy, content design, illustrations, photographs, Easy Read icon, read aloud, EPUB, downloadable formats, accessibility, testing, co-design',
    url: '/methods/easy-read.html'
  }, {
    label: 'Inactive fields',
    template: 'result',
    keywords: 'method, methods, inactive fields, disabled fields, read only, forms, data, unavailable inputs',
    url: '/methods/inactive-fields.html'
  }, {
    label: 'Maps',
    template: 'result',
    keywords: 'method, methods, maps, markers, Mapbox, MapMarker, leaflet, location, pin',
    url: '/methods/maps.html'
  }, {
    label: 'You are here',
    template: 'result',
    keywords: 'method, methods, where am I, where can I go, who is speaking, orientate, breadcrumbs, hero banner, typography, hierarchy, navigation, main navigation, side navigation',
    url: '/methods/you-are-here.html'
  }, {
    label: 'Templates',
    template: 'result',
    keywords: 'get started, templates, homepage, content, search, sample, example, hero banner, featured list, hero search, simple, filters, no results, side navigation, article, form, maps, location, theming, Masterbrand, full page, partial',
    url: '/get-started/templates.html'
  }, {
    label: 'Easy Read templates',
    template: 'result',
    keywords: 'templates, Easy Read page templates, Easy Read landing page, Easy Read category page, Easy Read detail article, Easy Read article template, accessible travel, public transport, Opal card, transport card, TAFE, education, course application, long article, cognitive load, transparent illustrations, illustrations, photographs, example pages, content template',
    url: '/templates/content/easy-read/index.html'
  }, {
    label: 'About the NSW Design System',
    template: 'result',
    keywords: 'get started, What is Design System, What is the NSW Design System, benefits, build faster and at scale, brand and accessibility compliance, consistent code and design language, quality, support, questions, report issues, issue tracker, report a bug',
    url: '/get-started/about-the-nsw-design-system.html'
  }, {
    label: 'Supporting different roles',
    template: 'result',
    keywords: 'get started, product managers, designers, developers, UI, UX, roles',
    url: '/get-started/supporting-different-roles.html'
  }, {
    label: 'Our ecosystem',
    template: 'result',
    keywords: 'get started, digital visual identity, core styles, foundations, components, utility classes, spacing, layout, display, Digital NSW Community, community and support, built in accessibility, UX, content guidance, UI, code starter kits',
    url: '/get-started/our-ecosystem.html'
  }, {
    label: 'NSW Design System Community closure',
    template: 'result',
    keywords: 'NSW Design System Community, Community forum, Discourse, Community archived, Community archive, Former Community, community.designsystem.nsw.gov.au',
    url: '/community-closure/index.html'
  }, {
    label: 'Privacy Collection Notice',
    template: 'result',
    keywords: 'privacy, PCN, personal information, data collection, DDS, subscribe, subscription, newsletter, mailing list, Figma access, unsubscribe, Government Technology Platforms, user consent',
    url: '/privacy-collection-notice.html'
  }, {
    label: 'Release notes',
    template: 'result',
    keywords: "release notes, releases, work in progress, consulting with community, backlog, roadmap, version, change log, changes, what's happening, changelog, updates",
    url: '/release-notes/index.html'
  }, {
    label: 'For designers',
    template: 'result',
    keywords: 'get started, Getting Started, Design, designers, core styles, foundations, components, UX guidance, first steps, design',
    url: '/get-started/for-designers.html'
  }, {
    label: 'Figma UI Kit',
    template: 'result',
    keywords: 'get started, guides, video tutorials, file, UI, design, Figma',
    url: '/get-started/figma-ui-kit.html'
  }, {
    label: 'Extending',
    template: 'result',
    keywords: 'get started, core elements, foundations, create, consistent, building, accessible, components, UX guidance, contributing, customise, custom, unique, adapt, adapting',
    url: '/get-started/extending.html'
  }, {
    label: 'Theming',
    template: 'result',
    keywords: 'get started, Theme, Design Theming, colours, consistent, branding, colour palette, dark, light, brand, supplementary, accent, non corporate, cobrand, Masterbrand corporate, non-corporate, co-brand, independent',
    url: '/get-started/theming.html'
  }, {
    label: 'Guides',
    template: 'result',
    keywords: 'get started, using the design system, designing, collaborating, prototyping, guidance',
    url: '/get-started/guides.html'
  }, {
    label: 'For developers',
    template: 'result',
    keywords: 'get started, Getting Started, Develop, developers, npm, CDN, starter kit, installing, import styles, core and selected components, Public Sans, Material Icons, Node, Sass, typography, mixins, functions, javascript, JSDelivr, browser support',
    url: '/get-started/for-developers.html'
  }, {
    label: 'Theming for developers',
    template: 'result',
    keywords: 'Theme, Develop theming, developer theming, customisation, branding, CSS variables, full page, content only, partial, brand',
    url: '/get-started/theming-for-developers.html'
  }, {
    label: 'Background',
    template: 'result',
    keywords: 'utility classes, background utility classes, background colour, opacity, hover state, color',
    url: '/utility-classes/background.html'
  }, {
    label: 'Borders',
    template: 'result',
    keywords: 'utility classes, border utility classes, border radius, width, style, color, borders',
    url: '/utility-classes/borders.html'
  }, {
    label: 'Box shadow',
    template: 'result',
    keywords: 'utility classes, box shadow utility class, box-shadow, shadow',
    url: '/utility-classes/box-shadow.html'
  }, {
    label: 'Display',
    template: 'result',
    keywords: 'utility classes, display utility classes, display, inline, inline-block, block, grid, inline-grid, flex, inline-flex, hide, show',
    url: '/utility-classes/display.html'
  }, {
    label: 'Flex',
    template: 'result',
    keywords: 'utility classes, flex utility classes, direction, justify content, align items, align self, fill, grow, shrink, wrap, order, content',
    url: '/utility-classes/flex.html'
  }, {
    label: 'Float',
    template: 'result',
    keywords: 'utility classes, float utility classes, wrapping',
    url: '/utility-classes/float.html'
  }, {
    label: 'Overflow',
    template: 'result',
    keywords: 'utility classes, overflow utility classes, auto, hidden, visible, scroll',
    url: '/utility-classes/overflow.html'
  }, {
    label: 'Position',
    template: 'result',
    keywords: 'utility classes, position utility classes, static, relative, absolute, fixed, sticky',
    url: '/utility-classes/position.html'
  }, {
    label: 'Reflow',
    template: 'result',
    keywords: 'utility classes, reflow, WCAG reflow, WCAG 1.4.10, Success Criterion 1.4.10, 400% zoom, 400 percent zoom, 320px, 320 CSS pixels, 1280px at 400%, responsive, accessibility, zoom, low vision, constrained viewport, horizontal scrolling, two-dimensional scrolling, max-width 20rem, nsw.reflow, $nsw-reflow-threshold, Sass helper, CSS, compiled CSS, without Sass, no Sass, media query, breakpoint, breakpoints',
    url: '/utility-classes/reflow.html'
  }, {
    label: 'Spacing',
    template: 'result',
    keywords: 'utility classes, responsive, units, alignment, consistent, 8-pixel grid, spacing token, helper classes, margin, padding, banner',
    url: '/utility-classes/spacing.html'
  }, {
    label: 'SVG',
    template: 'result',
    keywords: 'utility classes, SVG utility classes, fill, stroke, stroke width, icons, pictograms',
    url: '/utility-classes/svg.html'
  }, {
    label: 'Text',
    template: 'result',
    keywords: 'utility classes, text utility classes, alignment, wrapping, font, weight, overflow, colour',
    url: '/utility-classes/text.html'
  }, {
    label: 'Vertical alignment',
    template: 'result',
    keywords: 'utility classes, vertical align, vertical alignment utility classes, alignment, inline, inline-block, inline-table, table, baseline, top, middle, bottom, text-bottom, text-top',
    url: '/utility-classes/vertical-align.html'
  }, {
    label: 'Visibility',
    template: 'result',
    keywords: 'utility classes, visibility utility classes, show, hide',
    url: '/utility-classes/visibility.html'
  }, {
    label: 'Z-index',
    template: 'result',
    keywords: 'utility classes, z-index classes, stack order, three-dimensional, positioning, 3D',
    url: '/utility-classes/z-index.html'
  }, {
    label: 'Contribution criteria',
    template: 'result',
    keywords: 'contribute, contribution criteria, propose, build, review, accessibility, community',
    url: '/contribute/contribution-criteria.html'
  }, {
    label: 'Propose a new component',
    template: 'result',
    keywords: 'contribute, propose, new component, suggestion, community, contribution',
    url: '/contribute/propose-a-new-component.html'
  }, {
    label: 'Build a new component',
    template: 'result',
    keywords: 'contribute, build, new component, development, contribution',
    url: '/contribute/build-a-new-component.html'
  }];

  const defaults = {
    debounce: 200,
    characters: 1,
    populate: true,
    searchData(query, cb, eventType) {
      let data = searchValues.filter(item => item.label.toLowerCase().includes(query.toLowerCase()) || item.keywords.toLowerCase().includes(query.toLowerCase()));
      if (data.length === 0) {
        // fallback for no results found
        data = [{
          label: 'No results',
          template: 'no-results'
        }];
      }
      cb(data);
    },
    onClick(option, obj, event, cb) {
      // update input value
      const input = obj.querySelector('input');
      const linkElement = option.querySelector('a');
      input.value = linkElement.textContent;

      // close dropdown
      cb();
    }
  };
  class Autocomplete {
    constructor(element) {
      this.element = element;
      this.options = defaults;
      this.input = this.element.querySelector('.js-autocomplete__input');
      this.results = this.element.querySelector('.js-autocomplete__results');
      this.resultsList = this.results.querySelector('.js-autocomplete__list');
      this.ariaResult = this.element.querySelectorAll('.js-autocomplete__aria-results');
      this.resultClassName = this.element.querySelectorAll('.js-autocomplete__item').length > 0 ? 'js-autocomplete__item' : 'js-autocomplete__result';
      this.inputVal = '';
      this.typeId = false;
      this.searching = false;
      this.searchingClass = 'searching';
      this.dropdownActiveClass = 'active';
      this.truncateDropdown = !!(this.element.getAttribute('data-autocomplete-dropdown-truncate') && this.element.getAttribute('data-autocomplete-dropdown-truncate') === 'on');
      this.autocompleteClosed = false;
      this.clone = false;
      this.selectedLabelElement = false;
    }
    init() {
      this.initAutocompleteAria();
      this.initAutocompleteTemplates();
      this.initAutocompleteEvents();
    }
    initAutocompleteAria() {
      this.input.setAttribute('role', 'combobox');
      this.input.setAttribute('aria-autocomplete', 'list');
      const listId = this.resultsList.getAttribute('id');
      if (listId) this.input.setAttribute('aria-owns', listId);
      this.resultsList.setAttribute('role', 'list');
    }
    initAutocompleteTemplates() {
      this.templateItems = this.resultsList.querySelectorAll(`.${this.resultClassName}[data-autocomplete-template]`);
      if (this.templateItems.length < 1) this.templateItems = this.resultsList.querySelectorAll(`.${this.resultClassName}`);
      this.templates = [];
      this.templateItems.forEach((item, i) => {
        this.templates[i] = item.getAttribute('data-autocomplete-template');
      });
    }
    initAutocompleteEvents() {
      this.input.addEventListener('keyup', event => {
        this.handleInputTyped(event);
      });
      this.input.addEventListener('search', () => {
        this.updateSearch();
      });
      this.input.addEventListener('click', () => {
        this.updateSearch(true);
      });
      this.input.addEventListener('focus', () => {
        if (this.autocompleteClosed) {
          this.autocompleteClosed = false;
          return;
        }
        this.updateSearch(true);
      });
      this.input.addEventListener('blur', event => {
        this.checkFocusLost(event);
      });
      this.resultsList.addEventListener('keydown', event => {
        this.navigateList(event);
      });
      this.resultsList.addEventListener('focusout', event => {
        this.checkFocusLost(event);
      });
      window.addEventListener('keyup', event => {
        if (event.key && event.key.toLowerCase() === 'escape') {
          this.toggleOptionsList(false);
        } else if (event.key && event.key.toLowerCase() === 'enter') {
          this.selectResult(document.activeElement.closest(`.${this.resultClassName}`), event);
        }
      });
      this.resultsList.addEventListener('click', event => {
        this.selectResult(event.target.closest(`.${this.resultClassName}`), event);
      });
    }
    checkFocusLost(event) {
      if (this.element.contains(event.relatedTarget)) return;
      this.toggleOptionsList(false);
    }
    handleInputTyped(event) {
      if (event.key.toLowerCase() === 'arrowdown') {
        this.moveFocusToList();
      } else {
        this.updateSearch();
      }
    }
    moveFocusToList() {
      if (!this.element.classList.contains(this.dropdownActiveClass)) return;
      this.resetSearch();
      let index = 0;
      if (!this.elementListIsFocusable(index)) {
        index = this.getElementFocusbleIndex(index, true);
      }
      this.getListFocusableEl(index).focus();
    }
    updateSearch(bool) {
      const inputValue = this.input.value;
      if (inputValue === this.inputVal && !bool) return;
      this.inputVal = inputValue;
      if (this.typeId) clearInterval(this.typeId);
      if (this.inputVal.length < this.options.characters) {
        this.toggleOptionsList(false);
        return;
      }
      if (bool) {
        this.updateResultsList('focus');
        return;
      }
      this.typeId = setTimeout(() => {
        this.updateResultsList('type');
      }, this.options.debounce);
    }
    toggleOptionsList(bool) {
      if (bool) {
        if (this.element.classList.contains(this.dropdownActiveClass)) return;
        this.element.classList.add(this.dropdownActiveClass);
        this.input.setAttribute('aria-expanded', true);
        this.truncateAutocompleteList();
      } else {
        if (!this.element.classList.contains(this.dropdownActiveClass)) return;
        if (this.resultsList.contains(document.activeElement)) {
          this.autocompleteClosed = true;
          this.input.focus();
        }
        this.element.classList.remove(this.dropdownActiveClass);
        this.input.removeAttribute('aria-expanded');
        this.resetSearch();
      }
    }
    truncateAutocompleteList() {
      if (!this.truncateDropdown) return;
      // reset max height
      this.resultsList.style.maxHeight = '';
      // check available space
      const spaceBelow = window.innerHeight - this.input.getBoundingClientRect().bottom - 10;
      const maxHeight = parseInt(this.getComputedStyle(this.resultsList).maxHeight, 10);
      if (maxHeight > spaceBelow) {
        this.resultsList.style.maxHeight = `${spaceBelow}px`;
      } else {
        this.resultsList.style.maxHeight = '';
      }
    }
    updateResultsList(eventType) {
      if (this.searching) return;
      this.searching = true;
      this.element.classList.add(this.searchingClass);
      this.options.searchData(this.inputVal, (data, cb) => {
        this.populateResults(data, cb);
        this.element.classList.remove(this.searchingClass);
        this.toggleOptionsList(true);
        this.updateAriaRegion();
        this.searching = false;
      }, eventType);
    }
    updateAriaRegion() {
      this.resultsItems = this.resultsList.querySelectorAll(`.${this.resultClassName}[tabindex="-1"]`);
      if (this.ariaResult.length === 0) return;
      this.ariaResult[0].textContent = this.resultsItems.length;
    }
    resetSearch() {
      if (this.typeId) clearInterval(this.typeId);
      this.typeId = false;
    }
    navigateList(event) {
      const downArrow = event.key.toLowerCase() === 'arrowdown';
      const upArrow = event.key.toLowerCase() === 'arrowup';
      if (!downArrow && !upArrow) return;
      event.preventDefault();
      const selectedElement = document.activeElement.closest(`.${this.resultClassName}`) || document.activeElement;
      const index = Array.prototype.indexOf.call(this.resultsItems, selectedElement);
      const newIndex = this.getElementFocusbleIndex(index, downArrow);
      this.getListFocusableEl(newIndex).focus();
    }
    getElementFocusbleIndex(index, nextItem) {
      let newIndex = nextItem ? index + 1 : index - 1;
      if (newIndex < 0) newIndex = this.resultsItems.length - 1;
      if (newIndex >= this.resultsItems.length) newIndex = 0;
      if (!this.elementListIsFocusable(newIndex)) {
        return this.getElementFocusbleIndex(newIndex, nextItem);
      }
      return newIndex;
    }
    elementListIsFocusable(index) {
      const item = this.resultsItems[index];
      const role = item.getAttribute('role');
      if (role && role === 'presentation') {
        return false;
      }
      return true;
    }
    getListFocusableEl(index) {
      let newFocus = this.resultsItems[index];
      const focusable = newFocus.querySelector('button:not([disabled]), [href]');
      if (focusable.length > 0) {
        newFocus = focusable;
      }
      return newFocus;
    }
    selectResult(result, event) {
      if (!result) return;
      if (this.options.onClick) {
        this.options.onClick(result, this.element, event, () => {
          this.toggleOptionsList(false);
        });
      } else {
        this.input.value = this.getResultContent(result);
        this.toggleOptionsList(false);
      }
      this.inputVal = this.input.value;
    }
    getResultContent(result) {
      this.selectedLabelElement = result.querySelector('[data-autocomplete-label]');
      return this.selectedLabelElement ? this.selectedLabelElement.textContent : result.textContent;
    }
    populateResults(data, cb) {
      let innerHtml = '';
      data.forEach(item => {
        innerHtml += this.getItemHtml(item);
      });
      if (this.options.populate) this.resultsList.innerHTML = innerHtml;else if (cb) cb(innerHtml);
    }
    getItemHtml(data) {
      this.clone = this.getClone(data);
      this.clone.setAttribute('tabindex', '-1');
      Object.keys(data).forEach(key => {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if (key === 'label') this.setLabel(data[key]);else if (key === 'class') this.setClass(data[key]);else if (key === 'url') this.setUrl(data[key]);else if (key === 'src') this.setSrc(data[key]);else this.setKey(key, data[key]);
        }
      });
      return this.clone.outerHTML;
    }
    getClone(data) {
      let item = false;
      if (this.templateItems.length === 1 || !data.template) {
        [item] = this.templateItems;
      } else {
        this.templateItems.forEach((templateItem, i) => {
          if (data.template === this.templates[i]) {
            item = templateItem;
          }
        });
        if (!item) [item] = this.templateItems;
      }
      return item.cloneNode(true);
    }
    setLabel(label) {
      const labelElement = this.clone.querySelector('[data-autocomplete-label]');
      if (labelElement) {
        labelElement.textContent = label;
      } else {
        this.clone.textContent = label;
      }
    }
    setClass(classList) {
      const classesArray = classList.split(' ');
      this.clone.classList.add(classesArray[0]);
      if (classesArray.length > 1) this.setClass(classesArray.slice(1).join(' '));
    }
    setUrl(url) {
      const linkElement = this.clone.querySelector('[data-autocomplete-url]');
      if (linkElement) linkElement.setAttribute('href', url);
    }
    setSrc(src) {
      const imgElement = this.clone.querySelector('[data-autocomplete-src]');
      if (imgElement) imgElement.setAttribute('src', src);
    }
    setKey(key, value) {
      const subElement = this.clone.querySelector(`[data-autocomplete-${key}]`);
      if (subElement) {
        if (subElement.hasAttribute('data-autocomplete-html')) subElement.innerHTML = value;else subElement.textContent = value;
      }
    }
  }

  class ExpandableSearch {
    constructor(element) {
      this.element = element;
      this.searchInput = this.element.querySelector('.js-search-input');
      this.buttons = this.element.querySelectorAll('.js-open-search');
      this.searchArea = this.element.querySelector('.js-search-area');
      this.hasContentClass = 'active';
    }
    init() {
      this.searchInput.addEventListener('input', event => {
        const input = event.target;
        if (input.value.length > 0) {
          input.classList.add(this.hasContentClass);
          input.setAttribute('aria-expanded', true);
        } else {
          input.classList.remove(this.hasContentClass);
          input.setAttribute('aria-expanded', false);
        }
      });

      // Mouse: navigate through to each suggestion on click
      this.buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          if (this.searchInput.classList.contains(this.hasContentClass)) {
            this.searchArea.hidden = false;
            this.searchInput.focus();
          }
        });
      });

      // Keyboard: submit on Enter by navigating to the active suggestion (or first link)
      if (this.searchInput && this.searchArea) {
        this.searchInput.addEventListener('keydown', e => {
          if (e.key === 'Enter' && !e.shiftKey) {
            const activeLink = this.searchArea.querySelector('[aria-selected="true"] a[href], .is-active a[href], [data-selected="true"] a[href]');
            const firstLink = this.searchArea.querySelector('a[href]');
            const target = activeLink || firstLink;
            if (target && target.href) {
              e.preventDefault();
              window.location.assign(target.href);
            }
          }
        });
      }
    }
  }

  /* eslint-disable new-cap */
  /* eslint-disable no-undef */
  class DownloadPDF {
    constructor(element) {
      this.element = element;
      this.contentClass = this.element.getAttribute('data-pdf-content');
      this.content = this.contentClass ? document.querySelector(`.${this.contentClass}`) : document.body;
      this.name = this.element.getAttribute('data-pdf-title') || document.title;
      this.buttonText = this.element.querySelector('span:not(.nsw-material-icons)');
    }
    init() {
      this.element.addEventListener('click', () => {
        this.downloadEvent();
      });
      this.element.addEventListener('keyup', event => {
        if (event.code && event.code.toLowerCase() === 'enter' || event.key && event.key.toLowerCase() === 'enter') {
          this.downloadEvent();
        }
      });
    }
    downloadEvent() {
      const originalButtonText = this.buttonText.innerText;
      this.buttonText.innerText = 'Building PDF...';
      html2canvas(this.content).then(canvas => {
        const base64image = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'px', [canvas.width, canvas.height]);
        pdf.addImage(base64image, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save(`${this.name}.pdf`);
        this.buttonText.innerText = originalButtonText;
      }).catch(error => {
        console.error('An error occurred:', error);
        this.buttonText.innerText = originalButtonText;
      });
    }
  }

  /* eslint-disable max-len */
  class ColorSwatches {
    constructor(element, config) {
      this.element = element;
      this.variables = config.variables;
      this.palettes = config.palettes;
      this.dataTable = document.querySelector('.js-color-swatches__content');
      this.targetSelector = this.element.dataset.target || ':root';
      this.targetElement = document.querySelector(this.targetSelector);
      const [firstPalette] = Object.keys(this.palettes);
      const [firstColor] = Object.keys(this.palettes[firstPalette]).filter(key => key !== 'label');
      this.currentPalette = firstPalette;
      this.currentColor = firstColor;
      this.legend = this.element.querySelector('.js-color-swatches__color'); // Title element
      this.legendKey = this.element.dataset.legendKey || null;
      this.swatchKey = this.element.dataset.swatchKey || null;
      this.swatchList = null; // Swatch list container
    }

    // Initialise the color swatches
    init() {
      if (this.element.dataset.initialised) return;
      this.element.dataset.initialised = 'true';
      this.createColorSwatches(); // Creates the color swatch list first
      // Create the palette select dropdown (and its label) before reading URL param
      this.paletteSelect = this.createPaletteSelector();
      if (this.paletteLabel) {
        // Insert the label immediately after the swatches
        this.swatchList.insertAdjacentElement('afterend', this.paletteLabel);
        // Insert the select immediately after the label
        this.paletteLabel.insertAdjacentElement('afterend', this.paletteSelect);
      } else {
        // Fallback: insert the select after the swatches
        this.swatchList.insertAdjacentElement('afterend', this.paletteSelect);
      }
      // Now apply any palette from URL
      this.setPaletteFromURL();
      this.addEventListeners();
      this.updateCSSVariables();
      this.updateColorData();
      this.updateLegend();
    }

    // Creates palette selector (dropdown)
    createPaletteSelector() {
      const existingPaletteSelect = this.element.querySelector('.js-palette-selector');
      const legendId = this.legend && this.legend.id ? this.legend.id : null;
      if (existingPaletteSelect) {
        // Ensure existing select has an accessible name and useful attributes
        if (!existingPaletteSelect.id) {
          existingPaletteSelect.id = `${this.element.id || 'color-swatches'}-palette`;
        }
        if (!existingPaletteSelect.getAttribute('name')) {
          existingPaletteSelect.setAttribute('name', 'palette');
        }
        // Prefer an explicit label, but if none is present in the DOM, fall back to aria-labelledby
        const hasAriaName = existingPaletteSelect.hasAttribute('aria-label') || existingPaletteSelect.hasAttribute('aria-labelledby');
        if (!hasAriaName && legendId) {
          existingPaletteSelect.setAttribute('aria-labelledby', legendId);
        }
        return existingPaletteSelect;
      }

      // Build a new select + visible label
      const paletteSelect = document.createElement('select');
      paletteSelect.classList.add('js-palette-selector', 'nsw-form__select', 'nsw-color-swatches__palette-selector');
      paletteSelect.id = `${this.element.id || 'color-swatches'}-palette`;
      paletteSelect.setAttribute('name', 'palette');

      // Visible label (preferred over aria-label). Allow custom text via data attribute
      const label = document.createElement('label');
      label.classList.add('nsw-form__label', 'sr-only');
      label.setAttribute('for', paletteSelect.id);
      label.textContent = this.element.dataset.paletteLabel || 'Select colour palette';
      this.paletteLabel = label;
      Object.keys(this.palettes).forEach(palette => {
        const option = document.createElement('option');
        option.value = palette;
        // Use label from palette data if available
        const paletteMeta = this.palettes[palette];
        option.textContent = paletteMeta.label || this.constructor.formatLabel(palette);
        paletteSelect.appendChild(option);
      });
      return paletteSelect;
    }

    // Creates color swatches (clickable circles)
    createColorSwatches() {
      if (!this.swatchList) {
        this.swatchList = document.createElement('ul');
        this.swatchList.classList.add('nsw-color-swatches__list', 'js-color-swatches__list');
        this.swatchList.setAttribute('role', 'radiogroup');
        this.swatchList.setAttribute('aria-labelledby', this.legend && this.legend.id ? this.legend.id : 'color-swatches-title');
        this.element.appendChild(this.swatchList);
      } else {
        this.swatchList.innerHTML = ''; // Clear previous colors
      }
      Object.entries(this.palettes[this.currentPalette]).filter(([colorKey]) => colorKey !== 'label').forEach(([colorKey, colorData]) => {
        const swatchItem = document.createElement('li');
        swatchItem.classList.add('nsw-color-swatches__item', 'js-color-swatches__item');
        const isSelected = colorKey === this.currentColor;
        const swatchEntry = this.swatchKey ? colorData[this.swatchKey] : null;
        const isObjectEntry = swatchEntry && typeof swatchEntry === 'object';
        const swatchLabel = isObjectEntry && swatchEntry.label != null ? swatchEntry.label : this.constructor.formatLabel(colorKey);
        const fallbackSwatchColor = swatchEntry != null ? swatchEntry : colorData.val;
        const swatchColor = isObjectEntry && swatchEntry.value != null ? swatchEntry.value : fallbackSwatchColor;
        if (isSelected) swatchItem.classList.add('nsw-color-swatches__item--selected');
        swatchItem.setAttribute('data-color', colorKey);
        swatchItem.setAttribute('role', 'radio');
        swatchItem.setAttribute('aria-checked', isSelected ? 'true' : 'false');
        swatchItem.setAttribute('tabindex', isSelected ? '0' : '-1');
        swatchItem.innerHTML = `
        <span class="nsw-color-swatches__option" tabindex="0">
          <span class="sr-only js-color-swatch__label">${swatchLabel}</span>
          <span aria-hidden="true" style="background-color: ${swatchColor};" class="nsw-color-swatches__swatch"></span>
        </span>
      `;
        this.swatchList.appendChild(swatchItem);
      });
      return this.swatchList;
    }

    // Adds event listeners
    addEventListeners() {
      // Palette selection event
      this.paletteSelect.addEventListener('change', e => {
        this.currentPalette = e.target.value;
        const [firstColor] = Object.keys(this.palettes[this.currentPalette]).filter(key => key !== 'label');
        this.currentColor = firstColor; // Reset to first color
        this.createColorSwatches();
        this.updateURL();
        this.updateCSSVariables();
        this.updateColorData();
        this.updateLegend();
      });

      // Color swatches event
      this.element.addEventListener('click', e => {
        const swatch = e.target.closest('.js-color-swatches__item');
        if (!swatch) return;
        this.currentColor = swatch.getAttribute('data-color');
        this.updateSelectedSwatch(swatch);
        this.updateURL();
        this.updateCSSVariables();
        this.updateColorData();
        this.updateLegend();
      });

      // Keyboard interaction
      this.element.addEventListener('keydown', e => {
        const swatch = document.activeElement.closest('.js-color-swatches__item');
        if (!swatch) return;
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault(); // Prevent scrolling when pressing the space key
          this.currentColor = swatch.getAttribute('data-color');
          this.updateSelectedSwatch(swatch);
          this.updateCSSVariables();
          this.updateColorData();
          this.updateLegend();
        }
      });
      this.element.addEventListener('focusin', e => {
        const swatch = e.target.closest('.js-color-swatches__item');
        if (!swatch) return;

        // Ensure the swatch receives a visual focus style when navigated to
        this.updateSelectedSwatch(swatch);
      });
    }

    // Updates swatch selection
    updateSelectedSwatch(selectedSwatch) {
      this.swatchList.querySelectorAll('.js-color-swatches__item').forEach(swatch => {
        swatch.classList.remove('nsw-color-swatches__item--selected');
        swatch.setAttribute('aria-checked', 'false');
      });
      selectedSwatch.classList.add('nsw-color-swatches__item--selected');
      selectedSwatch.setAttribute('aria-checked', 'true');
    }

    // Updates CSS variables
    updateCSSVariables() {
      const selectedColors = this.palettes[this.currentPalette][this.currentColor];

      // Apply changes to correct scope (content-only or full-page)
      Object.keys(this.variables).forEach(key => {
        // unwrap label/value objects if present
        const entry = selectedColors[key];
        const colorValue = entry && typeof entry === 'object' && entry.value ? entry.value : entry;
        this.targetElement.style.setProperty(this.variables[key], colorValue);
      });
    }

    // Updates color data table
    updateColorData() {
      if (!this.dataTable) return;
      const selectedColors = this.palettes[this.currentPalette][this.currentColor];
      this.dataTable.innerHTML = Object.keys(this.variables).map(key => {
        // unwrap label/value objects if present
        const entry = selectedColors[key];
        const colorValue = entry && typeof entry === 'object' && entry.value ? entry.value : entry;
        const colorLabel = entry && typeof entry === 'object' && entry.label ? entry.label : '';
        return `
          <tr class="nsw-color-swatches__data">
            <td><div class="nsw-docs__swatch" style="background-color: var(${this.variables[key]})"></div></td>
            <td><p>${this.constructor.formatLabel(key)}</p></td>
            <td><p><code>${colorValue}</code>${colorLabel && `<br><p class='nsw-small nsw-m-top-xs nsw-m-bottom-xxs'>${colorLabel}`}</p></td>
            <td><p><code>${this.variables[key]}</code></p></td>
          </tr>`;
      }).join('');
    }

    // Updates legend (title)
    updateLegend() {
      if (this.legend) {
        const selectedColors = this.palettes[this.currentPalette][this.currentColor];
        const legendEntry = this.legendKey ? selectedColors[this.legendKey] : null;
        const entryLabel = legendEntry && typeof legendEntry === 'object' ? legendEntry.label : legendEntry;
        const legendText = entryLabel || this.constructor.formatLabel(this.currentColor);
        this.legend.textContent = legendText;
        this.legend.setAttribute('aria-live', 'polite');
      }
    }

    // Formats labels
    static formatLabel(text) {
      return text.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    }

    // Sets palette and color from URL query parameters if provided
    setPaletteFromURL() {
      const params = new URLSearchParams(window.location.search);
      const paletteFromURL = params.get('palette');
      const colorFromURL = params.get('color');
      if (!paletteFromURL || !this.palettes[paletteFromURL]) return;
      this.currentPalette = paletteFromURL;
      const colors = Object.keys(this.palettes[this.currentPalette]).filter(key => key !== 'label');
      this.currentColor = colorFromURL && colors.includes(colorFromURL) ? colorFromURL : colors[0];
      if (this.paletteSelect) {
        this.paletteSelect.value = this.currentPalette;
      }
      this.createColorSwatches();
      const selectedSwatch = this.swatchList.querySelector(`[data-color="${this.currentColor}"]`);
      if (selectedSwatch) this.updateSelectedSwatch(selectedSwatch);
      this.updateCSSVariables();
      this.updateColorData();
      this.updateLegend();
    }

    // Updates the URL query string without reloading
    updateURL() {
      const params = new URLSearchParams(window.location.search);
      params.set('palette', this.currentPalette);
      params.set('color', this.currentColor);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  }

  // Prevent icon flash: hide icons until font loads
  document.documentElement.classList.add('material-icons-loading');
  function initDocs() {
    function initEasyReadAnatomyHeight() {
      const anatomyIframes = document.querySelectorAll('.nsw-easy-read-anatomy iframe');
      if (!anatomyIframes.length) return;
      const getPageHeight = doc => Math.max(doc.body.scrollHeight, doc.body.offsetHeight, doc.documentElement.clientHeight, doc.documentElement.scrollHeight, doc.documentElement.offsetHeight);
      const getIframeDocument = iframe => {
        try {
          return iframe.contentDocument || iframe.contentWindow.document;
        } catch (error) {
          return null;
        }
      };
      const updateAnatomyHeight = iframe => {
        const viewport = iframe.closest('.nsw-easy-read-anatomy__viewport');
        const anatomy = iframe.closest('.nsw-easy-read-anatomy');
        const doc = getIframeDocument(iframe);
        if (!viewport || !anatomy || !doc) return;
        const scale = parseFloat(getComputedStyle(anatomy).getPropertyValue('--nsw-easy-read-anatomy-scale')) || 0.3;

        // Break circular sizing: shrink before measuring so vh/min-height rules do not lock to an older large height.
        iframe.style.setProperty('height', '1px');
        const height = getPageHeight(doc);
        iframe.style.setProperty('height', `${height}px`);
        viewport.style.setProperty('--nsw-easy-read-anatomy-height', `${Math.ceil(height * scale)}px`);
      };
      anatomyIframes.forEach(iframe => {
        const resize = () => updateAnatomyHeight(iframe);
        iframe.addEventListener('load', () => {
          resize();
          requestAnimationFrame(resize);
          window.setTimeout(resize, 250);
        });
        const doc = getIframeDocument(iframe);
        if (doc && doc.readyState === 'complete') resize();
        window.addEventListener('resize', resize);
      });
    }
    const codeButtons = document.querySelectorAll('.js-code-button');
    codeButtons.forEach(button => {
      const code = button.nextElementSibling;
      const text = button.querySelector('span');
      button.addEventListener('click', () => {
        if (code.classList.contains('active')) {
          button.classList.remove('active');
          code.classList.remove('active');
          text.textContent = 'Show code';
        } else {
          button.classList.add('active');
          code.classList.add('active');
          text.textContent = 'Hide code';
        }
      }, false);
    });
    const copyButtons = document.querySelectorAll('.js-code-copy');
    copyButtons.forEach(button => {
      const code = button.nextElementSibling;
      const text = button.querySelector('span');
      const script = code.querySelector('script');
      script.remove();
      button.addEventListener('click', () => {
        const elem = document.createElement('textarea');
        elem.value = code.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        text.textContent = 'Copied';
        document.body.removeChild(elem);
        setTimeout(() => {
          text.textContent = 'Copy';
        }, 2000);
      }, false);
    });
    const navLinks = document.querySelectorAll('.nsw-docs__primary-nav a[href]');
    const normalisePath = pathname => pathname === '/' ? '/index.html' : pathname;
    const currentURL = normalisePath(window.location.pathname) + window.location.search + window.location.hash;
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const sanitisedURL = new URL(href, window.location.origin);
      const linkURL = normalisePath(sanitisedURL.pathname) + sanitisedURL.search + sanitisedURL.hash;
      if (currentURL === linkURL) {
        link.classList.add('current');
        if (link.closest('ul').classList.contains('nsw-main-nav__sub-list')) {
          const subNav = link.closest('.nsw-main-nav__sub-nav');
          const mainNavItem = subNav ? subNav.parentElement : null;
          if (mainNavItem) {
            mainNavItem.classList.add('active');
            if (mainNavItem.firstElementChild && mainNavItem.firstElementChild !== link) {
              mainNavItem.firstElementChild.classList.add('current-section');
            }
          }
        } else {
          const topNavItem = link.closest('li');
          if (topNavItem && topNavItem.parentElement.classList.contains('nsw-main-nav__list')) {
            topNavItem.classList.add('active');
          }
          link.classList.add('current-section');
        }
      }
    });
    const autoComplete = document.querySelectorAll('.js-autocomplete');
    if (autoComplete) {
      autoComplete.forEach(element => {
        new Autocomplete(element).init();
      });
    }
    const expandableSearch = document.querySelectorAll('.js-header');
    if (expandableSearch) {
      expandableSearch.forEach(element => {
        new ExpandableSearch(element).init();
      });
    }
    const downloadPDF = document.querySelectorAll('.js-download-page');
    if (downloadPDF) {
      downloadPDF.forEach(element => {
        new DownloadPDF(element).init();
      });
    }
    const colorConfig = {
      variables: {
        'brand-dark': '--nsw-brand-dark',
        'brand-light': '--nsw-brand-light',
        'brand-supplementary': '--nsw-brand-supplementary',
        'brand-accent': '--nsw-brand-accent',
        'brand-accent-light': '--nsw-brand-accent-light',
        'link-colour': '--nsw-link',
        'visited-link-colour': '--nsw-visited',
        'hover-background-colour': '--nsw-hover',
        'active-background-colour': '--nsw-active',
        focus: '--nsw-focus'
      },
      palettes: {
        default: {
          label: 'Default Palette',
          'Blue 01': {
            val: '#002664',
            'brand-dark': {
              label: 'Blue 01',
              value: '#002664'
            },
            'brand-light': {
              label: 'Blue 04',
              value: '#CBEDFD'
            },
            'brand-supplementary': {
              label: 'Blue 02',
              value: '#146CFD'
            },
            'brand-accent': {
              label: 'Red 02',
              value: '#D7153A'
            },
            'brand-accent-light': {
              label: 'Red 04',
              value: '#FFE6EA'
            },
            'link-colour': {
              label: 'Blue 01',
              value: '#002664'
            },
            'visited-link-colour': {
              label: '',
              value: '#551A8B'
            },
            'hover-background-colour': {
              label: '',
              value: 'rgba(0, 38, 100, 0.1)'
            },
            'active-background-colour': {
              label: '',
              value: 'rgba(0, 38, 100, 0.2)'
            },
            focus: {
              label: '',
              value: '#0086B3'
            }
          },
          'Purple 01': {
            val: '#441170',
            'brand-dark': {
              label: 'Purple 01',
              value: '#441170'
            },
            'brand-light': {
              label: 'Purple 04',
              value: '#E6E1FD'
            },
            'brand-supplementary': {
              label: 'Purple 02',
              value: '#8055F1'
            },
            'brand-accent': {
              label: 'Yellow 02',
              value: '#FAAF05'
            },
            'brand-accent-light': {
              label: 'Yellow 04',
              value: '#FFF4CF'
            },
            'link-colour': {
              label: 'Purple 01',
              value: '#441170'
            },
            'visited-link-colour': {
              label: '',
              value: '#70114D'
            },
            'hover-background-colour': {
              label: '',
              value: 'rgba(68, 17, 112, 0.1)'
            },
            'active-background-colour': {
              label: '',
              value: 'rgba(68, 17, 112, 0.2)'
            },
            focus: {
              label: '',
              value: '#351BB5'
            }
          },
          'Fuchsia 01': {
            val: '#65004D',
            'brand-dark': {
              label: 'Fuchsia 01',
              value: '#65004D'
            },
            'brand-light': {
              label: 'Fuchsia 04',
              value: '#F0E6ED'
            },
            'brand-supplementary': {
              label: 'Fuchsia 02',
              value: '#D912AE'
            },
            'brand-accent': {
              label: 'Orange 02',
              value: '#F3631B'
            },
            'brand-accent-light': {
              label: 'Orange 04',
              value: '#FDEDDF'
            },
            'link-colour': {
              label: 'Fuchsia 01',
              value: '#65004D'
            },
            'visited-link-colour': {
              label: '',
              value: '#983379'
            },
            'hover-background-colour': {
              label: '',
              value: 'rgba(101, 0, 77, 0.1)'
            },
            'active-background-colour': {
              label: '',
              value: 'rgba(101, 0, 77, 0.2)'
            },
            focus: {
              label: '',
              value: '#9D00B4'
            }
          },
          'Red 01': {
            val: '#630019',
            'brand-dark': {
              label: 'Red 01',
              value: '#630019'
            },
            'brand-light': {
              label: 'Red 04',
              value: '#FFE6EA'
            },
            'brand-supplementary': {
              label: 'Red 02',
              value: '#D7153A'
            },
            'brand-accent': {
              label: 'Brown 02',
              value: '#B68D5D'
            },
            'brand-accent-light': {
              label: 'Brown 04',
              value: '#EDE3D7'
            },
            'link-colour': {
              label: 'Red 01',
              value: '#630019'
            },
            'visited-link-colour': {
              label: '',
              value: '#9C3D1B'
            },
            'hover-background-colour': {
              label: '',
              value: 'rgba(99, 0, 25, 0.1)'
            },
            'active-background-colour': {
              label: '',
              value: 'rgba(99, 0, 25, 0.2)'
            },
            focus: {
              label: '',
              value: '#B2006E'
            }
          },
          'Orange 01': {
            val: '#941B00',
            'brand-dark': {
              label: 'Orange 01',
              value: '#941B00'
            },
            'brand-light': {
              label: 'Orange 04',
              value: '#FDEDDF'
            },
            'brand-supplementary': {
              label: 'Purple 02',
              value: '#8055F1'
            },
            'brand-accent': {
              label: 'Orange 02',
              value: '#F3631B'
            },
            'brand-accent-light': {
              label: 'Orange 03',
              value: '#FFCE99'
            },
            'link-colour': {
              label: 'Orange 01',
              value: '#941B00'
            },
            'visited-link-colour': {
              label: '',
              value: '#7D4D27'
            },
            'hover-background-colour': {
              label: '',
              value: 'rgba(148, 27, 0, 0.1)'
            },
            'active-background-colour': {
              label: '',
              value: 'rgba(148, 27, 0, 0.2)'
            },
            focus: {
              label: '',
              value: '#E3002A'
            }
          },
          'Brown 01': {
            val: '#523719',
            'brand-dark': {
              label: 'Brown 01',
              value: '#523719'
            },
            'brand-light': {
              label: 'Brown 04',
              value: '#EDE3D7'
            },
            'brand-supplementary': {
              label: 'Purple 02',
              value: '#8055F1'
            },
            'brand-accent': {
              label: 'Teal 02',
              value: '#2E808E'
            },
            'brand-accent-light': {
              label: 'Teal 04',
              value: '#D1EEEA'
            },
            'link-colour': {
              label: 'Brown 01',
              value: '#523719'
            },
            'visited-link-colour': {
              label: '',
              value: '#914132'
            },
            'hover-background-colour': {
              label: '',
              value: 'rgba(82, 55, 25, 0.1)'
            },
            'active-background-colour': {
              label: '',
              value: 'rgba(82, 55, 25, 0.2)'
            },
            focus: {
              label: '',
              value: '#8F3B2B'
            }
          },
          'Yellow 01': {
            val: '#694800',
            'brand-dark': {
              label: 'Yellow 01',
              value: '#694800'
            },
            'brand-light': {
              label: 'Yellow 04',
              value: '#FFF4CF'
            },
            'brand-supplementary': {
              label: 'Blue 02',
              value: '#146CFD'
            },
            'brand-accent': {
              label: 'Yellow 02',
              value: '#FAAF05'
            },
            'brand-accent-light': {
              label: 'Yellow 03',
              value: '#FDE79A'
            },
            'link-colour': {
              label: 'Yellow 01',
              value: '#694800'
            },
            'visited-link-colour': {
              label: '',
              value: '#5B5A16'
            },
            'hover-background-colour': {
              label: '',
              value: 'rgba(105, 72, 0, 0.1)'
            },
            'active-background-colour': {
              label: '',
              value: 'rgba(105, 72, 0, 0.2)'
            },
            focus: {
              label: '',
              value: '#B83B00'
            }
          },
          'Green 01': {
            val: '#004000',
            'brand-dark': {
              label: 'Green 01',
              value: '#004000'
            },
            'brand-light': {
              label: 'Green 04',
              value: '#DBFADF'
            },
            'brand-supplementary': {
              label: 'Blue 02',
              value: '#146CFD'
            },
            'brand-accent': {
              label: 'Green 02',
              value: '#00AA45'
            },
            'brand-accent-light': {
              label: 'Green 03',
              value: '#A8EDB3'
            },
            'link-colour': {
              label: 'Green 01',
              value: '#004000'
            },
            'visited-link-colour': {
              label: '',
              value: '#016740'
            },
            'hover-background-colour': {
              label: '',
              value: 'rgba(0, 64, 0, 0.1)'
            },
            'active-background-colour': {
              label: '',
              value: 'rgba(0, 64, 0, 0.2)'
            },
            focus: {
              label: '',
              value: '#348F00'
            }
          },
          'Teal 01': {
            val: '#0B3F47',
            'brand-dark': {
              label: 'Teal 01',
              value: '#0B3F47'
            },
            'brand-light': {
              label: 'Teal 04',
              value: '#D1EEEA'
            },
            'brand-supplementary': {
              label: 'Teal 02',
              value: '#2E808E'
            },
            'brand-accent': {
              label: 'Fuchsia 02',
              value: '#D912AE'
            },
            'brand-accent-light': {
              label: 'Fuchsia 04',
              value: '#FDDEF2'
            },
            'link-colour': {
              label: 'Teal 01',
              value: '#0B3F47'
            },
            'visited-link-colour': {
              label: '',
              value: '#265E76'
            },
            'hover-background-colour': {
              label: '',
              value: 'rgba(11, 63, 71, 0.1)'
            },
            'active-background-colour': {
              label: '',
              value: 'rgba(11, 63, 71, 0.2)'
            },
            focus: {
              label: '',
              value: '#168B70'
            }
          }
        },
        aboriginal: {
          label: 'Aboriginal Palette',
          'Earth-Red': {
            val: '#950906',
            'brand-dark': {
              label: 'Earth Red',
              value: '#950906'
            },
            'brand-light': {
              label: 'Galah Pink',
              value: '#FDD9D9'
            },
            'brand-supplementary': {
              label: 'Ember Red',
              value: '#E1261C'
            },
            'brand-accent': {
              label: 'Saltwater Blue',
              value: '#0D6791'
            },
            'brand-accent-light': {
              label: 'Coastal Blue',
              value: '#C1E2E8'
            },
            'link-colour': {
              label: 'Earth Red',
              value: '#950906'
            },
            'visited-link-colour': {
              label: 'Bush Plum',
              value: '#472642'
            },
            'hover-background-colour': {
              label: 'Earth Red',
              value: 'rgba(149, 9, 6, 0.1)'
            },
            'active-background-colour': {
              label: 'Earth Red',
              value: 'rgba(149, 9, 6, 0.2)'
            },
            focus: {
              label: 'Ember Red',
              value: '#E1261C'
            }
          },
          'Deep Orange': {
            val: '#882600',
            'brand-dark': {
              label: 'Deep Orange',
              value: '#882600'
            },
            'brand-light': {
              label: 'Sunset Orange',
              value: '#F9D4BE'
            },
            'brand-supplementary': {
              label: 'Saltwater Blue',
              value: '#0D6791'
            },
            'brand-accent': {
              label: 'Orange Ochre',
              value: '#EE6314'
            },
            'brand-accent-light': {
              label: 'Clay Orange',
              value: '#F4AA7D'
            },
            'link-colour': {
              label: 'Deep Orange',
              value: '#882600'
            },
            'visited-link-colour': {
              label: 'Bush Plum',
              value: '#472642'
            },
            'hover-background-colour': {
              label: 'Deep Orange',
              value: 'rgba(136, 38, 0, 0.1)'
            },
            'active-background-colour': {
              label: 'Deep Orange',
              value: 'rgba(136, 38, 0, 0.2)'
            },
            focus: {
              label: 'Orange Ochre',
              value: '#EE6314'
            }
          },
          'Riverbed Brown': {
            val: '#552105',
            'brand-dark': {
              label: 'Riverbed Brown',
              value: '#552105'
            },
            'brand-light': {
              label: 'Macadamia Brown',
              value: '#E9C8B2'
            },
            'brand-supplementary': {
              label: 'Firewood Brown',
              value: '#9E5332'
            },
            'brand-accent': {
              label: 'Saltwater Blue',
              value: '#0D6791'
            },
            'brand-accent-light': {
              label: 'Coastal Blue',
              value: '#C1E2E8'
            },
            'link-colour': {
              label: 'Riverbed Brown',
              value: '#552105'
            },
            'visited-link-colour': {
              label: 'Spirit Lilac',
              value: '#9A5E93'
            },
            'hover-background-colour': {
              label: 'Riverbed Brown',
              value: 'rgba(85, 33, 5, 0.1)'
            },
            'active-background-colour': {
              label: 'Riverbed Brown',
              value: 'rgba(85, 33, 5, 0.2)'
            },
            focus: {
              label: 'Firewood Brown',
              value: '#9E5332'
            }
          },
          'Bush Honey Yellow': {
            val: '#895E00',
            'brand-dark': {
              label: 'Bush Honey Yellow',
              value: '#895E00'
            },
            'brand-light': {
              label: 'Sunbeam Yellow',
              value: '#FFF1C5'
            },
            'brand-supplementary': {
              label: 'Spirit Lilac',
              value: '#9A5E93'
            },
            'brand-accent': {
              label: 'Sandstone Yellow',
              value: '#FEA927'
            },
            'brand-accent-light': {
              label: 'Golden Wattle Yellow',
              value: '#FEE48C'
            },
            'link-colour': {
              label: 'Bush Honey Yellow',
              value: '#895E00'
            },
            'visited-link-colour': {
              label: 'Bush Plum',
              value: '#472642'
            },
            'hover-background-colour': {
              label: 'Bush Honey Yellow',
              value: 'rgba(105, 72, 0, 0.1)'
            },
            'active-background-colour': {
              label: 'Bush Honey Yellow',
              value: 'rgba(105, 72, 0, 0.2)'
            },
            focus: {
              label: 'Saltwater Blue',
              value: '#0D6791'
            }
          },
          'Bushland Green': {
            val: '#215834',
            'brand-dark': {
              label: 'Bushland Green',
              value: '#215834'
            },
            'brand-light': {
              label: 'Saltbush Green',
              value: '#DAE6D1'
            },
            'brand-supplementary': {
              label: 'Firewood Brown',
              value: '#9E5332'
            },
            'brand-accent': {
              label: 'Marshland Lime',
              value: '#78A146'
            },
            'brand-accent-light': {
              label: 'Gumleaf Green',
              value: '#B5CDA4'
            },
            'link-colour': {
              label: 'Bushland Green',
              value: '#215834'
            },
            'visited-link-colour': {
              label: 'Bush Plum',
              value: '#472642'
            },
            'hover-background-colour': {
              label: 'Bushland Green',
              value: 'rgba(33, 88, 52, 0.1)'
            },
            'active-background-colour': {
              label: 'Bushland Green',
              value: 'rgba(33, 88, 52, 0.2)'
            },
            focus: {
              label: 'Marshland Lime',
              value: '#78A146'
            }
          },
          'Billabong Blue': {
            val: '#162953',
            'brand-dark': {
              label: 'Billabong Blue',
              value: '#00405E'
            },
            'brand-light': {
              label: 'Coastal Blue',
              value: '#C1E2E8'
            },
            'brand-supplementary': {
              label: 'Saltwater Blue',
              value: '#0D6791'
            },
            'brand-accent': {
              label: 'Orange Ochre',
              value: '#EE6314'
            },
            'brand-accent-light': {
              label: 'Sunset Orange',
              value: '#F9D4BE'
            },
            'link-colour': {
              label: 'Saltwater Blue',
              value: '#0D6791'
            },
            'visited-link-colour': {
              label: 'Spirit Lilac',
              value: '#9A5E93'
            },
            'hover-background-colour': {
              label: 'Billabong Blue',
              value: 'rgba(0, 64, 94, 0.1)'
            },
            'active-background-colour': {
              label: 'Billabong Blue',
              value: 'rgba(0, 64, 94, 0.2)'
            },
            focus: {
              label: 'Saltwater Blue',
              value: '#0D6791'
            }
          },
          'Bush Plum': {
            val: '#472642',
            'brand-dark': {
              label: 'Bush Plum',
              value: '#472642'
            },
            'brand-light': {
              label: 'Dusk Purple',
              value: '#E4CCE0'
            },
            'brand-supplementary': {
              label: 'Spirit Lilac',
              value: '#9A5E93'
            },
            'brand-accent': {
              label: 'Orange Ochre',
              value: '#EE6314'
            },
            'brand-accent-light': {
              label: 'Sunset Orange',
              value: '#F9D4BE'
            },
            'link-colour': {
              label: 'Bush Plum',
              value: '#472642'
            },
            'visited-link-colour': {
              label: 'Spirit Lilac',
              value: '#9A5E93'
            },
            'hover-background-colour': {
              label: 'Bush Plum',
              value: 'rgba(71, 38, 66, 0.1)'
            },
            'active-background-colour': {
              label: 'Bush Plum',
              value: 'rgba(71, 38, 66, 0.2)'
            },
            focus: {
              label: 'Orange Ochre',
              value: '#EE6314'
            }
          },
          'Charcoal Grey': {
            val: '#2D2D2D',
            'brand-dark': {
              label: 'Charcoal Grey',
              value: '#272727'
            },
            'brand-light': {
              label: 'Smoke Grey',
              value: '#E5E3E0'
            },
            'brand-supplementary': {
              label: 'Bush Honey Yellow',
              value: '#694800'
            },
            'brand-accent': {
              label: 'Sandstone Yellow',
              value: '#FEA927'
            },
            'brand-accent-light': {
              label: 'Sunbeam Yellow',
              value: '#FFF1C5'
            },
            'link-colour': {
              label: 'Charcoal Grey',
              value: '#272727'
            },
            'visited-link-colour': {
              label: 'Bush Plum',
              value: '#472642'
            },
            'hover-background-colour': {
              label: 'Charcoal Grey',
              value: 'rgba(39, 39, 39, 0.1)'
            },
            'active-background-colour': {
              label: 'Charcoal Grey',
              value: 'rgba(39, 39, 39, 0.2)'
            },
            focus: {
              label: 'Sandstone Yellow',
              value: '#FEA927'
            }
          }
        }
      }
    };

    // Partial theming (accent-only, updates brand-accent without affecting others)
    const accentConfig = {
      variables: {
        'brand-accent': '--nsw-brand-accent'
      },
      palettes: {
        'Default Palette': {
          'Blue 02': {
            val: '#146CFD',
            'brand-accent': '#146CFD'
          },
          'Purple 02': {
            val: '#8055F1',
            'brand-accent': '#8055F1'
          },
          'Fuchsia 02': {
            val: '#D912AE',
            'brand-accent': '#D912AE'
          },
          'Red 02': {
            val: '#D7153A',
            'brand-accent': '#D7153A'
          },
          'Orange 02': {
            val: '#F3631B',
            'brand-accent': '#F3631B'
          },
          'Brown 02': {
            val: '#B68D5D',
            'brand-accent': '#B68D5D'
          },
          'Yellow 02': {
            val: '#FAAF05',
            'brand-accent': '#FAAF05'
          },
          'Green 02': {
            val: '#00AA45',
            'brand-accent': '#00AA45'
          },
          'Teal 02': {
            val: '#2E808E',
            'brand-accent': '#2E808E'
          }
        },
        'Aboriginal Palette': {
          'Ember Red': {
            val: '#E1261C',
            'brand-accent': '#E1261C'
          },
          'Orange Ochre': {
            val: '#EE6314',
            'brand-accent': '#EE6314'
          },
          'Firewood Brown': {
            val: '#9E5332',
            'brand-accent': '#9E5332'
          },
          'Sandstone Yellow': {
            val: '#FEA927',
            'brand-accent': '#FEA927'
          },
          'Marshland Lime': {
            val: '#78A146',
            'brand-accent': '#78A146'
          },
          'Saltwater Blue': {
            val: '#0D6791',
            'brand-accent': '#0D6791'
          },
          'Spirit Lilac': {
            val: '#9A5E93',
            'brand-accent': '#9A5E93'
          },
          'Emu Grey': {
            val: '#555555',
            'brand-accent': '#555555'
          }
        }
      }
    };

    // Initialise Color Swatches for full-page and content-only pages
    document.querySelectorAll('.js-color-swatches').forEach(element => {
      new ColorSwatches(element, colorConfig).init();
    });

    // Initialise Color Swatches for partial re-theming (only updates brand-accent)
    document.querySelectorAll('.js-color-swatch[data-mode="accent-only"]').forEach(element => {
      new ColorSwatches(element, accentConfig).init();
    });

    // Initialise Quick Exit (module-based)
    const hasQuickExitAPI = () => !!(window.NSW && window.NSW.QuickExit);

    // Delegated: button demos use data-module + optional data-options JSON
    document.addEventListener('click', evt => {
      const btn = evt.target.closest('button[data-module="quick-exit"]');
      if (!btn) return;
      evt.preventDefault();
      if (!hasQuickExitAPI()) return;
      let opts = {};
      const optAttr = btn.getAttribute('data-options');
      if (optAttr && optAttr.trim()) {
        try {
          opts = JSON.parse(optAttr);
        } catch (err) {
          // Swallow JSON errors so docs don't break if the attribute is malformed
          // eslint-disable-next-line no-console
          console.warn('Invalid data-options for Quick Exit demo:', err);
        }
      }
      window.NSW.QuickExit.init(opts);
    });
    // --- End Quick Exit ---

    initEasyReadAnatomyHeight();
  }
  initDocs();

  // Show icons when Material Icons font is ready
  function handleIconsReady() {
    document.documentElement.classList.remove('material-icons-loading');
    document.documentElement.classList.add('material-icons-loaded');
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(handleIconsReady);
  } else {
    window.addEventListener('load', handleIconsReady);
  }

}));
