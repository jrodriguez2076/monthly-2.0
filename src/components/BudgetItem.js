import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardBody
} from 'reactstrap';


const BudgetItem = (props) => {

    const getIconPath = (item) => {
        return "/img/icon/budgets/".concat(item.icon)
    }

    const budgetMapper = props.budgets.map(function (item, i) {
        return <Card key={i}>
            <CardImg className="mx-auto" top width="100%" src={getIconPath(item)} style={{ width: "10rem" }} alt="Card image cap" />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    })

    return (
        <CardDeck className="row text-center">
            {budgetMapper}
        </CardDeck>

    );
}

export default BudgetItem