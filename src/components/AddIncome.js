import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddIncome = (props) => {
    useEffect(() =>{ 
        getUsers()
    }, []);

    const getUsers = () => {
        console.log('Getting all users')
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
            })
    };

    const [Amount, setAmount] = useState(0);
    const [User, setUser] = useState('');
    const [Description, setDescription] = useState('');
    const [Monthly, setMonthly] = useState(false);
    const [ExistingUsers, setExistingUsers] = useState();



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

    const handleChangeMonthly = (event) => {
        // setMonthly(event.target.value)
        setMonthly(!Monthly)
        console.log(Monthly)

        // console.log(setMonthly);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = {
            "amount": Amount,
            "user": User,
            "description": Description,
            "monthly": Monthly
        };

        let incomeRequest = new Request(`/api/incomes`, {
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
                props.update();
                props.toggle();
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
                                name="amountnumber"
                                id="amount"
                                placeholder="Income amount"
                                onChange={handleChangeAmount}
                                required
                            />
                        </FormGroup>
                    </div>
                    <div className="col-lg-6">
                        <FormGroup>
                            <Label for="user">Who's Income?</Label>
                            <Input
                                type="select"
                                name="user"
                                id="user"
                                onChange={handleChangeUser}>
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
                                onChange={handleChangeDescription} />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <FormGroup check>

                            <Input
                                className="form-check-input"
                                type="checkbox"
                                id="monthlyCheck"
                                onChange={handleChangeMonthly}
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
                        <Button color="primary" type="submit" onClick={handleSubmit}>Create</Button>
                    </div>
                    <div className="col-sm-2">
                        <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                    </div>
                </div>
            </div>
        </Form >
    )
}


export default AddIncome