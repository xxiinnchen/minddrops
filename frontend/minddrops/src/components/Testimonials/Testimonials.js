import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import TestimonialsBox from "./TestimonialsBox";

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          // image: "assets/images/testimonials/user-2.jpg",
          title: "John ",
          subTitle: "Cornell Tech Student",
          desc:
            "Peers have similar fears about graduation. I’m not alone in my struggles.",
        },
        {
          // image: "assets/images/testimonials/user-1.jpg",
          title: "Ron",
          subTitle: "Cornell Tech Student",
          desc:
            "It’s just nice to network with others and share experiences and views, fun convo overall!",
        },
        {
          title: "Theresa",
          subTitle: "Cornell Tech Student",
          desc:
            "Paid services are great too! Highly recommend!",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="testi">
          <Container>
            {/* section title */}
            <SectionTitle
              title="WHAT THEY'VE SAID"
              desc="Check out some feedback from our long time users."
            />

            <Row className="mt-5">
              <TestimonialsBox clients={this.state.clients} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonials;
