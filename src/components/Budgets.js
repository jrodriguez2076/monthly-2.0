import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Jumbotron, Container
} from 'reactstrap';

const Budgets = (props) => {
  return (
    <div className="container">
      <Jumbotron fluid className="row" style={{backgroundColor:"#CCCA8D"}}>
        <Container fluid className="col-lg-4 offset-lg-4 text-center">
          <h1 className="display-3">Budgets</h1>
          <hr></hr>
        </Container>
      </Jumbotron>
      <CardDeck className="row text-center">
        <Card>
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
        <Card>
          <CardImg className="mx-auto" top width="100%" src="/img/icon/budget.png" style={{ width: "10rem" }} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Budgets;