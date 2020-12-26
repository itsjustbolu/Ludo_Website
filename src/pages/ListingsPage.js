import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './ListingsPage.css'
import WestmountHeader from '../images/properties/714_westmount/714 Westmount Ave Dls_header.jpg'

function ListingsPage() {
  return <div>
      <Container>
        <Row>
          <Col>
            <div>
              <h2>Listings</h2>
            </div>{" "}
            <div>
            
                <Card className="card">
                  <Card.Img variant="top" src={WestmountHeader} />
                  <Card.Body>
                    {/* <Button variant="warning">For Rent</Button> */}
                    <Card.Header text="danger" className="listing_status">
                      Available Nov 23, 2020.
                    </Card.Header>
                    <br />
                    <Card.Title>714 Westmount Ave, Dallas, TX 75211</Card.Title>

                    <Card.Text>
                      A stunning 3 bedroom, 2 bath, 1417 sq ft home with a large
                      yard in the heart of Oak Cliff, located 10 minutes from
                      downtown Dallas.
                    </Card.Text>

                    <Button variant="primary" href="/listings/714-westmount-ave-dallas-tx">

                      Learn more...
                    </Button>
                  </Card.Body>
                </Card>
              
            </div>
          </Col>
        </Row>
      </Container>
  </div>;
}

export default ListingsPage;
