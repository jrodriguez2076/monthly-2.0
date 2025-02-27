import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card, CardImg, CardText,
    CardBody,
    CardGroup,
    CardHeader,
    Button
} from 'reactstrap';

import toCurrency from './submodules/submodule'
import GenericModal from './GenericModal';



const BudgetItem = (props) => {

    const [ConfirmModal, setConfirmModal] = useState(false);
    const [SelectedItem, setSelectedItem] = useState();
    const [ItemAction, setItemAction] = useState();

    const toggle = () => setConfirmModal(!ConfirmModal);

    const selectItem = (item, action) => {
        setSelectedItem(item);
        if (action == 0) {
            setItemAction("budget");
        } else if (action == 1) setItemAction("confirm");
        toggle();
    }

    const getIconPath = (item) => {
        return "/img/icon/budgets/".concat(item.icon)
    }

    const deleteItem = () => {
        let data = {
            "budgetId": SelectedItem._id
        }

        let budgetDeleteRequest = new Request(`/api/budgets`, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        fetch(budgetDeleteRequest)
            .then(data => {
                return data
            })
            .then(res => {
                props.updateBudgets();
                toggle();
                if (res.status >= 200 && res.status < 400) {
                    props.notifData({
                        "title": "Budget deleted",
                        "message": "Budget deleted successfully",
                        "icon": "delete.gif"
                    })
                }
                props.showToastMessage();

            })
    }

    const budgetMapper = props.budgets.map((item, i) => {
        let spent = 0;
        try {
            props.expenses.forEach(element => {
                if (element.budget == item.name) {
                    spent += element.amount;
                }
            });
        }
        catch (err) {
        }

        return <div key={i} className="col-md-6" style={{ marginBottom: "2rem" }}>
            <Card key={i} >
                <CardImg className="mx-auto" top width="100%" src={getIconPath(item)} style={{ width: "7rem" }} alt="Card image cap" />
                <CardHeader tag="h4">{item.name}</CardHeader>
                <CardBody>
                    <CardText tag="h5"> ARS {toCurrency(item.amount)}</CardText>
                    <CardText>Available: ARS {toCurrency(item.amount - spent)}</CardText>
                    <Button color="link" style={{ padding: "1rem" }} onClick={() => selectItem(item, 0)}>
                        <img src="/img/icon/edit.png"></img>
                    </Button>
                    <Button color="link" style={{ padding: "1rem" }} onClick={() => selectItem(item, 1)}>
                        <img src="/img/icon/close.png" ></img>
                    </Button>
                    {/* <Button color="success" onClick={() => selectItem(item, 0)}>Edit</Button>
                    <Button color="danger" onClick={() => selectItem(item, 1)}>Delete</Button> */}
                    <GenericModal
                        modal={ConfirmModal}
                        toggle={toggle}
                        type={ItemAction}
                        edit={true}
                        action={() => { deleteItem() }}
                        item={SelectedItem}
                        updateBudgets={props.updateBudgets}
                        showToastMessage={props.showToastMessage}
                        notifData={props.notifData}
                        delete></GenericModal>
                </CardBody>
            </Card>
        </div>
    })

    return (
        <CardGroup className="row text-center">
            {budgetMapper}
        </CardGroup>

    );
}

export default BudgetItem