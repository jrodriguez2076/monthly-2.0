import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import IconItem from './IconItem';

const AddUser = (props) => {

    const radioStyle = {
        "marginTop": ".2rem",
        "marginLeft": "-.6rem"
    }

    useEffect(() => {
        getIcons()
    }, []);

    const [Name, setName] = props.item ? useState(props.item.user) : useState('');
    const [LastName, setLastName] = props.item ? useState(props.item.description) : useState('');
    const [Avatar, setAvatar] = props.item ? useState(props.item.monthly) : useState(false);
    const [Email, setEmail] = useState('');
    const [IconList, setIconList] = useState([]);
    const [Validation, setValidation] = useState(false)


    const handleChangeName = (event) => {
        if (!event.target.value) setValidation(true)
        else setValidation(false)
        setName(event.target.value)
    }

    const handleChangeLastName = (event) => {
        setLastName(event.target.value)
    }

    const handleChangeIcon = (event) => {
        try {
            setAvatar(IconList[event.target.value]);
        } catch {
            setAvatar(IconList[event]);
        }
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const getIcons = () => {
        let iconRequest = new Request(`/api/icons/all?section=avatar`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        fetch(iconRequest)
            .then(data => {
                console.log(`data received: ${data}`)
                return data.json()
            })
            .then(res => {
                setIconList([...res])
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = {}
        let userRequest = {};
        console.log('VEDAGRGHBT')
        if (Validation) return;
        if (props.edit) {
            let _id = props.item._id;
            data = {
                "_id": _id,
                "update": {
                    "name": Name,
                    "lastName": LastName,
                    "email": Email,
                    "avatar": Avatar
                }
            }

            userRequest = new Request(`/api/users`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            console.log(JSON.stringify(data));

        } else {
            console.log("this is not edit")
            data = {
                "name": Name,
                "lastName": LastName,
                "email": Email,
                "avatar": Avatar
            };

            userRequest = new Request(`/api/users`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }

        fetch(userRequest)
            .then(data => {
                return data
            }
            )
            .then(res => {
                props.toggle();
            })

        if (!props.fromHome) {
            props.update();
        }

    }

    return (

        <Form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="userName"
                                id="name"
                                placeholder="New user name"
                                onChange={handleChangeName}
                                value={Name}
                                required
                            />
                            {Validation? <div style={{ color: "red" }}> A name must be given!</div> : null}
                        </FormGroup>
                    </div>
                    <div className="col-lg-6">
                        <FormGroup>
                            <Label for="lastName">Last name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                id="lastName"
                                onChange={handleChangeLastName}
                                value={LastName}>
                            </Input>
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <FormGroup>
                            <Label for="email">email</Label>
                            <Input
                                type="text"
                                id="email"
                                onChange={handleChangeEmail}
                                value={Email} />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>Choose an Avatar for the User</p>
                        <IconItem icons={IconList} radioStyle={radioStyle} handleChangeIcon={handleChangeIcon} section="avatar"></IconItem>

                        {/* <FormGroup check>

                            <Input
                                className="form-check-input"
                                type="checkbox"
                                id="monthlyCheck"
                                onChange={handleChangeMonthly}
                                checked={Monthly} />
                            <Label for="monthlyCheck">
                                This is a monthly income
                            </Label>
                        </FormGroup> */}
                    </div>
                </div>
                <hr></hr>
                <div className="row">

                    <div className="col-sm-2">
                        <Button color="primary" type="submit" onClick={handleSubmit}>{props.edit ? "Update" : "Create"}</Button>
                    </div>
                    <div className="col-sm-2">
                        <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                    </div>
                </div>
            </div>
        </Form >
    )
}


export default AddUser