import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddExpense = (props) => {
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
                <Label for="amount">Amount</Label>
                <Input
                    type="number"
                    name="number"
                    id="amount"
                    placeholder="How much was spent?"
                />
            </FormGroup>
            <FormGroup>
                <Label for="user">Who made the expense?</Label>
                <Input type="select" name="user" id="user">
                    <option>Jose</option>
                    <option>Ana</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="budget">Budget associated</Label>
                <Input type="select" name="budget" id="budget">
                    <option>Rent</option>
                    <option>Building Administration</option>
                    <option>Foods & groceries</option>
                    <option>Water Bill</option>
                    <option>Electricity Bill</option>
                    <option>Gas Bill</option>
                    <option>Phone Credit</option>
                    <option>Transportation</option>
                    <option>Leisure</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="description">Brief description</Label>
                <Input type="textarea" name="description" id="description" />
            </FormGroup>
            <FormGroup>
                <Label for="location">Location</Label>
                <Input type="text" name="location" id="location" />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" /> Paid in cash
                </Label>
            </FormGroup>
        </Form >
    )
}


export default AddExpense