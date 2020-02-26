import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Jumbotron, Container } from 'reactstrap';

import Pagination from './Pagination';
import ExpenseItem from './ExpenseItem';
import ActionButton from './ActionButton';



const LatestExpenses = (props) => {
    useEffect(() => getLatestExpenses(), []);

    const [Expenses, setExpenses] = useState([{
        "user": "",
        "date": "",
        "location": "",
        "amount": 0,
        "description": ""
    },]);

    const getLatestExpenses = () => {
        let d = new Date();
        fetch(`/api/expenses?month=${d.getMonth() + 1}`)
            .then(data => { return data.json() }
            )
            .then(res => {
                setExpenses([...res]);
            })
    };


    return (
        <div>
            <Jumbotron fluid className="row" style={{ backgroundColor: "#FFE7C9" }}>
                <Container fluid className="col-lg-4 offset-lg-4 text-center">
                    <h1 className="display-3">Expenses</h1>
                    <hr></hr>
                </Container>
            </Jumbotron>
            <div className="container">
                <div className="row text-center">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Amount</th>
                                <th>Description</th>
                                <th>Budget</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <ExpenseItem expenses={Expenses} updateExpenses={getLatestExpenses}></ExpenseItem>
                    </Table>
                </div>
                <div className="row d-flex justify-content-center">
                    <Pagination></Pagination>
                </div>
            </div>
            <hr style={{ marginTop: "3rem", maxWidth: "50%" }}></hr>
            <div className="d-flex justify-content-center">
                <ActionButton Feature="expense" updateExpenses={getLatestExpenses}></ActionButton>
            </div>
        </div>
    );
}

export default LatestExpenses