/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

module.exports = nextConfig;
