/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allows the placeholder SVGs in /public/images to be served through next/image.
    // When you swap in real photos (JPG / WebP / AVIF), you can safely remove this block.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // If you later load images from an external host (CDN, CMS), add it here:
    // remotePatterns: [{ protocol: 'https', hostname: 'images.example.com' }],
  },
};

export default nextConfig;
