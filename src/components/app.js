import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Row, Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavSection from './NavSection';
import ExpenseTotal from './ExpenseTotal';
import ActionButton from './ActionButton';
import LatestExpenses from './LatestExpenses';
import Pagination from './Pagination';
import Budgets from './Budgets';
import Home from './Home';
import Incomes from './incomes';
import Users from './users';
import Login from './login';

const title = 'More functions coming soon...';

function App() {
  return (
    <Router>
      <div style={{height:"100%"}}>
        <NavSection></NavSection>

        <Switch>
          <Route path="/expenses" exact component={LatestExpenses} />
          <Route path="/incomes" exact component={Incomes} />
          <Route path="/budgets" exact component={Budgets} />
          <Route path="/users" exact component={Users} />
          <Route path="/login" exact component={Login} />
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