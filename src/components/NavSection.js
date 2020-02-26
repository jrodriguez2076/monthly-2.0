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
                        <Link className="text-light nav-link" to="/expenses"> Expenses
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="text-light nav-link" to="/incomes"> Incomes
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="text-light nav-link" to="/budgets"> Budgets
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="text-light nav-link" to="/users"> Users
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
}

export default NavSection;