---
allowed-tools: Bash(npm run dev:*)
description: Start the Vite development server with hot reload
---

# Start Development Server

Start the Vite development server for local development:

1. Run `npm run dev` to start the server
2. The server will start on `http://localhost:8080` (IPv6 enabled)
3. Hot Module Replacement (HMR) is enabled for instant updates
4. The server uses SWC for fast compilation

**Features available in dev mode**:
- Automatic hot reload on file changes
- Source maps for debugging
- Lovable tagger integration for component tracking
- Fast React refresh

Inform the user when the server is running and provide the URL.
