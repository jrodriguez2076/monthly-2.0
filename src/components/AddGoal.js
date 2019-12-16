import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddGoal = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="expenseDate">Date</Label>
                <Input
                    type="date"
                    name="date"
                    id="expenseDate"
                    placeholder="Choose a date for the expense"
                />
            </FormGroup>
            <FormGroup>
                <Label for="amount">Number</Label>
                <Input
                    type="number"
                    name="number"
                    id="amount"
                    placeholder="How much was spent?"
                />
            </FormGroup>
            <FormGroup>
                <Label for="user">Who made the INCOME?</Label>
                <Input type="select" name="user" id="user">
                    <option>Jose</option>
                    <option>Ana</option>
                </Input>
            </FormGroup>
        </Form >
    )
}


export default AddGoal