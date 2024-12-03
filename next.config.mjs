/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/:path*", // Apply to all routes
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN", // Prevents framing by other origins
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self';", // Modern framing protection
          },
        ],
      },
    ];
  },
};

export default nextConfig;
