const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  images: {
    domains: [
      "links.papareact.com",
      "a0.muscache.com",
      "image.flaticon.com",
      "firebasestorage.googleapis.com",
      "accounts.google.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
    ],
  },

  env: {
    mapbox_key:
      "pk.eyJ1IjoiamF5NzVjaGF1aGFuIiwiYSI6ImNrczFqZjduYTA0NDMydnBmandxZThjNjUifQ.9siLndUHBjD12AuIcbc_fA",
  },
});
