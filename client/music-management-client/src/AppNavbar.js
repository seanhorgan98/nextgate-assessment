import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Music Management</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav pullleft="true">
          <NavItem>
            <NavLink href="/search">Search</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/insert">Insert</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/seanhorgan98">GitHub</NavLink>
          </NavItem>
          <NavItem>
            <Button bsstyle="primary">Login</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>;
  }
}