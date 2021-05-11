import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button, NavDropdown, Nav, Form, FormControl } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: null,
    };
  }
  render() {
    const { location } = this.props;
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Rental Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="d-flex">
            <Nav
              className="mr-auto my-2 my-lg-0 d-flex"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title={this.state.selectedLocation === null?"Select Location":this.state.selectedLocation} id="navbarScrollingDropdown">
                {location.map((item, index) => {
                  return (
                    <>
                      <NavDropdown.Item  key={index} onClick={()=>{this.props.setLocation(item.name);this.setState({selectedLocation:item.name});this.props.updateFlage(false)}}>
                        {item.name}
                      </NavDropdown.Item>
                    </>
                  );
                })}
              </NavDropdown>
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
