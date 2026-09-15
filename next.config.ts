import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/jewel-welding",
        destination: "/",
        permanent: true,
      },
      {
        source: "/work/fabrication-qc",
        destination: "/",
        permanent: true,
      },
      {
        source: "/fabrication",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
