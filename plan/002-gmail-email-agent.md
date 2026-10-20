# 002 - Gmail email agent

## Goal
A web app where I sign in with my Gmail account and ask questions in plain language
(for example: "How much did I spend on Amazon last month?", "Who emailed me about the
apartment?", "List all flight bookings this year"). The agent searches my emails and
answers with the data I asked for.

## How it works (proposed)
1. **Sign in with Google** - OAuth with read-only Gmail access (`gmail.readonly`).
   The app can never send, delete or change emails.
2. **Ask a question** - a chat-style screen in React.
3. **Agent loop** - an AI model (LLM) gets my question plus tools it can call:
   - `searchEmails(query)` - uses Gmail search syntax (`from:amazon after:2026/09/01`)
   - `readEmail(id)` - gets the full content of one email
   The model decides what to search, reads the relevant emails, and repeats until it
   can answer.
4. **Answer** - shown in the chat, with links to the source emails so I can check it.

## Architecture (proposed)
- `frontend/` (this folder) - React UI: sign-in, chat screen, answer view.
- `backend/` (new, next to `frontend/`) - small Node server that:
  - keeps the AI API key secret (it must never be in the browser)
  - handles the Google OAuth token
  - runs the agent loop and calls the Gmail API
- Services follow the `serviceLayer` skill: `src/services/*.service.*`, pure functions.

## Steps
1. Create a Google Cloud project, enable the Gmail API, create OAuth credentials
   (I will guide you, this part is done in the browser by you).
2. Set up `backend/` with Gmail sign-in and a test endpoint that lists my last 10 emails.
3. Add the agent loop with the two tools.
4. Build the chat UI in the frontend and connect it to the backend.
5. Polish: loading states, errors, source email links, chat history in localStorage.

## Questions (please answer before I start)
1. **AI model:** Which AI should power the agent? I recommend Claude (Anthropic API).
   Do you already have an API key for Claude or another provider?
2. **Language:** The `serviceLayer` skill uses TypeScript, but the project is plain
   JavaScript. Convert to TypeScript now (recommended, it matches the skill), or stay
   with JavaScript and update the skill?
3. **Backend:** OK to add a `backend/` folder next to `frontend/` (Node + Express)?
4. **Users:** Is this only for you, or will other people sign in too? (Only you is much
   simpler: Google lets you skip their app review while it's in "testing" mode.)
5. **Examples:** What are 3-5 real questions you want to ask it? This decides what the
   agent needs to be good at (money/receipts, people, dates, attachments...).
6. **Read-only:** Should it stay read-only, or do you later want actions like drafting
   replies or labeling emails?
