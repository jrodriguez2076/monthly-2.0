import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Row, Container } from 'reactstrap';


import ActionButton from './ActionButton';
import ExpenseTotal from './ExpenseTotal';

const Home = (props) => {
    useEffect(() => changeTotalExpense(), []);

    const [Amount, setAmount] = useState(0);

    

    const changeTotalExpense = () => {
        let d = new Date();
        fetch(`/api/expenses?month=${d.getMonth()}`)
            .then(data => { return data.json() }
            )
            .then(res => {
                console.log(res)
                let total = 0;
                for (const el of res){
                    total += el.amount
                    console.log(total)
                }
                setAmount(total)
            })
        
    };

    const toCurrency = (number) => {
        return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    }

    return (
        <div>
            <div className="container">
                <ExpenseTotal totalMonthlyAmount={toCurrency(Amount)} currency="ARS"></ExpenseTotal>
            </div>
            <Container>
                <div >
                    <Row className="d-flex justify-content-center">
                        <ActionButton Feature="expense" HandleNewExpense=""></ActionButton>
                        <ActionButton Feature="income"></ActionButton>
                        <ActionButton Feature="budget"></ActionButton>
                    </Row>
                </div>
                <div className="row">
                </div>
            </Container>
        </div>
    )
}

export default Home