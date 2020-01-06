import React, { useEffect, useState } from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardBody, Jumbotron, Container
} from 'reactstrap';

import BudgetItem from './BudgetItem'

const Budgets = (props) => {

  useEffect(() => getBudgets(), []);

  const [Budgets, setBudgets] = useState([{
    "name": "",
    "amount": 0,
    "description": "",
    "icon": "",
  },]);

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



  return (
    <div className="container">
      <Jumbotron fluid className="row" style={{ backgroundColor: "#CCCA8D" }}>
        <Container fluid className="col-lg-4 offset-lg-4 text-center">
          <h1 className="display-3">Budgets</h1>
          <hr></hr>
        </Container>
      </Jumbotron>
      <BudgetItem budgets={Budgets}></BudgetItem>

      {/* <Card>
          <CardImg className="mx-auto" top width="100%" src="/img/icon/budget.png" style={{ width: "10rem" }} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg className="mx-auto" top width="100%" src="/img/icon/budget.png" style={{ width: "10rem" }} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
        </Card>
      </CardDeck> */}
    </div>
  );
};

export default Budgets;