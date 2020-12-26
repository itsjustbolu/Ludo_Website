import React from "react";
import Button from "react-bootstrap/Button";
// import Carousel from "react-bootstrap/Carousel";
import "./HomePage.css";
import BackgroundSlider from "react-background-slider";
import image1 from "../../src/images/home/ludo_home_background.jpg";
import image2 from "../../src/images/home/ludo_home_background_2.jpg";
// import image3 from "../../src/images/home/ludo_home_background_3.jpg";

function Home() {
  return (
    <div className="home_container">
      <div className="slider_text_container">
        <div className="slider_title">
          <h2>Your New Home Awaits 🏠 </h2>
        </div>
        <div className="slider_text">
          Find out more About Us and Our Listings
        </div>
        <div className="slider_button">
          <Button className="button" href="/about" variant="primary">
            About Us
          </Button>{" "}
          <Button className="button" href="/listings" variant="primary">
            Listings
          </Button>
        </div>
      </div>
      <BackgroundSlider images={[image1, image2]} duration={5} transition={0} />
    </div>
  );
}

export default Home;
