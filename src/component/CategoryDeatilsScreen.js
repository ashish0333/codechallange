import React, { Component } from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";

export default class CategoryDeatilsScreen extends Component {
  render() {
    return (
      <>
        <div>
          
          <Container>
            <Row>
              {this.props.selectSubcat != null
                ? this.props.selectSubcat.map((item,index) => {
                    return (
                      <Col xs={12} md={3} lg={3} key={index}>
                        <Card style={{ width: "18rem" }}>
                          <Card.Img
                            variant="top"
                              src={require(`../assest/category/subcategory/${item.image}`).default}
                          />
                          <Button
                            variant="primary"
                            onClick={() =>
                              this.setSubCategory(item.subcategories)
                            }
                          >
                            {item.name}
                          </Button>
                        </Card>
                      </Col>
                    );
                  })
                : ""}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
