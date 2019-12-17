import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import AddExpense from './AddExpense';
import AddIncome from './AddIncome';
import AddBudget from './AddBudget';

const GenericModal = (props) => {
    const {
      buttonLabel,
      className
    } = props;

    return (
      <div>
        {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
        <Modal isOpen={props.modal} toggle={props.toggle} className={className}>
    <ModalHeader toggle={props.toggle}>Add new {props.type}</ModalHeader>
          <ModalBody>
          {props.type == 'expense'? <AddExpense></AddExpense>: null }
          {props.type == 'income'? <AddIncome></AddIncome>: null }
          {props.type == 'budget'? <AddBudget></AddBudget>: null }
            {/* <AddExpense></AddExpense> */}
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
  export default GenericModal;