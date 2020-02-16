import React, { useEffect, useState, useRef } from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardBody, Jumbotron, Container
} from 'reactstrap';

import BudgetItem from './BudgetItem'
import ActionButton from './ActionButton';
import ToastMessage from './ToastMessage';

const Budgets = (props) => {

  useEffect(() => {
    getBudgets();
  }, []);

  const [Budgets, setBudgets] = useState([{
    "name": "",
    "amount": 0,
    "description": "",
    "icon": "",
  },]);

  const [NotifData, setNotifData] = useState({
    "title": "",
    "message": "",
    "icon": ""
  })

  const [Expenses, setExpenses] = useState();
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = async () => {
    setShowToast(true);
  };

  const getBudgets = () => {
    let d = new Date();
    let month = d.getMonth() + 1
    fetch(`/api/budgets?month=${month}`)
      .then(data => {
        return data.json()
      }
      )
      .then(res => {
        setBudgets([...res]);
        getLatestExpenses();
      })
  };

  const getLatestExpenses = () => {
    let d = new Date();
    fetch(`/api/expenses?month=${d.getMonth() + 1}`)
      .then(data => { return data.json() }
      )
      .then(res => {
        setExpenses(res);
      })
  };



  return (
    <div>
      <ToastMessage 
      toastTitle={NotifData.title} 
      show={showToast} 
      hideToastMessage={() => setShowToast(false)}
      ToastMessage={NotifData.message}
      toastIcon={NotifData.icon}
      info={NotifData}>
      </ToastMessage>
      <Jumbotron fluid className="row" style={{ backgroundColor: "#CCCA8D" }}>
        <Container fluid className="col-lg-4 offset-lg-4 text-center">
          <h1 className="display-3">Budgets</h1>
          <hr></hr>
        </Container>
      </Jumbotron>
      <div className="container">
        <BudgetItem budgets={Budgets} expenses={Expenses} updateBudgets={getBudgets} showToastMessage={showToastMessage} notifData={setNotifData}></BudgetItem>
      </div>
      <hr style={{ marginTop: "3rem", maxWidth: "50%" }}></hr>
      <div className="d-flex justify-content-center">

        <ActionButton Feature="budget" updateBudgets={getBudgets} showToastMessage={showToastMessage} notifData={setNotifData}></ActionButton>
      </div>
    </div>
  );
};

export default Budgets;