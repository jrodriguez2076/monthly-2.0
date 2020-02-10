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
          {props.type == 'expense'? <AddExpense toggle={props.toggle} update={props.updateExpenses} fromHome={props.fromHome} edit={props.edit} item={props.item}></AddExpense>: null }
          {props.type == 'income'? <AddIncome toggle={props.toggle} update={props.updateIncomes} fromHome={props.fromHome} edit={props.edit} item={props.item}></AddIncome>: null }
          {props.type == 'budget'? <AddBudget toggle={props.toggle} update={props.updateBudgets} fromHome={props.fromHome} edit={props.edit} item={props.item}></AddBudget>: null }
          {props.type == 'confirm'? <Confirm toggle={props.toggle} action={props.action} item={props.item}></Confirm>: null }
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