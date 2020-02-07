import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "core-js/stable";
import "regenerator-runtime/runtime";

import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardBody, CardHeader, CardGroup, Button
} from 'reactstrap';

import toCurrency from './submodules/submodule'


const IncomeItem = (props) => {

    const [iconPaths, setIconPaths] = useState({});

    useEffect(() => {
        const getIconPaths = async () => {
            let users = await getUsers()
            let paths = {}
            users.forEach(element => {
                paths[element.name] = "/img/icon/avatar/".concat(element.avatar)
            });
            setIconPaths(paths)
            return;
        }

        getIconPaths()
    }, []);

    const getUsers = async () => {
        let response = await fetch('/api/users');
        let data = await response.json()
        return data
    }



    const incomeMapper = props.incomes.map((item, i) => {
        return <div key={i} className="col-md-6" style={{ marginBottom: "2rem" }}>
            <Card >
                <CardImg className="mx-auto" top width="100%" src={iconPaths[item.user]} style={{ width: "7rem" }} alt="Card image cap" />
                {/* <CardHeader tag="h4">{toCurrency(item.amount)}</CardHeader> */}
                <CardBody>
                    <CardTitle tag="h3">{toCurrency(item.amount)}</CardTitle>
                    <CardText>{item.user}</CardText>
                    <CardText>{item.description}</CardText>
                    <Button color="success" type="submit">Edit</Button>
                    <Button color="danger" onClick={props.toggle}>Delete</Button>
                </CardBody>
            </Card>
        </div>
    })

    return (
        <CardGroup className="row text-center">
            {incomeMapper}
        </CardGroup>
    );
}

export default IncomeItem