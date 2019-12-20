import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddBudget = (props) => {

    const radioStyle = {
        "marginTop": ".2rem",
        "marginLeft": "-.6rem"
    }

    // useEffect(() => getIcons(), []);
    
    // const getIcons = async ()=>{

    // }


    return (
        <Form>
            <FormGroup>
                <Label for="name">Budget Name</Label>
                <Input type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup>
                <Label for="amount">Budget Amount</Label>
                <Input
                    type="number"
                    name="number"
                    id="amount"
                    placeholder="Enter a general budget amount"
                />
            </FormGroup>
            <FormGroup>
                <Label for="description">Enter a brief budget description</Label>
                <Input type="textarea" name="description" id="description" />
            </FormGroup>
            <FormGroup>
                <p>Choose an Icon for the Budget</p>
                <Label htmlFor="iconSelect" style={{ "margin": ".8rem" }}>
                    <img src="/img/icon/budgets/aircraft.png" style={{ maxWidth: "3rem" }}></img>
                </Label>
                <Input type="radio" name="iconSelect" id="iconSelect" style={radioStyle} >
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
        </Form >
    )
}


export default AddBudget