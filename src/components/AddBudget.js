import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddBudget = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="amount">Budget Amount</Label>
                <Input
                    type="number"
                    name="number"
                    id="amount"
                    placeholder="Enter a general budget amount"
                />
            </FormGroup>
            <FormGroup>
                <Label for="name">Budget Name</Label>
                <Input type="textarea" name="name" id="name" />
            </FormGroup>
            <p>Icon Selection Here...</p>
        </Form >
    )
}


export default AddBudget