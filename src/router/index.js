import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    beforeEnter: function(to, from, next) {
      // if (database.user.isLogged()) {
      //   next('/app')
      // } else {
      next();
      // }
    },
    children: [
      {
        path: '',
        name: 'home',
        meta: {
          title: 'home'
        },
        component: () => import('@/views/HomeLogin.vue')
      },
      {
        path: 'registration',
        name: 'registration',
        meta: {
          title: 'registration'
        },
        component: () => import('@/views/HomeRegistration.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'notFound',
    meta: {
      title: 'notFound'
    },
    component: () => import('@/views/NotFound')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
