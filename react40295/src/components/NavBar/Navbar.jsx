import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./navbar.css";

function NavBar () {
    let activeStyle = {
        color:"yellow",
        textDecoration: "underline",
    };
    
    return (
    <nav className="nav-menu">
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/">Inicio</NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/category/reel">Reel</NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/category/caña">Caña</NavLink>
        <CartWidget/>
    </nav>
);
}

export default NavBar;