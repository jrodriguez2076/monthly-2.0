import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Jumbotron, Container } from 'reactstrap';

const ExpenseItem = (props) => {

    const arrayMapper = props.expenses.map(function (item, i) {
        return <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{item.user}</td>
            <td>{item.date}</td>
            <td>{item.location}</td>
            <td>{item.amount}</td>
            <td>{item.description}</td>
            <td>{item.budget}</td>
        </tr>
    })

    return (
        <tbody>
            {arrayMapper}
        </tbody>

    );
}

export default ExpenseItem