import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import ValidityService from './submodules/validity';


const AddExpense = (props) => {

    const validity = new ValidityService();

    useEffect(() => {
        getBudgets();
        getUsers()
    }, []);

    const [ExpenseDate, setExpenseDate] = props.item ? useState(props.item.expenseDate) : useState('')
    const [Amount, setAmount] = props.item ? useState(props.item.amount) : useState(0)
    const [User, setUser] = props.item ? useState(props.item.user) : useState('')
    const [Description, setDescription] = props.item ? useState(props.item.description) : useState('')
    const [Budget, setBudget] = props.item ? useState(props.item.budget) : useState('')
    const [Location, setLocation] = props.item ? useState(props.item.location) : useState('')
    const [Method, setMethod] = props.item ? useState(props.item.method) : useState('cash')
    const [Payments, setPayments] = props.item ? useState(props.item.Payments) : useState(1)
    const [StartDate, setStartDate] = props.item ? useState(props.item.StartDate) : useState('')
    const [ExistingBudgets, setExistingBudgets] = useState()
    const [ExistingUsers, setExistingUsers] = useState()
    const [ValidationError, setValidationError] = useState({
        amount: "",
        date: "",
        description: ""
    });

    const checkValidity = () => {
        const errors = ValidationError;
        if (errors.amount.length == 0 && !validity.validAmount(Amount)) {
            errors.amount = "Please add a number higher than 0!";
        }
        if (errors.date.length == 0 && !validity.validDate(ExpenseDate)) {
            errors.date = "Please add a valid date!";
        }
        if (errors.description.length == 0 && !validity.validDescription(Description)) {
            errors.description = "Please add a valid description (limit: 50 characters)";
        }
        setValidationError(errors);
    }

    const handleChange = (event) => {

        const { name, value } = event.target;
        let errors = ValidationError;

        switch (name) {
            case 'date':
                setExpenseDate(event.target.value);
                if (Method == "credit") setStartDate(event.target.value)
                errors.date = validity.validDate(value) ? "" : "Please add a valid date!";
                break;
            case 'amount':
                setAmount(event.target.value)
                errors.amount = validity.validAmount(value) ? "" : "You must add a name!";
                break;
            case 'user':
                setUser(event.target.value)
                break;
            case 'budget':
                setBudget(event.target.value)
                break;
            case 'description':
                setDescription(event.target.value)
                errors.description = validity.validDescription(value) ? "" : "Please add a valid description (limit: 50 characters)";
                break;
            case 'location':
                setLocation(event.target.value)
                break;
            default:
                break;
        }
        setValidationError(errors);

    }

    const getBudgets = () => {
        let d = new Date()

        fetch(`/api/budgets?month=${d.getMonth() + 1}`)
            .then(data => {
                return data.json()
            }
            )
            .then(res => {
                let BudgetOptions = res.map(function (item, i) {
                    return <option key={i}>{item.name}</option>
                })
                setExistingBudgets(BudgetOptions);
                setBudget(res[0].name)
            })
    };
    const getUsers = () => {
        fetch(`/api/users`)
            .then(data => {
                return data.json()
            }
            )
            .then(res => {
                let UserOptions = res.map(function (item, i) {
                    return <option key={i} value={item.name}>{item.name}</option>
                })
                setExistingUsers(UserOptions);
                setUser(res[0].name)
            })
    };

    const handleChangeMethod = (event) => {
        setMethod(event.target.value);
        setBudget("Credit card payment");
        if (event.target.value != 'credit') setPayments(1)

    }

    const handleChangePayments = (event) => {
        setPayments(event.target.value)
        console.log(event.target.value)
    }

    const handleChangeStartDate = (event) => {
        setStartDate(event.target.value)
        setExpenseDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = {}
        let expenseRequest = {};

        checkValidity()
        if (ValidationError.date.length > 0 || ValidationError.amount.length > 0 || ValidationError.description.length > 0) {
            setUser([...User])
            return;
        }
        if (props.edit) {
            let _id = props.item._id;
            data = {
                "_id": _id,
                "update": {
                    "amount": Amount,
                    "date": ExpenseDate,
                    "user": User,
                    "budget": Budget,
                    "description": Description,
                    "location": Location,
                    "method": Method,
                    "payments": Payments,
                    "startDate": StartDate
                }
            }

            expenseRequest = new Request(`/api/expenses`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        } else {

            data = {
                "amount": Amount,
                "date": ExpenseDate,
                "user": User,
                "budget": Budget,
                "description": Description,
                "location": Location,
                "method": Method,
                "payments": Payments,
                "startDate": StartDate
            };

            expenseRequest = new Request(`/api/expenses`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

        }

        fetch(expenseRequest)
            .then(data => {
                return data
            }
            )
            .then(res => {
                props.toggle();
                props.update();
            })

        // if (!props.fromHome) {
        // }


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
                    onChange={handleChange}
                    value={ExpenseDate}
                />
                {ValidationError.date.length > 0 ? <div style={{ color: "red" }}> {ValidationError.date}</div> : null}

            </FormGroup>
            <FormGroup>
                <Label for="amount">Amount</Label>
                <Input
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="How much was spent?"
                    onChange={handleChange}
                    value={Amount}
                />
                {ValidationError.amount.length > 0 ? <div style={{ color: "red" }}> {ValidationError.amount}</div> : null}

            </FormGroup>
            <FormGroup>
                <Label for="user">Who made the expense?</Label>
                <Input type="select" name="user" id="user" onChange={handleChange} value={User}>
                    {ExistingUsers}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="budget">Budget associated</Label>
                <Input type="select" name="budget" id="budget" onChange={handleChange} value={Budget} disabled={Method == "credit" ? "disabled" : ""}>
                    {ExistingBudgets}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="description">Brief description</Label>
                <Input type="textarea" name="description" id="description" onChange={handleChange} value={Description} />
                {ValidationError.description.length > 0 ? <div style={{ color: "red" }}> {ValidationError.description}</div> : null}
            </FormGroup>
            <FormGroup>
                <Label for="location">Location</Label>
                <Input type="text" name="location" id="location" onChange={handleChange} value={Location} />
            </FormGroup>
            <FormGroup>
                <Label for="method">Select payment method</Label>
                <Input type="select" name="method" id="method" onChange={handleChangeMethod} value={Method}>
                    <option value="cash">Cash</option>
                    <option value="electronic">Electronic</option>
                    <option value="credit">Credit card</option>
                </Input>
            </FormGroup>
            {Method == 'credit' ?
                <div>
                    <FormGroup>
                        <Label for="startDate"> When will the first payment be due? </Label>
                        <Input
                            type="date"
                            name="startDate"
                            id="startDate"
                            placeholder="Choose a date for the initial payment"
                            onChange={handleChangeStartDate}
                            value={StartDate}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="payments"> Select how many payments </Label>
                        <Input type="select" name="payments" id="payments" onChange={handleChangePayments} value={Payments}>
                            <option value={1}>1 payment</option>
                            <option value={3}>3 payments</option>
                            <option value={6}>6 payments</option>
                            <option value={12}>12 payments</option>
                            <option value={18}>18 payments</option>
                        </Input>

                    </FormGroup>
                </div>
                : null}
            <Button color="primary" type="submit" style={{ marginRight: "1rem" }}>{props.edit ? "Update" : "Create"}</Button>
            <Button color="secondary" onClick={props.toggle} style={{ marginRight: "1rem" }}>Cancel</Button>
        </Form >
    )
}


export default AddExpense