import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddIncome = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="amount">Amount</Label>
                <Input
                    type="number"
                    name="amountnumber"
                    id="amount"
                    placeholder="Income amount"
                />
            </FormGroup>
            <FormGroup>
                <Label for="user">Who's Income?</Label>
                <Input type="select" name="user" id="user">
                    <option>Jose</option>
                    <option>Ana</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="description">Brief description</Label>
                <Input type="textarea" name="description" id="description" />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" /> This is a monthly income
                </Label>
            </FormGroup>
        </Form >
    )
}


export default AddIncome