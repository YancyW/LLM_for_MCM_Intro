/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Crucial for static HTML export
  trailingSlash: true, // Often helpful for static site hosts
  images: {
    unoptimized: true, // Necessary for static export if using next/image
  },
  // If you were deploying to a subdirectory, you'd set basePath here
  // basePath: "/your-subdirectory",
};

module.exports = nextConfig;

