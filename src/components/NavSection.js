import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <img src="/img/icon/money_13.png" style={{ width: "3rem", height: "3rem" }}></img>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNav} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto">
                    <NavItem>
                        <NavLink className="text-light" href="/">Expenses</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-light" href="/">Incomes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-light" href="/">Budgets</NavLink>
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