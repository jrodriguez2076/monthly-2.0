import React from 'react';
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
    return <div>
        <Navbar className="bg-dark">
            <NavbarBrand className="text-white" href="/">Joc</NavbarBrand>
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
                    <NavLink className="text-light" href="/">Goals</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
}

export default NavSection;