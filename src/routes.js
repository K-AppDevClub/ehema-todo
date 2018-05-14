import HomeBase from './pages/home/Base';
import PostsPage from './pages/posts/PostsPage';
import TestPage from './pages/test/Test';

import CreatePlan from './pages/create-plan/CreatePlan';
import Recommend from './pages/recommend/Recommend';
import DetailPlan from './pages/detail-plan/DetailPlan';
import RegionPage from './pages/region/Region';
import UserPage from './pages/user-page/UserPage';

import TodoPage from './pages/todo-home/Todo';
import TodoDetailPage from './pages/todo-detail/TodoDetail';
import TodoRegisterPage from './pages/todo-register/TodoRegister';


export default [
  { name: 'home', path: '/', component: HomeBase },
  { name: 'posts', path: '/posts', component: PostsPage },
  { name: 'test', path: '/test', component: TestPage },
  { name: 'create-plan', path: '/create-plan', component: CreatePlan },
  { name: 'recommend', path: '/recommend', component: Recommend },
  { name: 'detail-plan', path: '/detail-plan', component: DetailPlan },
  { name: 'region', path: '/region', component: RegionPage },
  { name: 'userPage', path: '/user-page', component: UserPage },
  { name: 'todo', path: '/todo', component: TodoPage },
  { name: 'todo-detail', path: '/todo-detail', component: TodoDetailPage },
  { name: 'todo-register', path: '/todo-register', component: TodoRegisterPage },
  
];
