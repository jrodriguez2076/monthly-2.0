import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button,Row } from 'reactstrap';

import NavSection from './components/NavSection';
import ExpenseTotal from './components/ExpenseTotal';
import ActionButton from './components/ActionButton';
import AddExpense from './components/AddExpense';

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
          <Row>
            <ActionButton Feature="expense"></ActionButton>
            <ActionButton Feature="income"></ActionButton>
            <ActionButton Feature="budget"></ActionButton>
          </Row>
        </div>
        <div className="row">
          <AddExpense></AddExpense>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);