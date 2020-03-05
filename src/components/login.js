import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidityService from './submodules/validity';
import { SessionContext } from './Context/auth-context';
import { Redirect } from "react-router-dom";

import { Card, CardText, CardBody, FormGroup, Input, Label, CardHeader, Button } from 'reactstrap';

const Login = (props) => {
    return (
        <SessionContext.Consumer>
            {props => {
                return (
                    <LoginTemplate {...props}></LoginTemplate>
                )
            }}
        </SessionContext.Consumer>
    )

}

const LoginTemplate = (props) => {
    const [RedirectUrl, setRedirectUrl] = useState('')
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ValidationError, setValidationError] = useState({
        email: "",
        password: ""
    });

    const validity = new ValidityService();

    const checkValidity = () => {
        const errors = ValidationError;
        if (errors.email.length == 0 && !validity.validEmail(Email)) {
            errors.email = "Please provide an email";
        }
        if (errors.password.length == 0 && !validity.validPassword(Password)) {
            errors.password = "You must add a password";
        }
        setValidationError(errors);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        let errors = ValidationError;

        switch (name) {
            case 'userEmail':
                setEmail(event.target.value);
                errors.email = validity.validEmail(value) ? "" : "Please provide an email";
                break;
            case 'userPassword':
                setPassword(event.target.value)
                errors.password = validity.validPassword(value) ? "" : "You must add a password";
                break;
            default:
                break;
        }
        setValidationError(errors);

    }


    const handleSubmit = (event) => {
        console.log(props.value.user)
        event.preventDefault()
        let data = {}
        let loginRequest = {};
        let notifInfo = {};
        checkValidity();
        console.log("Checking if invalid")
        if (ValidationError.email.length > 0 || ValidationError.password.length > 0) {
            setEmail([...Email])
            return;
        } //Force a re-render to make Uncorrected errors appear in the form

        data = {
            "email": Email,
            "password": Password
        }

        notifInfo = {
            "title": "Success!",
            "message": "User Logged in",
            "icon": "success-2.gif"
        }

        loginRequest = new Request(`/api/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let responseStatus = 0;

        fetch(loginRequest)
            .then(data => {
                responseStatus = data.status
                return data.json()
            }
            )
            .then(res => {
                if (responseStatus >= 200 && responseStatus < 400) {
                    props.startLoginSession(Email, res.token);
                } else if (responseStatus == 404) {
                    // props.notifData({
                    //     "title": "Error!",
                    //     "message": "no User found!",
                    //     "icon": "warning.gif"
                    // })
                    // props.showToastMessage();
                } else console.log("unknown error " + responseStatus);
                setRedirectUrl('/')
                return
            })
        // if (!props.fromHome) {
        //     props.update();
        // }
    }

    return (RedirectUrl == '' ?
    <div className="bg" style={{ backgroundImage: `url(./img/wallpaper.jpg)`, height: "100%", width: "100%", opacity: "1" }}>
        
            <div className="flex-login">
                <div className="flex-container">
                    <div id="external">
                        <img id="logo-standout" className="mx-auto" width="50%" height="50%" src="./img/icon/logo.png" alt="logo"></img>
                    </div>
                    <div>
                        <h1 style={{ color: "gold" }}>MONTHLY</h1>
                    </div>
                </div>
                <div className="login-modal">
                    <Card className="container" style={{ borderStyle: "solid", borderColor: "rgb(114, 113, 113)" }} >
                        <div className="row">
                            <CardHeader tag="h2" className="col" style={{ textAlign: "center" }}>
                                Log In
                </CardHeader>
                        </div>
                        <CardBody className="row">
                            <CardText className="container " >
                                <FormGroup className="row" style={{ display: "flex" }}>
                                    <Label for="userEmail" style={{ textAlign: "center", width: "100%" }}>
                                        Email
                        </Label>
                                    <Input
                                        type="text"
                                        name="userEmail"
                                        id="userEmail"
                                        placeholder=""
                                        onChange={handleChange}
                                        value={Email}
                                        required>
                                    </Input>
                                    {ValidationError.email.length > 0 ? <p style={{ color: "red", textAlign: "center", width: "100%" }}> {ValidationError.email}</p> : null}

                                </FormGroup>
                                <FormGroup className="row" style={{ display: "flex" }} >
                                    <Label for="userPassword" style={{ textAlign: "center", width: "100%" }}>
                                        Password
                        </Label>
                                    <Input
                                        type="password"
                                        name="userPassword"
                                        id="userPassword"
                                        placeholder=""
                                        onChange={handleChange}
                                        value={Password}
                                        required>>
                        </Input>
                                    {ValidationError.password.length > 0 ? <p style={{ color: "red", textAlign: "center", width: "100%" }}> {ValidationError.password}</p> : null}
                                </FormGroup>
                                <div style={{ textAlign: "center" }}>
                                    <Button color="primary" type="submit" onClick={handleSubmit} style={{ margin: "1rem 1rem 0 0 " }} >Log In</Button>
                                    <Button color="secondary" style={{ margin: "1rem 1rem 0 0 " }}>Forgot Password?</Button>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
    </div >  : <Redirect to={RedirectUrl}></Redirect>)
}

export default Login;