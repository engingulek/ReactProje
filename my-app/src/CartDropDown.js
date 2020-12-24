import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,Badge,NavItem } from 'reactstrap';
import { Link } from "react-router-dom";
export default class CartDropDown extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown  >
      <DropdownToggle  color="success" >
      <Badge color="primary">0</Badge>
      
        Dropdown
        
      </DropdownToggle>
      <DropdownMenu>
      {/* {this.props.children.newCartList.map((addProduct)=>(
        <DropdownItem key={addProduct.productId} >
        {addProduct.productName}
        </DropdownItem>


      ))} */}
      
        <DropdownItem divider />
         
      </DropdownMenu>
    </UncontrolledDropdown>
            </div>
        )
    }
}
