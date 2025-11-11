## Coloring with shadcn/ui

Use the shadcn/ui design tokens to express hierarchy within nested containers. Pick the token that communicates separation while keeping contrast comfortable for most themes.

- `bg-card`: Base surface for the card itself.
- `bg-muted`: Preferred for content blocks within a card when you want a soft separation, such as prompt inputs, quoted text, or secondary information. Pair with `text-muted-foreground`.
- `bg-secondary`: Similar intent to `bg-muted`; use when the design system expects a slightly stronger contrast in the same role.
- `bg-accent`: Reserve for interactive elements or sections that must stand out within the card. Use sparingly.
- `bg-background`: Helpful for nested sections that should appear inset or recessed relative to their parent container.

### Recommended pattern

```
Card → `bg-card`
Primary content inside the card → `bg-muted`
Nested content inside that section → `bg-background` or back to `bg-card` depending on depth and desired contrast
```

Use these tokens consistently to maintain visual rhythm while preserving accessibility in both light and dark themes.

