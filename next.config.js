/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const withOffline = require("next-offline");

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

// Gabungkan PWA dan Offline
module.exports = withOffline(
  withPWA({
    ...nextConfig,
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
    },
  })
);
