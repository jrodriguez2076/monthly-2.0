import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const ActionButton = (props) => {
    return (
        <Row>
            <Col lg="4">
                <Card body className="text-center">
                    <CardImg className="mx-auto" top width="100%" src="/img/icon/money_10.png" alt="Add Budget" style={{ maxWidth: "10rem" }} />
                    <CardTitle>Special Title Treatment</CardTitle>
                    <Button>Go somewhere</Button>
                </Card>
            </Col>
            <Col lg="4">
                <Card body className="text-center">
                    <CardImg className="mx-auto" top width="100%" src="/img/icon/money_10.png" alt="Add Budget" style={{ maxWidth: "10rem" }} />
                    <CardTitle>Special Title Treatment</CardTitle>
                    <Button>Go somewhere</Button>
                </Card>
            </Col>
            <Col lg="4">
                <Card body className="text-center">
                    <CardImg className="mx-auto" top width="100%" src="/img/icon/money_10.png" alt="Add Budget" style={{ maxWidth: "10rem" }} />
                    <CardTitle>Special Title Treatment</CardTitle>
                    <Button>Go somewhere</Button>
                </Card>
            </Col>
        </Row>
        // <div>
        //     <Card className="">
        //         <CardImg top width="100%" src="/img/icon/money_10.png" alt="Add Budget" style={{width:"20%", height:"20%"}} />
        //         <CardBody>
        //             <CardTitle>Add new budget</CardTitle>
        //             {/* <Button>Button</Button> */}
        //         </CardBody>
        //     </Card>
        // </div>
    )
}

export default ActionButton;