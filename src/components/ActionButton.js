import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ripples from 'react-ripples';

import GenericModal from './GenericModal';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const ActionButton = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    let iconPath;
    iconPath = "/img/icon/".concat(props.Feature, ".png");
    return (

        <Col lg="4">
            <div id="quick-access" className="text-center" >
                <Ripples className="text-center" >
                    <Card body className="text-center" style={{ width: "20rem" }} onClick={toggle}>
                        <div>
                            <CardImg className="mx-auto" top width="100%" src={iconPath} alt="logo" style={{ maxWidth: "6rem" }} />
                            <CardText  >Add new {props.Feature}</CardText>
                        </div>
                    </Card>
                </Ripples>
            </div>
            <GenericModal modal={modal} toggle={toggle} type={props.Feature}></GenericModal>
        </Col>
    )
}

export default ActionButton;