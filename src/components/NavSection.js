import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

function NavSection(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen)

    return <div>
        <Navbar className="bg-dark" dark expand="lg">
            <NavbarBrand className="text-white" href="/">
                <img src="/img/icon/logo.png" style={{ width: "3rem", height: "3rem" }}></img>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNav} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto">
                    <NavItem>
                        <Link to="/expenses">
                            <p>expenses</p>
                            {/* <NavLink className="text-light">Expenses</NavLink> */}
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/incomes">
                        <p>incomes</p>
                            {/* <NavLink className="text-light">Incomes</NavLink> */}
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/budgets">
                        <p>budgets</p>
                            {/* <NavLink className="text-light">Budgets</NavLink> */}
                        </Link>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-light" href="/">Goals!</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
}

export default NavSection;