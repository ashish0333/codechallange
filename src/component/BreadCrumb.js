import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";

export default class BreadCrumb extends Component {
  fn = (data) => {
    this.props.updateFlage(data);
  };
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item active>Equipment Catlog</Breadcrumb.Item>
          {this.props.flageForsubcategory !== false ? (
            <Breadcrumb.Item>
              {this.props.categoriesNameforbreadCrum !== null
                ? this.props.categoriesNameforbreadCrum
                : ""}
            </Breadcrumb.Item>
          ) : (
            ""
          )}
        </Breadcrumb>
      </div>
    );
  }
}
