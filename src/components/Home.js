import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Row, Container } from 'reactstrap';


import ActionButton from './ActionButton';
import ExpenseTotal from './ExpenseTotal';

const title = 'More functions coming soon...';

function Home() {
    return (
        <div>
            <div className="container">
                <ExpenseTotal></ExpenseTotal>
            </div>
            <Container>
                <div >
                    <Row className="d-flex justify-content-center">
                        <ActionButton Feature="expense"></ActionButton>
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