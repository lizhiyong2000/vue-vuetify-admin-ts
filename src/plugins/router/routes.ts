export const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/dashboard.vue'),
      },
      {
        path: 'account-settings',
        component: () => import('@/views/app-pages/account-settings.vue'),
      },
      {
        path: 'typography',
        component: () => import('@/views/ui-elements/typography.vue'),
      },
      {
        path: 'icons',
        component: () => import('@/views/ui-elements/icons.vue'),
      },
      {
        path: 'cards',
        component: () => import('@/views/ui-elements/cards.vue'),
      },
      {
        path: 'tables',
        component: () => import('@/views/tables/tables.vue'),
      },
      {
        path: 'charts/echarts',
        component: () => import('@/views/charts/echarts.vue'),
      },
      {
        path: 'form-layouts',
        component: () => import('@/views/forms/form-layouts.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/views/app-pages/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/views/app-pages/register.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/app-pages/[...error].vue'),
      },
    ],
  },
]
