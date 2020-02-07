import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardBody,
    CardGroup,
    CardHeader,
    CardFooter,
    Button
} from 'reactstrap';
import { get } from 'mongoose';

import toCurrency from './submodules/submodule'



const BudgetItem = (props) => {


    const getIconPath = (item) => {
        return "/img/icon/budgets/".concat(item.icon)
    }

    const budgetMapper = props.budgets.map(function (item, i) {

        let spent = 0;

        try {
            props.expenses.forEach(element => {
                if (element.budget == item.name) {
                    spent += element.amount;
                }
            });
        }

        catch (err) {
        }


        return <div key={i} className="col-md-6" style={{ marginBottom: "2rem" }}>
            <Card key={i} >
                <CardImg className="mx-auto" top width="100%" src={getIconPath(item)} style={{ width: "7rem" }} alt="Card image cap" />
                <CardHeader tag="h4">{item.name}</CardHeader>
                <CardBody>
                    <CardText tag="h5"> ARS {toCurrency(item.amount)}</CardText>
                    <CardText>Available: ARS {toCurrency(item.amount - spent)}</CardText>
                    <Button color="success" type="submit">Edit</Button>
                    <Button color="danger" onClick={props.toggle}>Delete</Button>
                </CardBody>
                {/* <CardFooter> */}
                    
                {/* </CardFooter> */}
            </Card>
        </div>
    })

    return (
        <CardGroup className="row text-center">
            {budgetMapper}
        </CardGroup>

    );
}
// style={{maxWidth: "10rem", margin: "auto"}}

export default BudgetItem