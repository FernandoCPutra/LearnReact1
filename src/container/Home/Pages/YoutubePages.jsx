import React, { Component, Fragment } from "react";
import YoutubeComponent from "../../../component/YoutubeComponent/YoutubeComponent";

class YoutubePages extends Component {
  render() {
    return (
      <Fragment>
        <p>Youtube Pages</p>
        <hr />
        <YoutubeComponent time="10.00" title="Images 1" desc="Gunung 1" />
        <YoutubeComponent time="06.00" title="Images 2" desc="Gunung 2" />
        <YoutubeComponent time="18.00" title="Images 3" desc="Gunung 3" />
        <YoutubeComponent time="19.00" title="Images 4" desc="Gunung 4" />
      </Fragment>
    );
  }
}

export default YoutubePages;