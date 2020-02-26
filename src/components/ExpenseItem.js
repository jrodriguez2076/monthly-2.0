import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Jumbotron, Container } from 'reactstrap';

import GenericModal from './GenericModal';

const ExpenseItem = (props) => {

    const [ConfirmModal, setConfirmModal] = useState(false);
    const [SelectedItem, setSelectedItem] = useState();
    const [ItemAction, setItemAction] = useState();

    const toggle = () => setConfirmModal(!ConfirmModal);

    const selectItem = (item, action) => {
        setSelectedItem(item);
        if (action==0){
            setItemAction("expense");
        } else if (action == 1) setItemAction("confirm");
        toggle();
    }

    const deleteItem = () => {
        let data = {
            "expenseId": SelectedItem._id
        }

        let expenseDeleteRequest = new Request(`/api/expenses`, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        fetch(expenseDeleteRequest)
            .then(data => {
                return data
            })
            .then(res => {
                props.updateExpenses();
                toggle();
            })
    }

    const arrayMapper = props.expenses.map(function (item, i) {

        let formattedDate = new Date(item.date);
        formattedDate = formattedDate.getDate() + "/" + (formattedDate.getMonth() +1) + "/" + formattedDate.getUTCFullYear();

        return <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{item.user}</td>
            <td>{formattedDate}</td>
            <td>{item.location}</td>
            <td>{item.amount}</td>
            <td>{item.description}</td>
            <td>{item.budget}</td>
            <td>
                <Button color="link" style={{ padding: "0.2rem" }} onClick={() => selectItem(item,0)}>
                    <img src="/img/icon/edit.png"></img>
                </Button>
                <Button color="link" style={{ padding: "0.2rem" }} onClick={() => selectItem(item,1)}>
                    <img src="/img/icon/close.png" ></img>
                </Button>
                <GenericModal
                    modal={ConfirmModal}
                    toggle={toggle}
                    type={ItemAction}
                    edit={true}
                    action={() => { deleteItem() }}
                    item={SelectedItem}
                    updateExpenses={props.updateExpenses}
                    delete>
                </GenericModal>
            </td>
        </tr>
    })

    return (
        <tbody>
            {arrayMapper}
        </tbody>

    );
}

export default ExpenseItem