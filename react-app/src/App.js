import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import TimerLogs from './components/TimerLogs';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
            <Route exact path='/' component={TimerLogs} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
