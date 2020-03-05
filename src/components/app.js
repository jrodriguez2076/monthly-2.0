import React, { useState, useEffect } from 'react';
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
import { SessionContext } from './Context/auth-context';


const title = 'More functions coming soon...';

function App() {

  const startLoginSession = (newUser, newToken) => {
    setSession({
      token: newToken,
      user: newUser
    })
  }

  useEffect(() => {
    sessionStorage.setItem('email',Session.user);
    sessionStorage.setItem('token',Session.token);
  })

  const [Session, setSession] = useState(
    {
      user: 'tu',
      token: '',
    })

  return (
    <SessionContext.Provider value={{ value: Session, startLoginSession }}>
      <Router>
        <div style={{ height: "100%" }}>
          <Switch>
            <Route path="/login" exact render={props => <Login {...props}></Login>} />
            <Route component={DefaultContainer} />
          </Switch>
        </div>
      </Router>
    </SessionContext.Provider>
  )
}

const DefaultContainer = () => {
  return (<div>
    <NavSection></NavSection>
    <Route path="/expenses" exact component={LatestExpenses} />
    <Route path="/incomes" exact component={Incomes} />
    <Route path="/budgets" exact component={Budgets} />
    <Route path="/users" exact component={Users} />
    <Route path="/login" exact component={Login} />
    <Route path="/" exact component={Home} />
  </div>)
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);