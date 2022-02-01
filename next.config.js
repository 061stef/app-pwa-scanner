const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    //dest: "public",
    sw: '/sw.js',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development"
  },
  
});

