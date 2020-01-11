import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardBody,
    CardGroup,
    CardHeader
} from 'reactstrap';


const BudgetItem = (props) => {

    const getIconPath = (item) => {
        return "/img/icon/budgets/".concat(item.icon)
    }

    const budgetMapper = props.budgets.map(function (item, i) {
        return <Card key={i} >
            <CardImg className="mx-auto" top width="100%" src={getIconPath(item)} style={{ width: "7rem" }} alt="Card image cap" />
            <CardHeader tag="h4">{item.name}</CardHeader>
            <CardBody>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    })

    return (
        <CardGroup className="text-center">
            {budgetMapper}
        </CardGroup>

    );
}
// style={{maxWidth: "10rem", margin: "auto"}}

export default BudgetItem