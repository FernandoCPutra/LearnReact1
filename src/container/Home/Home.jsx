import React, { Fragment } from "react";
import { Component } from "react";
import "../../component/YoutubeComponent/YoutubeComponent";
import Product from "../Product/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";
import { BrowserRouter, Routes, Switch, Route, Link } from "react-router-dom";
import "./Home.css";
import YoutubePages from "./Pages/YoutubePages";

class Home extends Component {
  state = {
    showComponent: true,
  };

  // componentDidMount(){
  //     setTimeout(() => {
  //         this.setState({
  //             showComponent:false
  //         })
  //     }, 15000);

  // }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="hhh">
            <p className="fcp">Fernando C Putra</p>
            <hr />
          </div>
          <div className="navigation">
            <Link to="/">Product</Link>
            <Link to="/blogpost">BlogPost</Link>
            <Link to="/ytpages">Youtube</Link>
            <Link to="/lcc">Life Cycke Comp</Link>
          </div>

          <Routes>
            <Route path="/" element={<Product />} />

            <Route path="/blogpost" element={<BlogPost />} />

            <Route path="/ytpages" element={<YoutubePages />} />

            <Route path="/lcc" element={<LifeCycleComp />} />
          </Routes>
        </Fragment>
        <div className="footer">
          <p>Fernando C Putra</p>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
