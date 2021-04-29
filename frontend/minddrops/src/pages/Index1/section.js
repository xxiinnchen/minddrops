import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from "../../components/common/ModalSection";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        <section
          className="section bg-home home-half"
          data-image-src="images/bg-home.jpg"
          id="home"
        >
          <div className="bg-overlay"></div>
          <div className="display-table">
            <div className="display-table-cell">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={8} className="text-white text-center">
                    <h1 className="home-title">
                    MindDrops
                    </h1>
                    <p className="pt-3 home-desc">
                    An anonymous chat room that allows students to share their feelings. 
                    Through MindDrops, student ambassadors who engage with counseling services 
                    can moderate group therapy sessions, and encourage other students to share their struggles.

                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="bg-pattern-effect">
            <img src="assets/images/bg-pattern.png" alt="MindDrops" />
          </div>
          {/* Render ModalSection Component for Modal */}
          <ModalSection ref="child" channel="vimeo" videoId="99025203" />
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
