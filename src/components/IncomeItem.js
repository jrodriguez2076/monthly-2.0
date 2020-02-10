import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "core-js/stable";
import "regenerator-runtime/runtime";

import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardBody, CardHeader, CardGroup, Button
} from 'reactstrap';

import toCurrency from './submodules/submodule';
import GenericModal from './GenericModal';


const IncomeItem = (props) => {

    const [iconPaths, setIconPaths] = useState({});
    const [ConfirmModal, setConfirmModal] = useState(false);
    const [SelectedItem, setSelectedItem] = useState();
    const [ItemAction, setItemAction] = useState();

    const toggle = () => setConfirmModal(!ConfirmModal);

    const selectItem = (item, action) => {
        console.log(`Item Selected: ${item.name}`);
        setSelectedItem(item);
        if (action==0){
            setItemAction("income");
        } else if (action == 1) setItemAction("confirm");
        toggle();
    }

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

    const deleteItem = () => {
        console.log(`DELETING THE FOLLOWING: ${SelectedItem._id}`)
        let data = {
            "incomeId": SelectedItem._id
        }

        let incomeDeleteRequest = new Request(`/api/incomes`, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        fetch(incomeDeleteRequest)
            .then(data => {
                console.log(data)
                return data
            })
            .then(res => {
                props.updateIncomes();
                toggle();
            })
    }

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
                    <Button color="success" onClick={() => selectItem(item,0)}>Edit</Button>
                    <Button color="danger" onClick={() => selectItem(item,1)}>Delete</Button>
                    <GenericModal
                        modal={ConfirmModal}
                        toggle={toggle}
                        type={ItemAction}
                        edit={true}
                        action={() => { deleteItem() }}
                        item={SelectedItem}
                        updateIncomes={props.updateIncomes}
                        delete></GenericModal>
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