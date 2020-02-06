import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddExpense = (props) => {

    const [ExpenseDate, setExpenseDate] = useState('')
    const [Amount, setAmount] = useState(0)
    const [User, setUser] = useState('')
    const [Description, setDescription] = useState('')
    const [Budget, setBudget] = useState('')
    const [Location, setLocation] = useState('')
    const [Method, setMethod] = useState(0)

    const handleChangeDate = (event) => {
        setExpenseDate(event.target.value)
        console.log(ExpenseDate);
    }

    const handleChangeAmount = (event) => {
        setAmount(event.target.value)
        console.log(Amount);
    }

    const handleChangeUser = (event) => {
        setUser(event.target.value)
        console.log(User);
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
        console.log(Description);
    }

    const handleChangeBudget = (event) => {
        setBudget(event.target.value)
        console.log(Budget);
    }

    const handleChangeLocation = (event) => {
        setLocation(event.target.value)
        console.log(Location);
    }

    const handleChangeMethod = (event) => {
        // setMonthly(event.target.value)
        console.log(Method)

        // console.log(setMonthly);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = {
            "amount": Amount,
            "date": ExpenseDate,
            "user": User,
            "budget": Budget,
            "description": Description,
            "location": Location,
            "method": Method
        };

        let incomeRequest = new Request(`/api/expenses`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        fetch(incomeRequest)
            .then(data => {
                console.log(data)
                return data
            }
            )
            .then(res => {
                console.log(res);
                props.toggle()
            })


    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="expenseDate">Date</Label>
                <Input
                    type="date"
                    name="date"
                    id="expenseDate"
                    placeholder="Choose a date for the expense"
                    onChange={handleChangeDate}
                />
            </FormGroup>
            <FormGroup>
                <Label for="amount">Amount</Label>
                <Input
                    type="number"
                    name="number"
                    id="amount"
                    placeholder="How much was spent?"
                    onChange={handleChangeAmount}
                />
            </FormGroup>
            <FormGroup>
                <Label for="user">Who made the expense?</Label>
                <Input type="select" name="user" id="user" onChange={handleChangeUser}>
                    <option>Jose</option>
                    <option>Ana</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="budget">Budget associated</Label>
                <Input type="select" name="budget" id="budget" onChange={handleChangeBudget}>
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
                <Input type="textarea" name="description" id="description" onChange={handleChangeDescription} />
            </FormGroup>
            <FormGroup>
                <Label for="location">Location</Label>
                <Input type="text" name="location" id="location" onChange={handleChangeLocation} />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" onChange={handleChangeMethod} /> Cash
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" /> Electronic
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" /> Credit
                </Label>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form >
    )
}


export default AddExpense