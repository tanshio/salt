module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/site": { page: "/site" },
      // "/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } },
      // "/p/learn-nextjs": { page: "/post", query: { title: "learn-nextjs" } },
      // "/p/deploy-nextjs": { page: "/post", query: { title: "deploy-nextjs" } }
    }
  },
}
