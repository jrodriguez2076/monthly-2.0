import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'reactstrap';


const ExpenseTotal = (props) => {
    return (
        // <div className="row">
            <Jumbotron fluid className="row">
                <Container fluid className="col-lg-4 offset-lg-4 text-center">
                    <h1 className="display-3">$ 999.999</h1>
                    <p>Have been spent this month</p>
                    <hr></hr>
                    <p> this is above/below the average spent during the previous months</p>
                </Container>
            </Jumbotron>
        // </div>
    )
}

export default ExpenseTotal;