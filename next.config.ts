import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the dev server to accept cross-origin requests from 127.0.0.1 in
  // addition to the default localhost. Values are bare hostnames/wildcard
  // patterns (NOT full URLs), matched against the request's Origin/Referer host.
  // Without this, opening http://127.0.0.1:3003 returns 403 on every static
  // chunk fetch because the browser sends Origin: http://127.0.0.1:3003 and
  // only localhost is whitelisted by default.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
