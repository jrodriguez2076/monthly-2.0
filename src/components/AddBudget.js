import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import IconItem from './IconItem';

const AddBudget = (props) => {

    useEffect(() => {
        getIcons();
    }, []);

    const [Amount, setAmount] = props.item ? useState(props.item.amount) : useState(0)
    const [Name, setName] = props.item ? useState(props.item.name) : useState('')
    const [Description, setDescription] = props.item ? useState(props.item.description) : useState('')
    const [Icon, setIcon] = props.item ? useState(props.item.icon) : useState("house.svg")
    const [IconList, setIconList] = useState([]);
    const [Monthly, setMonthly] = useState(false);



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
        try {
            console.log(` from input: ${event.target.value}`);
            setIcon(IconList[event.target.value]);
        } catch {
            setIcon(IconList[event]);
            console.log(`from clicking image: ${event}`);
        }
    }

    const handleChangeMonthly = (event) => {
        setMonthly(!Monthly)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = {}
        let budgetRequest = {};
        let notifInfo = {};

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
                console.log(res);
                props.toggle();

                if (res.status >= 200 && res.status < 400) {
                    props.notifData(notifInfo)
                    props.showToastMessage();
                }
            })

        if (!props.fromHome) {
            props.update();
        }
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
                console.log(`data received: ${data}`)
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
                    onChange={handleChangeName}
                    value={Name} />
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
                <IconItem icons={IconList} radioStyle={radioStyle} handleChangeIcon={handleChangeIcon}></IconItem>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" onChange={handleChangeMonthly} /> This is a monthly budget
                </Label>
            </FormGroup>
            <hr></hr>
            <Button color="primary" type="submit" onClick={handleSubmit}>{props.edit ? "Update" : "Create"}</Button>
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
        </Form >
    )
}


export default AddBudget