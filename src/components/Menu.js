import React, { useState } from 'react';
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import logo from '../img/white-logo.png'
import styles from '../styles/style.module.css'

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand="md" fixed="top" className={styles.menu}>
            <NavbarBrand href="/">
                <img src={logo} alt="at digital logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="justify-content-end">
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/" className={styles.link}>SERVICES</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/" className={styles.link}>ABOUT US</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/" className={styles.link}>CONTACT US</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/" className={styles.link}>CAREERS</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Menu;
