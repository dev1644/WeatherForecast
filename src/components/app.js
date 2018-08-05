import React, { Component } from "react";
import SearchBar from "../containers/search-bar";
import "../../style/style.css";
import WeatherList from "../containers/weather-list";

export default class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "70px",
            backgroundColor: "brown",
            fontSize: "25px",
            display: "flex",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            opacity: ".6"
          }}
        >
          List of Average Weather Conditions of cities.
        </div>
        <SearchBar />

        <WeatherList />
      </div>
    );
  }
}
