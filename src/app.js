import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'reactstrap';

import NavSection from './components/NavSection';
import ExpenseTotal from './components/ExpenseTotal';

const title = 'Welcome to the next step';

function App() {
  return (
    <div>
      <NavSection></NavSection>
      <div className="container">
        {/* <div className="row"> */}
          <ExpenseTotal></ExpenseTotal>
        {/* </div> */}
      </div>
      <h1>{title}</h1>
      <p>Going below for the next changes</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);