import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/docs',
        component: () => import('src/pages/Document/Document-Page.vue'),
      },
      {
        path: '/forum',
        component: () => import('pages/Forum/Forum.vue'),
      },
      {
        path: '/twitter',
        component: () => import('src/pages/Twitter/Twitter-Page.vue'),
      },
      {
        path: '/github',
        component: () => import('src/pages/Github/Github-Page.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
