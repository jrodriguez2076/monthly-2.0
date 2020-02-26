import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const Confirm = (props) => {
    return (
        <div>
            <p>Are you sure that you want to delete this item?</p>
            <p>{props.item.name}</p>
            <Button color="danger" onClick={props.action} style={{ "margin-right": "1rem"}}>Confirm</Button>
            <Button onClick={props.toggle} style={{ "margin-right": "1rem"}}>Cancel</Button>
        </div>)
}

export default Confirm