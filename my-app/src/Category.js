import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";


export default class Category extends Component {
  state = {
    category:[],
  };

componentDidMount()
{
  this.getCategory();
}

 getCategory =()=>
 {

  fetch("http://localhost:3003/category")
  .then(response=>response.json())
  .then(data=>this.setState({category:data}))

 }


  render() {
    return (
      <div>
     
        <ListGroup>
          {this.state.category.map((category) => (
            <ListGroupItem
            
             
            
              onClick={()=>this.props.getProducts(category.id)}
            
              
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
