import React, { Component } from "react";

import "antd/dist/antd.css";

import BookShelves from "./components/bookShelves"

import "./App.js"

class App extends Component {
  render() {
    return (
      <div>
	  	  <BookShelves />
	    </div>
    );
  }
} 

export default App;
