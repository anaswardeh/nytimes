import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";


class NoMatch extends React.Component {

  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>404 Page Not Found</h1>
              <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                  🙄
                </span>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default NoMatch;
