import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import AddExpense from './AddExpense';
import AddIncome from './AddIncome';
import AddBudget from './AddBudget';
import Confirm from './Confirm';

const GenericModal = (props) => {
    const {
      buttonLabel,
      className
    } = props;

    return (
      <div>
        <Modal isOpen={props.modal} toggle={props.toggle} className={className}>
    <ModalHeader toggle={props.toggle}>Add new {props.type}</ModalHeader>
          <ModalBody>
          {props.type == 'expense'? <AddExpense {...props} update={props.updateExpenses} section="expenses"></AddExpense>: null }
          {props.type == 'income'? <AddIncome {...props} update={props.updateIncomes}></AddIncome>: null }
          {props.type == 'budget'? <AddBudget {...props} update={props.updateBudgets} section="budgets"></AddBudget>: null }
          {props.type == 'confirm'? <Confirm {...props}></Confirm>: null }
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={props.update}>GET THEM BUDGETS!</Button>{' '}
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
  
  export default GenericModal;