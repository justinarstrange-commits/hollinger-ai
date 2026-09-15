import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/jewel-welding",
        destination: "/work/fabrication-qc",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
