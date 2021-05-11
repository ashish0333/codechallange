import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import CategoryDeatilsScreen from "./CategoryDeatilsScreen";

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorydata: null,
      selectSubcat: null,
      categoriesNameforbreadCrum: null,
    };
  }
  componentDidMount() {
    this.selectcat(this.props.selectedlocationValue);
  }
  componentWillReceiveProps(props) {
    this.selectcat(props.selectedlocationValue);
  }
  selectcat = (value) => {
    const Value =
      this.props.data !== null
        ? this.props.data.filter((item) => item.name.indexOf(value) !== -1)
        : "";
    this.setState({
      categorydata: Value[0].branches,
    });
  };
  setSubCategory = (data) => {
    this.setState({
      selectSubcat: data,
    });
    this.props.updateFlage(true);
  };
  render(props) {
    return (
      <div>
        {this.props.flage === false ? (
          <BreadCrumb flageForsubcategory={this.props.flage} />
        ) : (
          <BreadCrumb categoriesNameforbreadCrum={this.state.categoriesNameforbreadCrum} updateFlage={this.props.updateFlage}/>
        )}
        {this.props.flage === false ? (
          <div>
            <Container>
              <Row>
                {this.state.categorydata != null
                  ? this.state.categorydata.map((item) => {
                      return item.categories.map((categoriesName, index) => {
                        return (
                          <Col xs={12} md={3} lg={3} key={index}>
                            <Card style={{ width: "18rem" }}>
                              <Card.Img
                                variant="top"
                                src={
                                  require(`../assest/category/${categoriesName.image}`)
                                    .default
                                }
                              />
                              <Button
                                variant="primary"
                                onClick={() => {
                                  this.setSubCategory(
                                    categoriesName.subcategories
                                  );
                                  this.setState({
                                    categoriesNameforbreadCrum:
                                      categoriesName.name,
                                  });
                                }}
                              >
                                {categoriesName.name}
                              </Button>
                            </Card>
                          </Col>
                        );
                      });
                    })
                  : ""}
              </Row>
            </Container>
          </div>
        ) : (
          ""
        )}
        {this.props.flage === true ? (
          <CategoryDeatilsScreen
            selectSubcat={this.state.selectSubcat}
            updateFlage={this.props.updateFlage}
            categoriesNameforbreadCrum={this.state.categoriesNameforbreadCrum}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
