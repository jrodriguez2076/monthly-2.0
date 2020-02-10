import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddBudget = (props) => {

    const [Amount, setAmount] = props.item ? useState(props.item.amount) : useState(0)
    const [Name, setName] = props.item ? useState(props.item.name) : useState('')
    const [Description, setDescription] = props.item ? useState(props.item.description) : useState('')
    const [Icon, setIcon] = props.item ? useState(props.item.icon) : useState(0)



    const handleChangeAmount = (event) => {
        setAmount(event.target.value)
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleChangeIcon = (event) => {
        // setMonthly(event.target.value)
        setIcon(0)
        // console.log(setMonthly);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = {}
        let budgetRequest = {};

        if (props.edit) {
            let _id = props.item._id;
            // let update = props.item;
            console.log("entering edit")
            console.log(`${Amount}, ${Name}, ${Description}, ${Icon}`)
            data = {
                "_id": _id,
                "update": {
                    "amount": Amount,
                    "name": Name,
                    "description": Description,
                    "icon": Icon
                }
            }

            budgetRequest = new Request(`/api/budgets`, {
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
                "amount": Amount,
                "name": Name,
                "description": Description,
                "icon": Icon
            }

            budgetRequest = new Request(`/api/budgets`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }

        fetch(budgetRequest)
            .then(data => {
                return data
            }
            )
            .then(res => {
                console.log(res);
                props.toggle()
            })

        if (!props.fromHome) {
            console.log("NOW TO REFRESH BUDGETS")
            props.update();
        }
    }

    const radioStyle = {
        "marginTop": ".2rem",
        "marginLeft": "-.6rem"
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="name">Budget Name</Label>
                <Input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={handleChangeName} 
                    value={Name}/>
            </FormGroup>
            <FormGroup>
                <Label for="amount">Budget Amount</Label>
                <Input
                    type="number"
                    name="number"
                    id="amount"
                    placeholder="Enter a general budget amount"
                    onChange={handleChangeAmount}
                    value={Amount}
                />
            </FormGroup>
            <FormGroup>
                <Label for="description">Enter a brief budget description</Label>
                <Input type="textarea" 
                name="description" 
                id="description" 
                onChange={handleChangeDescription} 
                value={Description} />
            </FormGroup>
            <FormGroup>
                <p>Choose an Icon for the Budget</p>
                <Label htmlFor="iconSelect" style={{ "margin": ".8rem" }}>
                    <img src="/img/icon/budgets/aircraft.png" style={{ maxWidth: "3rem" }}></img>
                </Label>
                <Input type="radio" name="iconSelect" id="iconSelect" style={radioStyle} onChange={handleChangeIcon} >
                </Input>
                <Label htmlFor="iconSelect2" style={{ "margin": ".8rem" }}>
                    <img src="/img/icon/budgets/tray.png" style={{ maxWidth: "3rem" }}></img>
                </Label>
                <Input style={radioStyle} type="radio" name="iconSelect" id="iconSelect2">
                </Input>
                <Label htmlFor="iconSelect3" style={{ "margin": ".8rem" }}>
                    <img src="/img/icon/budgets/003-bank.svg" style={{ maxWidth: "3rem" }}></img>
                </Label>
                <Input style={radioStyle} type="radio" name="iconSelect" id="iconSelect3">
                </Input>
                <Label htmlFor="iconSelect4" style={{ "margin": ".8rem" }}>
                    <img src="/img/icon/budgets/004-house.svg" style={{ maxWidth: "3rem" }}></img>
                </Label>
                <Input style={radioStyle} type="radio" name="iconSelect" id="iconSelect4">
                </Input>
                <Label htmlFor="iconSelect5" style={{ "margin": ".8rem" }}>
                    <img src="/img/icon/budgets/006-bus.svg" style={{ maxWidth: "3rem" }}></img>
                </Label>
                <Input style={radioStyle} type="radio" name="iconSelect" id="iconSelect5">
                </Input>
                <Label htmlFor="iconSelect6" style={{ "margin": ".8rem" }}>
                    <img src="/img/icon/budgets/033-hospital.svg" style={{ maxWidth: "3rem" }}></img>
                </Label>
                <Input style={radioStyle} type="radio" name="iconSelect" id="iconSelect6">
                </Input>
                <Label htmlFor="iconSelect7" style={{ "margin": ".8rem" }}>
                    <img src="/img/icon/budgets/toilet-paper.png" style={{ maxWidth: "3rem" }}></img>
                </Label>
                <Input style={radioStyle} type="radio" name="iconSelect" id="iconSelect7">
                </Input>
                <Label htmlFor="iconSelect8" style={{ "margin": ".8rem" }}>
                    <img src="/img/icon/budgets/hairdryer.png" style={{ maxWidth: "3rem" }}></img>
                </Label>
                <Input style={radioStyle} type="radio" name="iconSelect" id="iconSelect8">
                </Input>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" /> This is a monthly budget
                </Label>
            </FormGroup>
            <hr></hr>
            <Button color="primary" type="submit" onClick={handleSubmit}>{props.edit? "Update":"Create"}</Button>
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
        </Form >
    )
}


export default AddBudget