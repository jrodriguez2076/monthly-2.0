import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "core-js/stable";
import "regenerator-runtime/runtime";

import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardBody, CardHeader, CardGroup
} from 'reactstrap';


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

    const toCurrency = (number) => {
        return "ARS ".concat(number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."))
    }

    const getUsers = async () => {
        let response = await fetch('/api/users');
        let data = await response.json()
        return data
    }



    const incomeMapper = props.incomes.map((item, i) => {
        return <div className="col-md-6" style={{ marginBottom: "2rem" }}>
            <Card key={i}>
                <CardImg className="mx-auto" top width="100%" src={iconPaths[item.user]} style={{ width: "7rem" }} alt="Card image cap" />
                <CardHeader tag="h4">{toCurrency(item.amount)}</CardHeader>
                <CardBody>
                    <CardTitle>{item.user}</CardTitle>
                    <CardText>{item.description}</CardText>
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