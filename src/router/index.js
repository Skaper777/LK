import Vue from 'vue'
import VueRouter from 'vue-router'
import VueBreadcrumbs from 'vue-breadcrumbs'

Vue.use(VueRouter)
Vue.use(VueBreadcrumbs, {
  template: '<nav class="breadcrumb" v-if="$breadcrumbs.length"> ' +
    '<router-link class="breadcrumb-item" v-for="(crumb, key) in $breadcrumbs" :to="linkProp(crumb)" :key="key">{{ crumb | crumbText }}</router-link> ' +
    '</nav>'
});

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
          breadcrumb: 'Дашбоард',
        },
        component: () => import('../views/inner/Dashboard-page.vue')
      },
      {
        path: '/mailing',
        meta: {
          breadcrumb: 'Рассылки',
        },
        component: () => import('../views/inner/mailing/Mailing-page.vue'),
        children: [
          {
            path: '',
            name: 'Mailing',
            component: () => import('../views/inner/mailing/Mailing-home.vue')
          },
          {
            path: 'all',
            name: 'all-mailings',
            meta: {
              breadcrumb: 'Все рассылки',
            },
            component: () => import('../views/inner/mailing/All-mailings.vue')
          }
        ]
      },
      {
        path: '/names',
        name: 'Names',
        meta: {
          breadcrumb: 'Имена и домены',
        },
        component: () => import('../views/inner/Names-page.vue')
      },
      {
        path: '/bases',
        name: 'Bases',
        meta: {
          breadcrumb: 'Базы рассылки',
        },
        component: () => import('../views/inner/Bases-page.vue')
      },
      {
        path: '/landings',
        meta: {
          breadcrumb: 'Лендинги',
        },
        component: () => import('../views/inner/landings/Landings-page.vue'),
        children: [
          {
            path: '',
            name: 'Landings',
            component: () => import('../views/inner/landings/Landings-home.vue')
          },
          {
            path: 'new',
            name: 'new-landing',
            meta: {
              breadcrumb: 'Создать лендинг',
            },
            component: () => import('../views/inner/landings/New-landing.vue')
          },
          {
            path: 'edit/:id',
            props: true,
            meta: {
              breadcrumb: 'Изменить лендинг',
            },
            component: () => import('../views/inner/landings/New-landing.vue')
          },
          {
            path: ':id',
            name: 'Landing-item',
            props: true,
            meta: {
              breadcrumb: 'Информация о лендинге',
            },
            component: () => import('../views/inner/landings/Landings-item.vue')
          }
        ]
      },
      {
        path: '/reports',
        meta: {
          breadcrumb: 'Отчёты',
        },
        component: () => import('../views/inner/reports/Reports-page.vue'),
        children: [
          {
            path: '',
            name: 'Reports',
            component: () => import('../views/inner/reports/Reports-home.vue')
          },
          {
            path: ':id',
            name: 'Reports-item',
            props: true,
            meta: {
              breadcrumb: 'Подробный отчёт',
            },
            component: () => import('../views/inner/reports/Reports-item.vue')
          }
        ]
      },
      {
        path: '/finance',
        meta: {
          breadcrumb: 'Финансы',
        },
        component: () => import('../views/inner/finance/Finance-page.vue'),
        children: [
          {
            path: '',
            name: 'Finance',
            component: () => import('../views/inner/finance/Finance-home.vue')
          },
          {
            path: 'fill',
            name: 'Finance-fill',
            props: true,
            meta: {
              breadcrumb: 'Пополнение баланса',
            },
            component: () => import('../views/inner/finance/Finance-fill.vue')
          }
        ]
      },

      {
        path: '/settings',
        redirect: 'settings/profile',
        meta: {
          breadcrumb: 'Настройки'
        },
        component: () => import('../views/inner/settings/Settings-page.vue'),
        children: [
          {
            path: 'profile',
            name: 'Profile',
            meta: {
              breadcrumb: 'Профиль'
            },
            component: () => import('../views/inner/settings/Profile.vue')
          },
          {
            path: 'docs',
            name: 'Docs',
            meta: {
              breadcrumb: 'Документы'
            },
            component: () => import('../views/inner/settings/Docs.vue')
          },
          {
            path: 'tarifs',
            name: 'Tarifs',
            meta: {
              breadcrumb: 'Тарифы'
            },
            component: () => import('../views/inner/settings/Tarifs.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
