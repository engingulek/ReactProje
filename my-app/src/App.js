import React from "react";
import Category from "./Category";
import { Row, Col, Container } from "reactstrap";
import Header from "./Header";
import axios from "axios";
import CardDesings from "./CardDesings";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CartList from "./CartList";

export default class App extends React.Component {
  state =    {
    product: [],
    categoryTitle: "",
    categoryId: "",
    newCartList:[],
    count: "",
            };

  componentDidMount() {
    this.getProducts();
    this.addProducttoCart();
  }
  getProducts = async (categoryId) => {
    let url = "http://localhost:3002/product";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    const response = await axios.get(url);
    this.setState({ product: response.data });
  };

  addProducttoJson = async (addProduct) => {
    this.addProducttoCart();
    let url = "http://localhost:3006/addProducts";
    //  axios.post(url,addProduct);
    // this.addProducttoCart();

    //const productName='ali';
    let newCart = this.state.newCartList;
    var addItem = newCart.find((c) => c.productId === addProduct.productId);
    if (addItem) {
      console.log("Bulunmaktadır " + addProduct.productId);

      //axios.put('http://localhost:3006/addProducts'+addProduct.productId)
    } else {
      axios.post(url, addProduct);
      this.addProducttoCart();
    }
  };

  addProducttoCart = async () => {
    let url = "http://localhost:3006/addProducts";
    const response = await axios.get(url);
    this.setState({ newCartList: response.data });
    this.setState({ count: this.state.newCartList.length });
  };

  deleteaddProduct =(id)=>{
    let newCart = this.state.newCartList.filter(
      (c) => c.id !==id
    );
    this.setState({ newCartList: newCart });
    
    
    
    
   

  }

  render() {
    return (
      <div>
        <Container>
          <Header
            newCartList={this.state.newCartList}
            count={this.state.count}
          />
          <Row>
            <Col xs="3">
              <h3>{this.state.categoryTitle}</h3>
              <Category
                getProducts={this.getProducts}
                filterProduct={this.filterProduct}
              />
            </Col>

            <Col xs="9">
              <BrowserRouter>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => (
                      <Row>
                        <CardDesings
                          {...props}
                          productList={this.state.product}
                          addProducttoJson={this.addProducttoJson}
                          newCartList={this.state.newCartList}
                        />
                      </Row>
                    )}
                  ></Route>

                  <Route
                    exact
                    path="/cartlist"
                    render={(props) => (
                      <CartList
                        {...props}
                        newCartList={this.state.newCartList} 
                        deleteaddProduct={this.deleteaddProduct}
                        
                      />
                    )}
                  ></Route>
                </Switch>
              </BrowserRouter>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//

//     </div>
//   );
// }

// export default App;
