import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
componentDidMount(){
  this.props.fetchWeather("Delhi");
}
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ""
    });
  };

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group"
        style={{ marginTop: "20px", marginBottom: "10px" }}
      >
        <input
          placeholder="Get a Five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className=" input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

//This Funtion ensures that the action is Flowed Down to the actionCreator
//to Action Reducer
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

//we have passed null becasue mapDispatchToPRops will always be passed as
//Second Argument
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
