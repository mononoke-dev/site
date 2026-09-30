import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to `out/`,
  // which is what GitHub Pages can serve. No Node.js server involved.
  output: "export",

  // Set by the Pages workflow from the `configure-pages` action output.
  // `/repo-name` for a project page, empty string for a custom domain.
  // Leave unset locally so `next dev` serves from the root.
  basePath: process.env.PAGES_BASE_PATH ?? "",

  // GitHub Pages resolves `/about/` to `about/index.html` reliably,
  // while `/about` relies on extension-less serving behaviour.
  trailingSlash: true,

  images: {
    // No image optimizer on a static host, so serve the original files.
    unoptimized: true,
  },
};

export default nextConfig;