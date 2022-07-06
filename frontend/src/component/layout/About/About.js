import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import MyPic from "../../Home/Images/me.jpg"
import GitHub from "@material-ui/icons/GitHub";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={MyPic}
              alt="Founder"
            />
            <Typography>Md.Anwar Hossain</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
             Hello my name is "MD.ANWAR HOSSAIN ''. I'm a full Stack Web Developer & I am enthusiastic, dedicated. Have more than 2+ years of experience in the field of Web Design & Web Development.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.facebook.com/profile.php?id=100012162525468"
              target="blank"
            >
              <Facebook className="youtubeSvgIcon" />
            </a>

            <a href="https://github.com/anwarhossainbd/-Mern_Ecommerce_one" target="blank">
              <GitHub className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
