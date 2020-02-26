import React, { useEffect, useState } from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Jumbotron, Container
} from 'reactstrap';

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

  // useEffect(() => getIncomes(), []);

  // const [Incomes, setIncomes] = useState([]);

  // const getIncomes = () => {
  //   let d = new Date();
  //   fetch(`/api/incomes`)
  //     .then(data => {
  //       return data.json()
  //     }
  //     )
  //     .then(res => {
  //       setIncomes([...res]);
  //     })
  // };

  // const usersMapper = CurrentUsers.map((item, i) => { return <h3 key={i}>{item.name}</h3> })

  return (
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
    </div>
  );
};

export default Users;