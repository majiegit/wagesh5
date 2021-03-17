import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      name: 'index',
    },
  },
  {
    name: 'index',
    path: '/index',
    component: () => import('./view/index'),
    meta: {
      title: '应用中心',
    },
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车',
    },
  },
  {
    name: 'goods',
    path: '/goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品详情',
    },
  },
    {
        name: 'wagens',
        path: '/wagens',
        component: () => import('./view/wagens'),
        meta: {
            title: '工资查询',
        },
    },
    {
        name: 'summarize',
        path: '/summarize',
        component: () => import('./view/summarize'),
        meta: {
            title: '年度汇总',
        },
    },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };
