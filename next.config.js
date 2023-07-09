/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  // Enables the styled-components SWC transform
  styledComponents: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  i18n
};

module.exports = nextConfig;
