import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function LoginPage() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <h2>Login</h2>
            </div>{" "}
            <div>
              <div className="logins">
                <div>Tenants</div>
                <Button href="https://rentcafe.com" variant="primary">
                  Tenant Login
                </Button>
              </div>
              <div className="logins">
                <div>Owners</div>
                <Button
                  href="https://100093342.breeze.cafe/owner/content/login#/appaccess/login"
                  variant="primary"
                >
                  Owners Login
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
