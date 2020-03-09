import React, { useEffect, useState } from 'react';
import {
  Jumbotron, Container
} from 'reactstrap';
import { Redirect } from "react-router-dom";
import ActionButton from './ActionButton';
import UserItem from './UserItem';

const Users = (props) => {

  useEffect(() => getUsers(), [])

  const [CurrentUsers, setCurrentUsers] = useState([]);

  const getUsers = () => {
    fetch(`/api/users`)
      .then(data => {
        return data.json()
      }
      )
      .then(res => {
        setCurrentUsers([...res])
      })
  };

  return (
    sessionStorage.getItem('token') ?
      <div>
        <Jumbotron fluid className="row" style={{ backgroundColor: "#E3F6FF" }}>
          <Container fluid className="col-lg-4 offset-lg-4 text-center">
            <h1 className="display-3">Users</h1>
            <hr></hr>
          </Container>
        </Jumbotron>
        <div className="container">
          <UserItem users={CurrentUsers} updateUsers={getUsers}></UserItem>
        </div>
        <hr style={{ marginTop: "3rem", maxWidth: "50%" }}></hr>
        <div className="d-flex justify-content-center">
          <ActionButton Feature="user" updateUsers={getUsers}></ActionButton>
        </div>
      </div> : <Redirect to='/login'></Redirect>
  );
};

export default Users;