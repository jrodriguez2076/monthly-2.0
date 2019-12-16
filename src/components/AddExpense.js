import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddExpense = (props) => {
    return (
        <Form>
            <FormGroup row>
                <Label for="expenseDate">Date</Label>
                <Input
                    type="date"
                    name="date"
                    id="expenseDate"
                    placeholder="Choose a date for the expense"
                />
            </FormGroup>
        </Form >
    )
}


export default AddExpense