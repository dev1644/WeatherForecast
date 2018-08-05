import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart.js";
import MyMapComponent from "../components/google-maps";
import styled from "styled-components";

const StyledTd = styled.td`
  height: 10%;
  width: 11%;
  border: 1px;
  border: none;
  border-radius: 3px;
  color: palevioletred;
`;

class WeatherList extends Component {
  renderWeather = cityData => {
    const name = cityData.city.name;
    const temps = _.map(
      cityData.list.map(weather => {
        return weather.main.temp;
      }),
      temp => temp - 273
    );
    const press = cityData.list.map(weather => {
      return weather.main.pressure;
    });
    const humid = cityData.list.map(weather => {
      return weather.main.humidity;
    });

    const { lon, lat } = cityData.city.coord;
    return (
      <tr key={name} style={{ marginTop: "20px", marginBottom: "20px" }}>
        <StyledTd>{name}</StyledTd>
        <StyledTd>
          <MyMapComponent lon={lon} lat={lat} />
        </StyledTd>
        <StyledTd>
          <Chart data={temps} color={"red"} units="C" />
        </StyledTd>
        <StyledTd>
          <Chart data={press} color={"grey"} units="hpa" />
        </StyledTd>
        <StyledTd>
          <Chart data={humid} color={"teal"} units="%" />
        </StyledTd>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr >
            <th>City</th>
            <th>Maps</th>
            <th>Temperature (Celsius)</th>
            <th>Pressure (hpa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
