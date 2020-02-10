import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddExpense = (props) => {

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
    const [Method, setMethod] = props.item ? useState(props.item.method) : useState(0)
    const [ExistingBudgets, setExistingBudgets] = useState()
    const [ExistingUsers, setExistingUsers] = useState()

    // const BudgetOptions = [];

    const getBudgets = () => {
        console.log('Getting all budgets')
        fetch(`/api/budgets`)
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
        console.log('Getting all users')
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

    const handleChangeDate = (event) => {
        setExpenseDate(event.target.value)
    }

    const handleChangeAmount = (event) => {
        setAmount(event.target.value)
    }

    const handleChangeUser = (event) => {
        setUser(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleChangeBudget = (event) => {
        setBudget(event.target.value)
    }

    const handleChangeLocation = (event) => {
        setLocation(event.target.value)
    }

    const handleChangeMethod = (event) => {
        // setMonthly(event.target.value)

        // console.log(setMonthly);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = {}
        let expenseRequest = {};

        if (props.edit) {
            let _id = props.item._id;
            // let update = props.item;
            console.log("entering edit")
            console.log(`${Amount}, ${ExpenseDate}, ${Description}`)
            data = {
                "_id": _id,
                "update": {
                    "amount": Amount,
                    "date": ExpenseDate,
                    "user": User,
                    "budget": Budget,
                    "description": Description,
                    "location": Location,
                    "method": Method
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
            console.log(JSON.stringify(data));

        } else {

            data = {
                "amount": Amount,
                "date": ExpenseDate,
                "user": User,
                "budget": Budget,
                "description": Description,
                "location": Location,
                "method": Method
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

        // data = {
        //     "amount": Amount,
        //     "date": ExpenseDate,
        //     "user": User,
        //     "budget": Budget,
        //     "description": Description,
        //     "location": Location,
        //     "method": Method
        // };

        // let expenseRequest = new Request(`/api/expenses`, {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // })

        fetch(expenseRequest)
            .then(data => {
                return data
            }
            )
            .then(res => {
                console.log(res);
                props.toggle();
            })

        if (!props.fromHome) {
            console.log("NOW TO REFRESH EXPENSES")
            props.update();
        }


    }

    // const budgetMapper = ExistingBudgets.map(function (item, i) {
    //     return <option key={i}>{item.name}</option>
    // })

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
                    value={ExpenseDate}
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
                    value={Amount}
                />
            </FormGroup>
            <FormGroup>
                <Label for="user">Who made the expense?</Label>
                <Input type="select" name="user" id="user" onChange={handleChangeUser} value={User}>
                    {ExistingUsers}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="budget">Budget associated</Label>
                <Input type="select" name="budget" id="budget" onChange={handleChangeBudget} value={Budget}>
                    {ExistingBudgets}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="description">Brief description</Label>
                <Input type="textarea" name="description" id="description" onChange={handleChangeDescription} value={Description} />
            </FormGroup>
            <FormGroup>
                <Label for="location">Location</Label>
                <Input type="text" name="location" id="location" onChange={handleChangeLocation} value={Location} />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="method" onChange={handleChangeMethod} value={Method} /> Cash
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="method" onChange={handleChangeMethod} /> Electronic
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="method" onChange={handleChangeMethod} /> Credit
                </Label>
            </FormGroup>
            <Button color="primary" type="submit">{props.edit ? "Update" : "Create"}</Button>
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
        </Form >
    )
}


export default AddExpense