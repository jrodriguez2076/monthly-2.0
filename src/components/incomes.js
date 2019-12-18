import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const Incomes = (props) => {
  return (
    <CardDeck className="text-center">
      <Card>
        <CardImg className="mx-auto" top width="100%" src="/img/icon/income.png" style={{width:"10rem"}} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg className="mx-auto" top width="100%" src="/img/icon/income.png" style={{width:"10rem"}} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg className="mx-auto" top width="100%" src="/img/icon/income.png" style={{width:"10rem"}} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Incomes;