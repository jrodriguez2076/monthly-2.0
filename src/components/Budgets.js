import React, { useEffect, useState } from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardBody, Jumbotron, Container
} from 'reactstrap';

import BudgetItem from './BudgetItem'
import ActionButton from './ActionButton';

const Budgets = (props) => {

  useEffect(() => {
    getBudgets();
    getLatestExpenses();
  }, []);

  const [Budgets, setBudgets] = useState([{
    "name": "",
    "amount": 0,
    "description": "",
    "icon": "",
  },]);

  const [Expenses, setExpenses] = useState()

  const getBudgets = () => {
    let d = new Date();
    fetch(`/api/budgets`)
      .then(data => {
        return data.json()
      }
      )
      .then(res => {
        setBudgets(res);
      })
  };

  const getLatestExpenses = () => {
    let d = new Date();
    fetch(`/api/expenses?month=${d.getMonth() + 1}`)
        .then(data => { return data.json() }
        )
        .then(res => {
            setExpenses(res);
        })
};



  return (
    <div className="container">
      <Jumbotron fluid className="row" style={{ backgroundColor: "#CCCA8D" }}>
        <Container fluid className="col-lg-4 offset-lg-4 text-center">
          <h1 className="display-3">Budgets</h1>
          <hr></hr>
        </Container>
      </Jumbotron>
      <BudgetItem budgets={Budgets} expenses={Expenses}></BudgetItem>
      <hr style={{ marginTop: "3rem", maxWidth: "50%"}}></hr>
      <div className="d-flex justify-content-center">
        <ActionButton Feature="budget"></ActionButton>
      </div>
    </div>
  );
};

export default Budgets;