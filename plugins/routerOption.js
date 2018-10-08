export default async ({ app }) => {
  app.router.afterEach((to, from) => {
    // ページ遷移ごとに行いたい処理
    console.log('router', to, from)
  });
};
