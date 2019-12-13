import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'reactstrap';

import NavSection from './components/NavSection';
import ExpenseTotal from './components/ExpenseTotal';

const title = 'More functions coming soon...';

function App() {
  return (
    <div>
      <NavSection></NavSection>
      <div className="container">
        {/* <div className="row"> */}
        <ExpenseTotal></ExpenseTotal>
        {/* </div> */}
      </div>
      <div className="row">
        <h1 className="col-sm-4 offset-sm-4">{title}</h1>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);