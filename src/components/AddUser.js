import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import IconItem from './IconItem';
import ValidityService from './submodules/validity';

const AddUser = (props) => {

    const validity = new ValidityService();

    const radioStyle = {
        "marginTop": ".2rem",
        "marginLeft": "-.6rem"
    }

    useEffect(() => {

        getIcons()
    }, []);

    const [Name, setName] = props.item ? useState(props.item.name) : useState('');
    const [LastName, setLastName] = props.item ? useState(props.item.lastName) : useState('');
    const [Avatar, setAvatar] = props.item ? useState(props.item.avatar) : useState('');
    const [Email, setEmail] = props.item ? useState(props.item.email) : useState('');;
    const [IconList, setIconList] = useState([]);
    const [ValidationError, setValidationError] = useState({
        email: "",
        name: ""
    });

    const checkValidity = () => {
        const errors = ValidationError;
        if (errors.email.length == 0 && !validity.validEmail(Email)) {
            errors.email = "You must add a valid email!";
        }
        if (errors.name.length == 0 && !validity.validName(Name)) {
            errors.name = "You must add a name!";
        }
        setValidationError(errors);
    }

    const handleChange = (event) => {

        const { name, value } = event.target;
        let errors = ValidationError;


        switch (name) {
            case 'userName':
                setName(event.target.value)
                errors.name = validity.validName(value) ? "" : "You must add a name!";
                break;
            case 'email':
                setEmail(event.target.value)
                errors.email = validity.validEmail(value) ? "" : "You must add a valid email!"
                break;
            case 'lastName':
                setLastName(event.target.value)
                break;
            default:
                break;
        }
        setValidationError(errors);

    }


    const handleChangeIcon = (event) => {
        try {
            setAvatar(IconList[event.target.value]);
        } catch {
            setAvatar(IconList[event]);
        }
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
        // if (Validation) return;

        checkValidity()
        if (ValidationError.name.length > 0 || ValidationError.email.length > 0) {
            setName([...Name])
            return;
        }

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

        } else {
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
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="userName"
                                id="name"
                                placeholder="New user name"
                                onChange={handleChange}
                                value={Name}
                                required
                            />
                            {ValidationError.name.length > 0 ? <div style={{ color: "red" }}> {ValidationError.name}</div> : null}
                        </FormGroup>
                    </div>
                    <div className="col-lg-6">
                        <FormGroup>
                            <Label for="lastName">Last name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                id="lastName"
                                onChange={handleChange}
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
                                name="email"
                                id="email"
                                onChange={handleChange}
                                value={Email} />
                            {ValidationError.email.length > 0 ? <div style={{ color: "red" }}> {ValidationError.email}</div> : null}
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
                        <Button color="primary" type="submit" onClick={handleSubmit} style={{ marginRight: "1rem" }}>{props.edit ? "Update" : "Create"}</Button>
                    </div>
                    <div className="col-sm-2">
                        <Button color="secondary" onClick={props.toggle} style={{ marginRight: "1rem" }}>Cancel</Button>
                    </div>
                </div>
            </div>
        </Form >
    )
}


export default AddUser