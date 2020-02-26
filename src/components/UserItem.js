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
import { path } from 'dotenv/lib/env-options';


const UserItem = (props) => {

    const [iconPaths, setIconPaths] = useState({});
    const [ConfirmModal, setConfirmModal] = useState(false);
    const [SelectedItem, setSelectedItem] = useState();
    const [ItemAction, setItemAction] = useState();

    const toggle = () => setConfirmModal(!ConfirmModal);

    //Set the action to be performed according to the button clicked
    const selectItem = (item, action) => {
        setSelectedItem(item);
        if (action == 0) { //if Edit function clicked
            setItemAction("user");
        } else if (action == 1) setItemAction("confirm"); //if Delete function clicked
        toggle();
    }

    useEffect(() => {
        const getIconPaths = () => {
            let paths = {}
            props.users.forEach(element => {
                paths[element.name] = "/img/icon/avatar/".concat(element.avatar)
            });
            setIconPaths(paths)
            return;
        }

        getIconPaths()
    }, [props.users]);

    const deleteItem = () => {
        let data = {
            "userId": SelectedItem._id
        }

        let userDeleteRequest = new Request(`/api/users`, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        fetch(userDeleteRequest)
            .then(data => {
                return data
            })
            .then(res => {
                props.updateUsers();
                toggle();
            })
    }

    const userMapper = props.users.map((item, i) => {

        return <div key={i} className="col-md-6" style={{ marginBottom: "2rem" }}>
            <Card >
                <CardImg className="mx-auto" top width="100%" src={iconPaths[item.name]} style={{ width: "7rem" }} alt="Avatar goes here"/>
                {/* <CardHeader tag="h4">{toCurrency(item.amount)}</CardHeader> */}
                <CardBody>
                    <CardTitle tag="h3">{item.name}</CardTitle>
                    <CardText>{item.email}</CardText>
                    <Button color="link" style={{ padding: "1rem" }} onClick={() => selectItem(item, 0)}>
                        <img src="/img/icon/edit.png"></img>
                    </Button>
                    <Button color="link" style={{ padding: "1rem" }} onClick={() => selectItem(item, 1)}>
                        <img src="/img/icon/close.png" ></img>
                    </Button>
                    {/* <Button color="success" onClick={() => selectItem(item,0)}>Edit</Button>
                    <Button color="danger" onClick={() => selectItem(item,1)}>Delete</Button> */}
                    <GenericModal
                        modal={ConfirmModal}
                        toggle={toggle}
                        type={ItemAction}
                        edit={true}
                        action={() => { deleteItem() }}
                        item={SelectedItem}
                        updateUsers={props.updateUsers}
                        delete></GenericModal>
                </CardBody>
            </Card>
        </div>
    })

    return (
        <CardGroup className="row text-center">
            {userMapper}
        </CardGroup>
    );
}

export default UserItem