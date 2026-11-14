# AETERIUM — QA checklist

This checklist separates checks completed from checks that still require a real browser and device.

## Automated/static checks

- [x] Inline JavaScript parses successfully.
- [x] HTML IDs are unique.
- [x] Every in-page `href="#…"` points to an existing ID.
- [x] Every referenced CSS custom property has a definition.
- [x] Reduced-motion CSS is present.
- [x] Keyboard skip link points to the main content.
- [x] Orbit menu exposes its expanded state to assistive technology.
- [x] Orbit menu traps Tab focus while open and restores focus on Escape/backdrop close.
- [x] Theme preference is read from and written to local storage.
- [x] WebGL context-loss fallback handler is present.
- [x] Three.js is loaded with `defer` to avoid blocking HTML parsing.
- [x] WebGL animation pauses when the hero leaves the viewport or the tab is hidden, then resumes when visible.
- [x] Browser theme-color metadata follows the saved light/dark theme on initial load and theme changes.
- [x] Narrow-screen hero typography has responsive sizing and safe word wrapping.
- [x] Header icon controls meet a 44px minimum touch target.
- [x] Compact 320–380px layouts simplify the hero footer to prevent clipping.
- [x] Orbit navigation is exposed as a labelled modal dialog.
- [x] Keyboard focus remains inside the orbit dialog, including unexpected focus escape.
- [x] Primary navigation announces the currently active section with `aria-current="location"`.
- [x] Non-interactive collection cards no longer advertise a pointer cursor.
- [x] Contact field validates either a basic email address or a plausible phone number before showing the demo confirmation.
- [x] Demo form confirmation no longer implies that an enquiry was actually delivered.

## Manual browser checks — pending

### Desktop
- [ ] Open at 1440×900 and 1920×1080; inspect hero composition and section spacing.
- [ ] Check horizontal navigation and active-section indicator.
- [ ] Open the orbit menu; verify focus starts on the first item.
- [ ] Verify Tab and Shift+Tab stay inside the orbit menu.
- [ ] Close with Escape and backdrop; verify focus returns to the menu button.
- [ ] Navigate via each menu item and verify the correct section is reached.
- [ ] Switch dark/light theme, reload, and verify the selected theme persists.

### Tablet and mobile
- [ ] Check at 1024px, 768px, 390px, and 320px viewport widths.
- [ ] Verify no horizontal page overflow.
- [ ] Verify header controls remain visible and tappable.
- [ ] Verify hero heading, CTA buttons, cards, process steps, and form do not overlap.
- [ ] Open and operate the orbit menu using touch and keyboard.
- [ ] Check portrait and landscape orientation.

### WebGL and resilience
- [ ] Confirm the procedural shader renders without console errors.
- [ ] Confirm scene transitions remain smooth for at least 60 seconds.
- [ ] Test with WebGL disabled or unavailable; CSS fallback must remain visible.
- [ ] Simulate WebGL context loss; fallback must appear.
- [ ] Block the Three.js CDN; the rest of the page must remain usable.
- [ ] Test with reduced motion enabled; animated WebGL should remain disabled.

### Form and accessibility
- [ ] Submit the empty form; required-field validation should prevent submission.
- [ ] Submit valid-looking values; verify the demo notice appears and no network request is sent.
- [ ] Complete a keyboard-only pass through navigation, CTAs, and form fields.
- [ ] Check contrast and focus indicators in both themes.
- [ ] Run Lighthouse accessibility, performance, and SEO audits.

## Known limitations

- The contact form is intentionally a front-end demo. It does not deliver, store, or transmit enquiries.
- The site loads Three.js and web fonts from external CDNs; a network connection is required for those enhancements.
- No real-device or browser visual test is claimed by this checklist. Mark manual items only after executing them.
