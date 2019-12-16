import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ripples from 'react-ripples';


import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const ActionButton = (props) => {
    return (
        <Row>
            <Col lg="4">
                <div id="quick-access" className="text-center" >
                    <Ripples className="text-center" >
                        <Card body className="text-center" style={{ width: "20rem" }} onClick={()=>console.log("Clicked Expenses")}>
                            <div>
                                <CardImg className="mx-auto" top width="100%" src="/img/icon/money_12.png" alt="Add Budget" style={{ maxWidth: "6rem" }} />
                                <CardText  >Add new expense</CardText>
                            </div>
                        </Card>
                    </Ripples>
                </div>
            </Col>
            <Col lg="4">
                <div id="quick-access" className="text-center">
                    <Ripples className="text-center" >
                        <Card body className="text-center" style={{ width: "20rem" }} onClick={()=>console.log("Clicked Incomes")}>
                            <div>
                                <CardImg className="mx-auto" top width="100%" src="/img/icon/money_14.png" alt="Add Budget" style={{ maxWidth: "6rem" }} />
                                <CardText  >Add new income</CardText>
                            </div>
                        </Card>
                    </Ripples>
                </div>
            </Col>
            <Col lg="4">
                <div id="quick-access" className="text-center">
                    <Ripples className="text-center" >
                        <Card body className="text-center" style={{ width: "20rem" }} onClick={()=>console.log("Clicked Goals")}>
                            <div>
                                <CardImg className="mx-auto" top width="100%" src="/img/icon/money_10.png" alt="Add Budget" style={{ maxWidth: "6rem" }} />
                                <CardText  >Add new goal</CardText>
                            </div>
                        </Card>
                    </Ripples>
                </div>
            </Col>
        </Row>
    )
}

export default ActionButton;