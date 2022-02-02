const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    //sw: '/sw.js',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  }
});

