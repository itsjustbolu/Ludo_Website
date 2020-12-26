import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_uMXc9IqogkmJxBWK1YG5N");

const ApplyPage = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_epr7vpr",
        "template_jzdy9oi",
        e.target,
        "user_uMXc9IqogkmJxBWK1YG5N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    var squarePaymentLink =
      "https://checkout.square.site/pay/e23fe7ef636948e19796f611a352675c";

    window.location.href = squarePaymentLink;
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div>
              <h2>Apply</h2>
            </div>{" "}
            <Form>
              <form
                className="contact-form"
                id="form_container"
                onSubmit={sendEmail}
              >
                <h3>PERSONAL INFO</h3>
                <label>Name</label>
                <input type="text" name="name" required />

                <label>Current Address</label>
                <input type="text" name="curr-address" required />

                <label>Current City, State, Zip Code</label>
                <input type="text" name="curr-city-state-zip" required />

                <label>Phone Number</label>
                <input type="number" name="phone-number" required />

                <label>Email</label>
                <input type="email" name="email" required />

                <label>Date of Birth</label>
                <input type="date" name="dob" required />

                <label>Social Sec Num</label>
                <input
                  type="number"
                  name="ssn"
                  placeholder="Please enter SSN with no hyphens"
                  required
                />

                <label>Drivers License #</label>
                <input
                  type="text"
                  name="drivers-license"
                  placeholder="Please include state of issue"
                  required
                />

                <label>Which of our properties are you applying for?</label>
                <select
                  name="property_application"
                  placeholder="Choose..."
                  required
                >
                  <option selected>Please choose one...</option>
                  {/* <option value="3801 Kazak St, Garland, TX 75041">
                      3801 Kazak St, Garland, TX 75041
                    </option>
                    <option value="820 Foxboro Ln, Dallas, TX 75216">
                      820 Foxboro Ln, Dallas, TX 75216
                    </option> */}
                  <option value="714 Westmount Ave, Dallas, TX 75211">
                    714 Westmount Ave, Dallas, TX 75211
                  </option>
                </select>

                <label>When would you like to move in?</label>
                <input type="date" name="expected-move-in-date" required />

                <label>Move-in Date (at current address)</label>
                <input type="date" name="current-address-move-in" required />

                <label>Move-out Date (at current address)</label>
                <input type="date" name="current-address-move-out" required />

                <label>Current Landlord</label>
                <input type="text" name="current-landlord" required />

                <label>Current Landlord Phone </label>
                <input type="number" name="current-landlord-phone" required />

                <label>Current Monthly Rent/Mortgage </label>
                <input type="number" name="current-rent" required />

                <label>Reason for Leaving </label>
                <textarea rows="5" name="reason-for-leaving" required />

                <label>Other Occupants </label>
                <textarea
                  rows="5"
                  name="other-occupants"
                  placeholder="Please list the names and birthday of all additional occupants"
                  required
                />

                <h3>PETS</h3>
                <label>Do you have pets? If so, how many?</label>
                <input type="text" name="have-pets" required />

                <label>Pet Info </label>
                <textarea
                  rows="5"
                  name="pet-info"
                  placeholder="Please list the pet breeds, ages, and weights"
                />

                <h3>EMPLOYMENT & INCOME INFO</h3>

                <label>Occupation </label>
                <input type="text" name="occupation" required />

                <label>Employer </label>
                <input type="text" name="employer" required />

                <label>Employer Address</label>
                <input type="text" name="employer-address" required />

                <label>Employer Phone</label>
                <input type="number" name="employer-phone" required />

                <label>Monthly Income </label>
                <input type="text" name="monthly-salary" required />

                <label>Start Date </label>
                <input type="date" name="occupation-start-date" required />

                <h3>QUESTIONNAIRE</h3>
                <div>Please answer Yes or No to the questions below:</div>
                <ul>
                  <li>
                    Will any waterbeds or water-filled furniture be on the
                    Property? <input type="text" />
                  </li>
                  <li>
                    Does anyone who will occupy the Property smoke?{" "}
                    <input type="text" />
                  </li>
                  <li>
                    Will Applicant maintain renter’s insurance?{" "}
                    <input type="text" />
                  </li>
                  <li>
                    Has applicant ever been evicted? <input type="text" />
                  </li>
                  <li>
                    Has applicant ever been asked to move out by landlord?{" "}
                    <input type="text" />
                  </li>
                  <li>
                    Has applicant breached a lease or rental agreement?{" "}
                    <input type="text" />
                  </li>
                  <li>
                    Has applicant ever filed for bankruptcy?{" "}
                    <input type="text" />
                  </li>
                  <li>
                    Has applicant ever lost a property in foreclosure?{" "}
                    <input type="text" />
                  </li>
                  <li>
                    Has applicant ever had any credit problems, including any
                    outstanding debt (e.g., student loans or medical bills),
                    slow-pays or delinquencies? <input type="text" />
                  </li>
                  <li>
                    Has applicant ever been convicted of a crime? If yes,
                    provide the location, year, and type of conviction.{" "}
                    <input type="text" />
                  </li>
                  <li>
                    Is any occupant a registered sex offender? If yes, provide
                    the location, year, and type of conviction.{" "}
                    <input type="text" />
                  </li>
                  <li>
                    Is there additional information Applicant wants considered?{" "}
                    <input type="text" />
                  </li>
                </ul>

                <h3>REFERENCES</h3>
                <label>Reference Info </label>
                <textarea
                  rows="5"
                  name="references"
                  placeholder="Please enter the name, address and phone number of at least 1 reference."
                  required
                />

                <h3>AUTHORIZATION</h3>

                <label for="credit-check-acknowledgement">
                  Applicant authorizes Landlord and Landlord’s agent, at any
                  time before, during, or after any tenancy, to: (1) obtain a
                  copy of Applicant’s credit report; (2) obtain a criminal
                  background check related to Applicant and any occupant; and
                  (3) verify any rental or employment history or verify any
                  other information related to this application with persons
                  knowledgeable of such information.
                </label>
                <input
                  type="checkbox"
                  name="credit-check-acknowledgement"
                  value="By checking this box, I authorize the verification of the
                    information provided on this form as to my credit and
                    employment."
                  required
                />

                <label for="reference-check-acknowledgement">
                  Notice of Landlord’s Right to Continue to Show the Property:
                  Unless Landlord and Applicant enter into a separate written
                  agreement otherwise, the Property remains on the market until
                  a lease is signed by all parties and Landlord may continue to
                  show the Property to other prospective tenants and accept
                  another offer.
                </label>
                <input
                  type="checkbox"
                  name="reference-check-acknowledgement"
                  value="By checking this box, I acknowledge the notice."
                  required
                />

                <label for="reference-check-acknowledgement">
                  By checking this box, I authorize the verification of the
                  reference(s).
                </label>
                <input
                  type="checkbox"
                  name="reference-check-acknowledgement"
                  value="By checking this box, I authorize the verification of the
                    reference(s)"
                  required
                />
                <hr></hr>
                <p id="app-fee">APPLICATION FEE: $50</p>
                <p id="instruction">
                  After submitting your application, you will be redirected to
                  our payments page to pay the non-refundable application fee.
                  We can not process your application if the application fee is
                  not paid.
                  <br></br>
                  Thank you again for your interest in our property. We will be
                  in touch soon.
                </p>
                <br></br>
                <input className="submit_button" type="submit" value="SUBMIT" />
                <br></br>
                <br></br>
              </form>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ApplyPage;
