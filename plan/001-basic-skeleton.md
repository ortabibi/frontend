# Plan: Basic Skeleton

## Overview
Replace the Vite starter with a basic, empty app skeleton in JavaScript.
Just pages, routing and folders - no features yet.

## Implementation Steps

### 1. Remove Starter Code
Delete the Vite demo: `src/App.css`, `src/assets/hero.png`, `src/assets/react.svg`,
`src/assets/vite.svg`, `public/icons.svg`, and the counter/logos in `App.jsx`.

### 2. Create Folders
```
src/
  main.jsx
  App.jsx
  pages/
    HomePage.jsx
    ChatPage.jsx
    AboutPage.jsx
  cmps/
    AppHeader.jsx
  services/
  assets/
    styles/
      main.css
```

### 3. Add Routing
Install `react-router`. In `App.jsx`: `/` -> HomePage, `/chat` -> ChatPage, `/about` -> AboutPage.

### 4. Add About Page
`AboutPage` with a short description of the app (what it does, that it only reads Gmail).

### 5. Add Header
`AppHeader` with the app name and links to Home, Chat and About. Shown on every page.

### 6. Basic Styles
`main.css` with a simple reset, font, and color variables. Replaces `src/index.css`.

### 7. Verify
`npm run lint` and `npm run build` pass. All three pages open and the header links work.

---

## Questions

Before proceeding, please answer:

1. **App name**: What name should appear in the header and browser tab?
   v- Email Agent
   - Other (write it)


2. **Components folder**: What should it be called?
   v- `src/cmps/`
   - `src/components/`


3. **State**: Add Zustand now, or later when needed?
   - Now
   - Later
   add redux


4. **Language**: Which UI language?
   v- English
   - Hebrew (right-to-left)


5. **About content**: What should the About page say?
 v  - Short app description (I'll write it)
   - Your own text (write it here)


6. **Git**: Commit and push to GitHub when done?
 v  - Yes
   - No

