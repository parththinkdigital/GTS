---
name: Editorial Footer Creator
description: Guidelines and code templates for creating premium, high-contrast, editorial-style footers with advanced typography and structures.
---

# Editorial Footer Design System

This skill defines the guidelines and structural patterns for building premium, editorial-style footers. Editorial footers draw inspiration from print journalism, high-end magazines, and modern typography-driven SaaS designs.

## Core Visual Pillars

### 1. Striking Typography
- **Headings**: Use heavy, high-contrast typography (e.g., `Franklin Gothic`, `League Gothic`, or extra-bold `Inter`) to establish strong hierarchy.
- **Capitalization**: Headers should be in clean uppercase with a wide letter spacing (`0.15em` to `0.2em`) or tight, extra-bold lowercase.
- **Link Sizing**: Navigation links should be small (`0.85rem` to `0.9rem`) with clean, medium weight to contrast against massive headers.

### 2. Spacious & Uncluttered Layouts
- **Large Margins**: Implement generous padding (`120px` to `160px` top and bottom) to let the typography breathe.
- **Structured Grids**: Use asymmetric grids (e.g., `1.5fr` for brand and `2.5fr` for navigation columns) to create editorial balance.
- **Intentional Whitespace**: Utilize blank space for interactive showcases (like vector grids, canvas elements, or quotes) instead of crowding links.

### 3. High-Contrast Color Schemes
- **Monochrome Foundation**: Keep backgrounds solid white or extra light gray, and text elements in solid dark slate, navy, or black.
- **Accent Sparingly**: Use a single brand color (like orange or blue) for subtle highlights (active state markers, social hover offsets).

## Layout Template

```html
<footer class="editorial-footer">
  <div class="footer-grid">
    <!-- Brand Pillar -->
    <div class="brand-pillar">
      <img src="/logo.png" class="logo" />
      <p class="description">...</p>
      <div class="interactive-area">...</div>
    </div>
    <!-- Nav Grid -->
    <div class="nav-grid">
      <div class="nav-col">
        <h5>...</h5>
        <a href="...">...</a>
      </div>
    </div>
  </div>
</footer>
```
