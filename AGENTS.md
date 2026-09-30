<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project

Single-page site for [mononoke.dev](https://mononoke.dev). Repo
`git@github.com:mononoke-dev/site.git`, branch `master`, published to GitHub
Pages as a static export (`output: "export"` → `out/`).

## Git

Never run `git commit` or `git push` — the repo owner does that. Reading history,
status, and diff to report what changed is fine.

## Deployment constraints

The custom domain is set in repo settings (Settings → Pages → Custom domain),
so `basePath` is empty in production (`PAGES_BASE_PATH` comes from
`configure-pages`). No `CNAME` file is needed — GitHub Pages ignores it when
publishing from an Actions workflow. There is no server runtime: no API routes,
ISR, server actions, or image optimization.

## Verify

Run `npm run lint` and `npm run build` before reporting done. Check page changes
against a running `next dev` with the `next-dev-loop` skill
(`.agents/skills/next-dev-loop`), using the chrome-devtools MCP for the browser
half of the loop — it already covers DOM, console, network, and screenshots, so
`agent-browser` is not installed and its CLI requirement is skipped.
