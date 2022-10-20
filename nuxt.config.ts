// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  serverHandlers: [
    {
      route: "/api/contact",
      handler: "~/api/contact.js",
    },
  ],
});
