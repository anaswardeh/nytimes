import React from "react";
import "./Banner.css";
import image from "./nyt-header.svg"
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";


class Banner extends React.Component {
    render () {
      return (

    <div>
        <div
          className="logo"
          style={{ backgroundImage: `url(${image})`
        }}
        >
        </div >

        <div className="slogan">
            <h2> All the News That's Fit to Print </h2>
        </div>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1 id="headerTitle">Search and Annotate Articles of Interest</h1>
        </Col>
      </Row>
      </Container>

    </div>

      );
    }
  }
  

  export default Banner;
  