import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Home = lazy(() => import(/* webpackChunkName: 'Home' */ '../pages/Home'));
const Boards = lazy(
  () => import(/* webpackChunkName: 'Boards' */ '../pages/Boards'),
);
const Profile = lazy(
  () => import(/* webpackChunkName: 'Profile' */ '../pages/Profile'),
);
const Projects = lazy(
  () => import(/* webpackChunkName: 'Projects' */ '../pages/Projects'),
);

export const routes: Route[] = [
  { to: '/home', path: 'home', component: Home, name: 'Home' },
  { to: '/boards', path: 'boards', component: Boards, name: 'Boards' },
  { to: '/profile', path: 'profile', component: Profile, name: 'Profile' },
  { to: '/projects', path: 'projects', component: Projects, name: 'Projects' },
];
