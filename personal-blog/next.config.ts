import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/blog",
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  }
};

export default nextConfig;
