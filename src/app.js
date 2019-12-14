import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'reactstrap';

import NavSection from './components/NavSection';
import ExpenseTotal from './components/ExpenseTotal';
import ActionButton from './components/ActionButton'

const title = 'More functions coming soon...';

function App() {
  return (
    <div>
      <NavSection></NavSection>
      <div className="container">
        <ExpenseTotal></ExpenseTotal>
      </div>
      <div className="container">
        <div >
          <ActionButton></ActionButton>
        </div>
        <div className="row">
          <h1 className="col-lg-4 offset-lg-4">{title}</h1>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);