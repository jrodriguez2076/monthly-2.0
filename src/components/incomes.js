import React, { useEffect, useState } from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Jumbotron, Container
} from 'reactstrap';

import IncomeItem from './IncomeItem'
import ActionButton from './ActionButton';

const Incomes = (props) => {

  useEffect(() => getIncomes(), []);

  const [Incomes, setIncomes] = useState([]);

  const getIncomes = () => {
    let d = new Date();
    fetch(`/api/incomes`)
      .then(data => {
        return data.json()
      }
      )
      .then(res => {
        setIncomes([...res]);
        console.log(`RESPONSE:`)
        console.log(res)
      })
  };

  return (
    <div>
      <Jumbotron fluid className="row" style={{ backgroundColor: "#E3F6FF" }}>
        <Container fluid className="col-lg-4 offset-lg-4 text-center">
          <h1 className="display-3">Incomes</h1>
          <hr></hr>
        </Container>
      </Jumbotron>
      <div className="container">
        <IncomeItem incomes={Incomes} updateIncomes={getIncomes}></IncomeItem>
      </div>
      <hr style={{ marginTop: "3rem", maxWidth: "50%" }}></hr>
      <div className="d-flex justify-content-center">
        <ActionButton Feature="income" updateIncomes={getIncomes}></ActionButton>
      </div>
    </div>
  );
};

export default Incomes;