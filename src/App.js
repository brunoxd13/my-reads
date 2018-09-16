import React, { Component } from "react";

import "antd/dist/antd.css";

import BookShelfs from "./components/bookShelfs"

import "./App.js"

class App extends Component {
  render() {
    return (
      <div>
	  	  <BookShelfs />
	    </div>
    );
  }
} 

export default App;
