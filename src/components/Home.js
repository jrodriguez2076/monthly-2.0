import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Row, Container, Spinner } from 'reactstrap';


import ActionButton from './ActionButton';
import ExpenseTotal from './ExpenseTotal';
import toCurrency from './submodules/submodule';

const Home = (props) => {
    useEffect(() => changeTotalExpense(), []);

    const [Amount, setAmount] = useState(0);



    const changeTotalExpense = () => {
        let d = new Date();
        fetch(`/api/expenses?month=${d.getMonth() + 1}`)
            .then(data => { return data.json() }
            )
            .then(res => {
                console.log(res)
                let total = 0;
                for (const el of res) {
                    console.log(`Adding expense: ${el.amount}`)
                    total += el.amount
                    console.log(total)
                }
                setAmount(total)
            })

    };

    // const toCurrency = (number) => {
    //     return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    // }

    return (
        <div>
            <div className="container">
                <ExpenseTotal totalMonthlyAmount={toCurrency(Amount)} currency="ARS"></ExpenseTotal>
            </div>
            <Container>
                <div >
                    <Row className="d-flex justify-content-center">
                        <ActionButton Feature="expense" fromHome={true}></ActionButton>
                        <ActionButton Feature="income" fromHome={true}></ActionButton>
                        <ActionButton Feature="budget" fromHome={true}></ActionButton>
                    </Row>
                </div>
                <div className="row">
                    <Spinner color="primary" size="lg"/>
                </div>
            </Container>
        </div>
    )
}

export default Home