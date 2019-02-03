// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import React from 'react'
import loadable from 'react-loadable'

import {
  WelcomePage,
  CounterPage,
  // RedditListPage,
  Layout,
} from './';

const RedditListPage = loadable({
  loader: () => import('./RedditListPage'),
  loading: ()=> <div>Loading...</div>
})
export default {
  path: 'examples',
  name: 'Examples',
  component: Layout,
  childRoutes: [
    { path: '', name: 'Welcome page', component: WelcomePage },
    { path: 'counter', name: 'Counter page', component: CounterPage },
    { path: 'reddit', name: 'Reddit list page', component: RedditListPage },
  ],
};
