/** @type {import('next').NextConfig} */
const nextConfig = {
  esmExternals: "loose",
  serverComponentsExternalPackages: ["mongoose"]
};

export default nextConfig;
