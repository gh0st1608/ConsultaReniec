import React from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import './MainNavigation.css'

const MainNavigation = props => {
    return (
    <MainHeader>
        <button className="main-navigation__menu-btn">
            <span/>
            <span/>
        </button>
        <h1 className="main_navigation__title">
            <Link to="/">
                YourServices
            </Link>
        </h1>
        <nav>
            <NavLinks>
            </NavLinks>
        </nav>
    </MainHeader>
    )
}

export default MainNavigation