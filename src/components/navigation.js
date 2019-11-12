import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import logo from '../assets/graphics/logoSM.svg';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollPosition: window.pageYOffset,
            visible: true
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // method to hide/show navbar on scroll down/up
    handleScroll = () => {
        const { prevScrollPosition } = this.state;

        const currentScrollPosition = window.pageYOffset;
        const visible = prevScrollPosition > currentScrollPosition;

        this.setState({
            prevScrollPosition: currentScrollPosition,
            visible
        });
    }

    render() {
        return (
            <nav
                className={classnames("navbar", {
                    "navbar--hidden": !this.state.visible
                })}
            >
                <div id="nav-logo">
                    <NavLink to="/">
                        <img src={logo} alt="Jenna Michaels Logo" />
                    </NavLink>
                </div>
                <ul id="menu">
                    <li><NavLink to="/work" activeClassName="chosen">work</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="chosen">contact</NavLink></li>
                </ul>
            </nav>
        );
    }
}