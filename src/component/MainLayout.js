import React, { Component } from "react";
import Header from "./Header";
import api from "../api/api";
import WelcomeRental from "./WelcomeRental";

export default class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: [],
      selectedLocation: null,
      selcetcatbylocation: null,
      flage: false,
    };
  }
  componentDidMount() {
    this.getLocations();
  }
  getLocations = async () => {
    const response = await api.get("/data");
    console.log(response.data.locations);
    this.setState({
      location: response.data.locations,
    });
  };
  setLocation = (value) => {
    this.setState(
      {
        selectedLocation: value,
      }
    );
  };
  updateFlage =(value)=>{
      this.setState({
        flage: value,
      })
  }
  render() {
    return (
      <div>
        <Header location={this.state.location} setLocation={this.setLocation} updateFlage={this.updateFlage}/>
        <WelcomeRental
          locationValue={this.state.selectedLocation}
          data={this.state.location}
          flage={this.state.flage}
          updateFlage={this.updateFlage}
        />
      </div>
    );
  }
}
