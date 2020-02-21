import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Row, Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavSection from './components/NavSection';
import ExpenseTotal from './components/ExpenseTotal';
import ActionButton from './components/ActionButton';
import LatestExpenses from './components/LatestExpenses';
import Pagination from './components/Pagination';
import Budgets from './components/Budgets';
import Home from './components/Home';
import Incomes from './components/incomes';
import Users from './components/users';

const title = 'More functions coming soon...';

function App() {
  return (
    <Router>
      <div>
        <NavSection></NavSection>

        <Switch>
          <Route path="/expenses" exact component={LatestExpenses} />
          <Route path="/incomes" exact component={Incomes} />
          <Route path="/budgets" exact component={Budgets} />
          <Route path="/users" exact component={Users} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);