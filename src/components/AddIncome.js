import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import ValidityService from './submodules/validity';


const AddIncome = (props) => {

    const validity = new ValidityService();

    useEffect(() => {
        getUsers()
    }, []);

    const [Amount, setAmount] = props.item ? useState(props.item.amount) : useState(0);
    const [User, setUser] = props.item ? useState(props.item.user) : useState('');
    const [Description, setDescription] = props.item ? useState(props.item.description) : useState('');
    const [Monthly, setMonthly] = props.item ? useState(props.item.monthly) : useState(false);
    const [ExistingUsers, setExistingUsers] = useState();
    const [ValidationError, setValidationError] = useState({
        amount: "",
    });

    const checkValidity = () => {
        const errors = ValidationError;
        if (errors.amount.length == 0 && !validity.validAmount(Amount)) {
            errors.amount = "Please add a number higher than 0!";
        }
        setValidationError(errors);
    }

    const handleChange = (event) => {

        const { name, value } = event.target;
        let errors = ValidationError;

        switch (name) {
            case 'amount':
                setAmount(event.target.value);
                errors.amount = validity.validAmount(value) ? "" : "Please add a number higher than 0!";
                break;
            case 'user':
                setUser(event.target.value)
                break;
            case 'description':
                setDescription(event.target.value)
                break;
            case 'monthly':
                setMonthly(!Monthly)
                break;
            default:
                break;
        }
        setValidationError(errors);

    }


    const getUsers = () => {
        fetch(`/api/users`)
            .then(data => {
                return data.json()
            }
            )
            .then(res => {
                let UserOptions = res.map(function (item, i) {
                    return <option key={i}>{item.name}</option>
                })
                setExistingUsers(UserOptions);
                setUser(res[0].name)
            })
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = {}
        let incomeRequest = {};

        checkValidity()
        if (ValidationError.amount.length > 0) {
            setAmount([...User])
            return;
        }
        if (props.edit) {
            let _id = props.item._id;
            data = {
                "_id": _id,
                "update": {
                    "amount": Amount,
                    "user": User,
                    "description": Description,
                    "monthly": Monthly
                }
            }

            incomeRequest = new Request(`/api/incomes`, {
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
                "user": User,
                "description": Description,
                "monthly": Monthly
            };

            incomeRequest = new Request(`/api/incomes`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }

        fetch(incomeRequest)
            .then(data => {
                return data
            }
            )
            .then(res => {
                props.toggle();
                if (!props.fromHome) {
                    props.update();
                }
            })
    }

    return (

        <Form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <FormGroup>
                            <Label for="amount">Amount</Label>
                            <Input
                                type="number"
                                name="amount"
                                id="amount"
                                placeholder="Income amount"
                                onChange={handleChange}
                                value={Amount}
                            />
                            {ValidationError.amount.length > 0 ? <div style={{ color: "red" }}> {ValidationError.amount}</div> : null}
                        </FormGroup>
                    </div>
                    <div className="col-lg-6">
                        <FormGroup>
                            <Label for="user">Who's Income?</Label>
                            <Input
                                type="select"
                                name="user"
                                id="user"
                                onChange={handleChange}
                                value={User}>
                                {ExistingUsers}
                            </Input>
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <FormGroup>
                            <Label for="description">Brief description</Label>
                            <Input
                                type="textarea"
                                name="description"
                                id="description"
                                onChange={handleChange}
                                value={Description} />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <FormGroup check>

                            <Input
                                className="form-check-input"
                                type="checkbox"
                                name="monthly"
                                id="monthlyCheck"
                                onChange={handleChange}
                                checked={Monthly} />
                            <Label for="monthlyCheck">
                                This is a monthly income
                            </Label>
                        </FormGroup>
                    </div>
                </div>
                <hr></hr>
                <div className="row">

                    <div className="col-sm-2">
                        <Button color="primary" type="submit" onClick={handleSubmit} style={{ "margin-right": "1rem" }}>{props.edit ? "Update" : "Create"}</Button>
                    </div>
                    <div className="col-sm-2">
                        <Button color="secondary" onClick={props.toggle} style={{ "margin-right": "1rem" }}>Cancel</Button>
                    </div>
                </div>
            </div>
        </Form >
    )
}


export default AddIncome