import React, { Component } from "react";
import CategoryScreen from "./CategoryScreen";
import WelcomeScreen from "./WelcomeScreen";

export default class WelcomeRental extends Component {
  render(props) {
    return (
      <div>
        {this.props.locationValue === null || this.props.locationValue === undefined? (
          <WelcomeScreen />
        ) : (
          <>
            <CategoryScreen data={this.props.data} selectedlocationValue={this.props.locationValue} flage={this.props.flage} updateFlage={this.props.updateFlage}/>
          </>
        )}
      </div>
    );
  }
}
