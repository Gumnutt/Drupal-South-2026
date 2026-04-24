# Rethinking the JavaScript Reflex — Talk Outline

## Act 1 — Setup

### Slide 1 — Title
"Rethinking the JavaScript Reflex"

### Slide 2 — The Reflex
The muscle memory moment. Show a UI requirement and ask: what's your first instinct? Establish the pattern you're about to break. No code yet — just the concept.

### Slide 3 — Why It Matters
Brief, honest framing. JS has real costs: parse time, hydration, layout shift, event listener bloat, accessibility footguns. This isn't anti-JS — it's about deliberate JS.

### Slide 4 — What Changed
CSS used to be genuinely limited for interaction. That's no longer true. Show the audience this is now, not future speculation.

### Slide 5 — Introducing the Component
Reveal the finished filterable card grid first — let it impress. "No JavaScript was harmed in the making of this." Then rewind and build it from scratch.

---

## Act 2 — Building the Component

Each feature follows the same rhythm: the problem → the CSS solution.

### Slide 6 — Container Queries: The Problem
Cards need to reflow based on their container width, not the viewport. Show the JS/resize observer approach.

### Slide 7 — Container Queries: The Solution
`@container` query. The card knows where it lives. Demo it resizing naturally inside different layout contexts.

### Slide 8 — `:has()`: The Problem
Filtering — when a card is selected, siblings need to react. Classically: click handler, loop, toggle classes.

### Slide 9 — `:has()`: The Solution
`:has()` as a state machine. The grid reacts to its own contents with no JS. This one tends to be the crowd favourite.

### Slide 10 — Scroll-Driven Animations: The Problem
Cards should animate in as they enter the viewport. Show the IntersectionObserver boilerplate — it's verbose and most audiences have written it.

### Slide 11 — Scroll-Driven Animations: The Solution
`animation-timeline: view()`. Kill the observer. Show the CSS.

### Slide 12 — View Transitions: The Problem
Clicking a card should transition to a detail view — the kind of thing that used to require a framework or JS-managed class choreography.

### Slide 13 — View Transitions: The Solution
View Transitions API with CSS doing the heavy lifting. Most visually impressive demo — give it room to breathe.

### Slide 14 — Anchor Positioning: The Problem
A quick-info popover that follows its trigger. Mention Popper.js, floating-ui — the audience knows the pain.

### Slide 15 — Anchor Positioning: The Solution
`anchor()` and `position-area`. The popover knows where to go. No JS, no dependency.

### Slide 16 — `@starting-style`: The Problem
The popover appears but snaps in jarringly. Normally you'd add a class on the next frame, wait, remove it. The JS timing dance.

### Slide 17 — `@starting-style`: The Solution
`@starting-style` gives elements a before-state to transition from. Clean entrance, zero JS.

---

## Act 3 — The Payoff

### Slide 18 — The Finished Component
Show it whole. Open DevTools — zero event listeners. Let that sit.

### Slide 19 — The Meta Moment
"This presentation was built using everything I just showed you." Open the source.

### Slide 20 — When to Still Use JavaScript
The honest slide. Complex state, data fetching, user-generated interaction, accessibility edge cases. You're not a zealot — you're making a practical argument.

### Slide 21 — The Reframe
Close on the title again. The goal isn't to eliminate the JavaScript reflex — it's to make it a choice, not a default. That pause before you reach for JS is the whole point.
