import { createRouter, createWebHashHistory } from 'vue-router';
import ViewPrograms from '../src/modules/programs/components/ViewPrograms.vue';
import Login from '../src/modules/login/components/Login.vue';
import CreateProgram from '../src/modules/programs/components/CreateProgram.vue';
import UpdateProgram from '../src/modules/programs/components/UpdateProgram.vue'
import Programs from '../src/modules/programs/components/Programs.vue';
import Register from '../src/modules/register/components/Register.vue';
import authGuard from './authGuard';



const routes = [
  { path: '/', component: Login},
  { path: '/login', component: Login, name:'login' },
  { path: '/programs', component: Programs, name:'programs', beforeEnter:[authGuard]},
  { path: '/register', component: Register},
  { path: '/view/programs', component: ViewPrograms , name:'home'},
  { path: '/create/program', component: CreateProgram },
  { path: '/:id/update/program', component: UpdateProgram, name: 'Editar'},


]

const router = createRouter({

  history: createWebHashHistory(),
  routes, 
});


export default router;