import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Row, Container } from 'reactstrap';


import ActionButton from './ActionButton';
import ExpenseTotal from './ExpenseTotal';

const title = 'More functions coming soon...';

const Home = (props) => {
    useEffect(() => changeTotalExpense(), []);

    const [Amount, setAmount] = useState(0);

    const changeTotalExpense = () => {  
        setAmount(10000)
    };
    
    const toCurrency = (number)=> {
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
                        <ActionButton Feature="expense"  HandleNewExpense=""></ActionButton>
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