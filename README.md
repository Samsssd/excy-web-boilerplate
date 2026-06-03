# Excy — Next.js Boilerplate

A basic, clean single-page Next.js boilerplate template designed for rapid customization.

## Quick Customization Guide

This template has been built to make changing the branding, typography, and theme colors as easy as possible. Here is exactly where and how to modify them:

---

### 1. How to Change the Title ("Excy")

To change the site name and title metadata, you need to edit two files:

1. **Browser Tab Title & Meta Description**:
   - Open [`app/layout.tsx`](file:///Users/samydjouder/Documents/Builds/excelsior-web-boilerplates/excy-web-boilerplate/app/layout.tsx).
   - Edit the exported `metadata` object (lines 11–14):
     ```typescript
     export const metadata: Metadata = {
       title: "Excy", // Change this to your new app name
       description: "A basic, clean Next.js boilerplate application.",
     };
     ```

2. **On-Page Branding Titles**:
   - Open [`app/page.tsx`](file:///Users/samydjouder/Documents/Builds/excelsior-web-boilerplates/excy-web-boilerplate/app/page.tsx).
   - In the header (around line 7), change the text inside:
     ```tsx
     <span className="text-2xl font-bold tracking-tight text-accent">Excy</span>
     ```
   - In the hero section (around line 29), update:
     ```tsx
     Welcome to <span className="text-accent">Excy</span>
     ```

---

### 2. How to Change the Font

The font configuration utilizes `next/font/google` for optimized font loading.

- Open [`app/layout.tsx`](file:///Users/samydjouder/Documents/Builds/excelsior-web-boilerplates/excy-web-boilerplate/app/layout.tsx).
- Replace the `Inter` import and definition with any other Google Font (such as `Outfit`, `Roboto`, or `Montserrat`):

```typescript
// 1. Change the font name in the import
import { Outfit } from "next/font/google"; 

// 2. Initialize the font and map it to the --font-sans variable
const outfitSans = Outfit({
  variable: "--font-sans", // Keep this variable as --font-sans
  subsets: ["latin"],
});
```

- Finally, update the `className` reference in your `<html>` element:
```tsx
<html
  lang="en"
  className={`${outfitSans.variable} h-full antialiased`}
>
```

---

### 3. How to Change the Colors

The application utilizes CSS variables mapped directly to Tailwind CSS classes. You can change the colors in one central place:

- Open [`app/globals.css`](file:///Users/samydjouder/Documents/Builds/excelsior-web-boilerplates/excy-web-boilerplate/app/globals.css).
- Edit the hex values under `:root` (for Light Theme) and `@media (prefers-color-scheme: dark)` (for Dark Theme):

```css
:root {
  --bg-primary: #ffffff;      /* Main background */
  --bg-secondary: #f4f4f5;    /* Cards & Header background */
  --text-primary: #09090b;    /* Primary typography color */
  --text-secondary: #52525b;  /* Supporting text color */
  --accent-color: #6366f1;    /* Brand accent / button / highlights */
  --border-color: #e4e4e7;    /* Divider / borders */
}
```

These custom colors are mapped into Tailwind CSS classes. You can immediately use them in any component:
- Backgrounds: `bg-bg-primary`, `bg-bg-secondary`, `bg-accent`
- Texts: `text-text-primary`, `text-text-secondary`, `text-accent`
- Borders: `border-border-custom`

---

## Local Development Commands

- Run development server: `npm run dev`
- Build for production: `npm run build`
- Run linter checks: `npm run lint`
