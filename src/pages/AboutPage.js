import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about_container">
      <Container>
        <Row>
          <Col>
            <div>
              <h2>About Ludo</h2>
            </div>{" "}
            <div>
              <p>
                Ludo Property Management is a full service real estate asset
                management firm that provides professional property management
                and construction management services.{" "}
              </p>
              <p>
                Since inception, our goal has been to provide our property
                owners and investors a hassle-free, transparent asset management
                experience from the day you sign with us. And for our tenants,
                we always strive to provide a beautiful, safe and inviting
                environment for you to call home.{" "}
              </p>
              <p>
                Are you a property owner interested in our services, or a renter
                interested in leasing one of our homes?{" "}
              </p>
              <p>
                Please feel free to reach out to us <a href="/contact">here</a>,
                or browse our current <a href="/listings">listings</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;
