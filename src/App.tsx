import { FunctionComponent } from 'preact';
import { Router } from '@reach/router';

import { Route } from '@/routes';

import Home from '@/pages/Home';
import Problem from '@/pages/problem';

const App: FunctionComponent = () => (
  <Router>
    <Home path={Route.HOME} />
    <Problem path={Route.PROBLEM} />
  </Router>
);

export default App;
