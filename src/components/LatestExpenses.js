import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Jumbotron, Container } from 'reactstrap';

import Pagination from './Pagination';
import ExpenseItem from './ExpenseItem';


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
        fetch(`/api/expenses?month=${d.getMonth()}`)
            .then(data => { return data.json() }
            )
            .then(res => {
                console.log(res);
                setExpenses(res);
            })
    };


    return (
        <div className="container">
            <Jumbotron fluid className="row" style={{ backgroundColor: "#FFE7C9" }}>
                <Container fluid className="col-lg-4 offset-lg-4 text-center">
                    <h1 className="display-3">Expenses</h1>
                    <hr></hr>
                </Container>
            </Jumbotron>
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
                        </tr>
                    </thead>
                    {/* <tbody> */}
                    <ExpenseItem expenses={Expenses}></ExpenseItem>
                    {/* <tr>
                            <div>
                                <th scope="row">2</th>
                                <td>Jose</td>
                                <td>16/12/2019</td>
                                <td>Home</td>
                                <td>ARS 500</td>
                                <td>Dinner</td>
                            </div>
                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>Ana</td>
                            <td>16/12/2019</td>
                            <td>Villa Urquiza</td>
                            <td>ARS 200</td>
                            <td>Uber Ride</td>
                        </tr>
                    </tbody> */}
                </Table>
            </div>
            <div className="row d-flex justify-content-center">
                <Pagination></Pagination>
            </div>
        </div>
    );
}

export default LatestExpenses