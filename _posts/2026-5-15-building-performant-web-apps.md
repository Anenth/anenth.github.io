---
layout: post
title: Building Performant Web Apps — A Practical Guide
---

Performance isn't just about making things fast — it's about making things feel instant. After years of optimizing web applications at scale, here are the patterns and practices that consistently deliver results.

## Core Web Vitals: The Metrics That Matter

Google's Core Web Vitals give us three focused metrics:

- **LCP (Largest Contentful Paint)** — How quickly does the main content appear? Target: under 2.5s.
- **INP (Interaction to Next Paint)** — How responsive is the page to user input? Target: under 200ms.
- **CLS (Cumulative Layout Shift)** — Does the layout jump around? Target: under 0.1.

These aren't arbitrary numbers — they correlate directly with user satisfaction and business metrics.

## Rendering Strategies

Choosing the right rendering strategy is the highest-leverage performance decision you'll make:

**Static Generation (SSG)** — Pre-render at build time. Best for content that doesn't change per-user. Fastest possible TTFB.

**Server-Side Rendering (SSR)** — Render on each request. Best for personalized or frequently-updated content. Good TTFB with caching.

**Streaming SSR** — Send HTML progressively as it's generated. Best of both worlds: fast first byte with dynamic content.

**Client-Side Rendering (CSR)** — Render in the browser. Appropriate for authenticated dashboards where SEO doesn't matter.

The key insight: **most pages benefit from a hybrid approach**. Static shell with streaming dynamic content gives you the best UX.

## The Bundle Size Problem

JavaScript is the most expensive resource on the web, byte-for-byte. Here's how to keep it under control:

### Code Splitting

Split your bundle along route boundaries and lazy-load non-critical paths:

```javascript
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));
```

### Tree Shaking

Import only what you need. The difference between `import _ from 'lodash'` and `import { debounce } from 'lodash-es'` can be hundreds of kilobytes.

### Bundle Analysis

Regularly audit your bundle. Tools like `bundlephobia` and webpack-bundle-analyzer reveal surprising bloat. I've seen single imports add 200KB+ because of transitive dependencies.

## Image Optimization

Images are typically the largest payload on any page. Modern best practices:

1. **Use modern formats** — WebP and AVIF offer 30-50% size reduction over JPEG/PNG.
2. **Responsive images** — Serve appropriately-sized images with `srcset` and `sizes`.
3. **Lazy loading** — Use `loading="lazy"` for below-the-fold images.
4. **Explicit dimensions** — Always set `width` and `height` to prevent layout shift.
5. **CDN with transforms** — Let your CDN handle format negotiation and resizing.

## Font Performance

Web fonts are a common performance bottleneck:

```css
/* Prevent FOIT (Flash of Invisible Text) */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap;
}
```

Better yet, use system fonts. They're free, instant, and look native on every platform:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

## Caching Strategies

A good caching strategy can eliminate most network requests:

- **Static assets** (JS, CSS, images): Cache forever with content-hashed filenames.
- **HTML**: Short cache (or no-cache) with `stale-while-revalidate`.
- **API responses**: Cache based on data freshness requirements.
- **Service Worker**: Offline-first for repeat visitors.

## Perceived Performance

Sometimes the best optimization is making things *feel* faster:

- **Skeleton screens** over spinners — show content shape immediately.
- **Optimistic updates** — update UI before server confirms.
- **Prefetching** — load the next likely page on hover/focus.
- **Instant navigation** — use View Transitions API for smooth page changes.

## Measuring What Matters

You can't improve what you don't measure. Set up Real User Monitoring (RUM) to track:

- Performance metrics in the field (not just lab)
- Performance by device type, connection speed, and geography
- Regression detection in CI/CD

Lab tools like Lighthouse are great for development, but field data tells the real story.

## The Performance Budget

Set explicit budgets and enforce them:

- Total JavaScript: under 200KB compressed
- LCP: under 2.5 seconds on 4G
- Time to Interactive: under 3.5 seconds

Automate budget checks in your CI pipeline. Performance is easy to lose and hard to regain.

> The fastest code is code that never runs. The fastest request is the one never made.
