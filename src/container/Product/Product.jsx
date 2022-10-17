import React, { Component } from "react";
import { Fragment } from "react";
import CardProduct from "./CardProduct";
import "./Product.css";
import "./CardProduct.jsx";

class Product extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <p>Product Pages</p>
        <hr />
        <div className="header">
          <div className="logo">
            <img
              src="https://w7.pngwing.com/pngs/17/58/png-transparent-web-development-responsive-web-design-e-commerce-business-ecommerce-blue-angle-web-design.png"
              alt=""
            />
          </div>
          <div className="troley">
            <img
              src="https://w7.pngwing.com/pngs/17/58/png-transparent-web-development-responsive-web-design-e-commerce-business-ecommerce-blue-angle-web-design.png"
              alt=""
            />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />{" "}
        {/*Ini jadi child component */}
      </Fragment>
    );
  }
}

export default Product;
