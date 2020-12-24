import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import { Media, Badge } from "reactstrap";

export default class CartList extends Component {

 

   


  render() {
    const imageStyle = {
      maxHeight: 128,
      maxWidth: 128,
    };
    return (
      <div>
        <Container>
        <Row>

        
          <Col xs="8">
            {this.props.newCartList.map((addProduct) => (
              <Media key={addProduct.productId}>
                <Media left>
                  <Media
                    style={imageStyle}
                    object
                    src={addProduct.productUrl}
                  />
                </Media>
                <Media>
                  <Media heading>{addProduct.productName}</Media>

                  <Row>
                    {addProduct.productCount}
                    <Badge
                    onClick={()=>this.props.deleteaddProduct(addProduct.id)}
                    >X</Badge>
                  </Row>
                </Media>
              </Media>
            ))}
          </Col>

         
</Row>
        </Container>
      </div>
    );
  }
}
