import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import IconItem from './IconItem';
import ValidityService from './submodules/validity';


const AddBudget = (props) => {

    const validity = new ValidityService();

    useEffect(() => {
        getIcons();
    }, []);

    const [Amount, setAmount] = props.item ? useState(props.item.amount) : useState(0)
    const [Name, setName] = props.item ? useState(props.item.name) : useState('')
    const [Description, setDescription] = props.item ? useState(props.item.description) : useState('')
    const [Icon, setIcon] = props.item ? useState(props.item.icon) : useState("house.svg")
    const [IconList, setIconList] = useState([]);
    const [Monthly, setMonthly] = useState(false);
    const [ValidationError, setValidationError] = useState({
        amount: "",
        name: ""
    });

    const checkValidity = () => {
        const errors = ValidationError;
        if (errors.amount.length == 0 && !validity.validAmount(Amount)) {
            errors.amount = "Please add a number higher than 0!";
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
            case 'amount':
                setAmount(event.target.value);
                errors.amount = validity.validAmount(value) ? "" : "Please add a number higher than 0!";
                break;
            case 'name':
                setName(event.target.value)
                errors.name = validity.validName(value) ? "" : "You must add a name!";
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

    const handleChangeIcon = (event) => {
        try {
            setIcon(IconList[event.target.value]);
        } catch {
            setIcon(IconList[event]);
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        let data = {}
        let budgetRequest = {};
        let notifInfo = {};
        checkValidity()
        if (ValidationError.name.length > 0 || ValidationError.amount.length > 0) {
            setName([...Name])
            return;
        }
        if (props.edit) {
            let _id = props.item._id;
            // let update = props.item;
            data = {
                "_id": _id,
                "update": {
                    "amount": Amount,
                    "name": Name,
                    "description": Description,
                    "icon": Icon,
                    "monthly": Monthly
                }
            }

            notifInfo = {
                "title": "Updated!",
                "message": "Budget updated successfully",
                "icon": "success-2.gif"
            }

            budgetRequest = new Request(`/api/budgets`, {
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
                "name": Name,
                "description": Description,
                "icon": Icon,
                "monthly": Monthly
            }

            notifInfo = {
                "title": "Added!",
                "message": "Budget added successfully",
                "icon": "success-2.gif"
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
                props.toggle();

                if (res.status >= 200 && res.status < 400) {
                    props.notifData(notifInfo)
                    props.showToastMessage();
                } else if (res.status == 422) {
                    props.notifData({
                        "title": "Error!",
                        "message": "Budget data is wrong. Try again!",
                        "icon": "warning.gif"
                    })
                    props.showToastMessage();
                }
                if (!props.fromHome) {
                    props.update();
                }
            })
    }

    const getIcons = () => {
        let iconRequest = new Request(`/api/icons/all?section=${props.section}`, {
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
                    onChange={handleChange}
                    value={Name} />
                {ValidationError.name.length > 0 ? <div style={{ color: "red" }}> {ValidationError.name}</div> : null}
            </FormGroup>
            <FormGroup>
                <Label for="amount">Budget Amount</Label>
                <Input
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="Enter a general budget amount"
                    onChange={handleChange}
                    value={Amount}
                />
                {ValidationError.amount.length > 0 ? <div style={{ color: "red" }}> {ValidationError.amount}</div> : null}
            </FormGroup>
            <FormGroup>
                <Label for="description">Enter a brief budget description</Label>
                <Input type="textarea"
                    name="description"
                    id="description"
                    onChange={handleChange}
                    value={Description} />
            </FormGroup>
            <FormGroup>
                <p>Choose an Icon for the Budget</p>
                <IconItem icons={IconList} radioStyle={radioStyle} handleChangeIcon={handleChangeIcon} section="budgets"></IconItem>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" onChange={handleChange} /> This is a monthly budget
                </Label>
            </FormGroup>
            <hr></hr>
            <Button color="primary" type="submit" onClick={handleSubmit} style={{ marginRight: "1rem" }}>{props.edit ? "Update" : "Create"}</Button>
            <Button color="secondary" onClick={props.toggle} style={{ marginRight: "1rem" }}>Cancel</Button>
        </Form >
    )
}


export default AddBudget