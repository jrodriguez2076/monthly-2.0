import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const Confirm = (props) => {
    return (
        <div>
            <p>Are you sure that you want to delete this item?</p>
            <p>{props.item}</p>
            <Button onClick={props.action}>Confirm</Button>
            <Button onClick={props.toggle}>Cancel</Button>
        </div>)
}

export default Confirm