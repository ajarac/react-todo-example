import React from "react";
import './Header.css';
import Navbar from "react-bootstrap/Navbar";

function Header(props) {
    return (
        <Navbar bg="light">
            <Navbar.Brand>App TODO ({props.count})</Navbar.Brand>
        </Navbar>
    )
}

export default Header;
