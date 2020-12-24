import React, { Component } from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Nav, NavItem, NavLink
} from "reactstrap";

import "./Header.css";

export default class Header extends Component {

  handleChange=(e)=>
  {
e.preventDefault();

  }


  render() {
    return (
      <div>
        <form>
          <div className="form-row mb-5">
            <div className="col-2">
              <h3>LIVE STORE</h3>
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search a movie"
              />
            </div>

            <div className="col-2">
              <UncontrolledDropdown>
                <DropdownToggle color="success">
                  <Badge color="primary">{this.props.count}</Badge>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu>
                  {this.props.newCartList.map((cartItem) => (
                    <DropdownItem key={cartItem.productId}>
                      {cartItem.productName}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>

            <div className="col-2">
            <Nav>
        <NavItem>
          <NavLink to="cartlist">Link</NavLink>
        </NavItem>
        </Nav>
            
            </div>
          </div>
        </form>
      </div>
    );
  }
}
