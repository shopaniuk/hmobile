import React from "react";
import classes from "./AboutPage.module.css";
import HomeCarousel from "../../components/HomeCarousel";
import { ChevronLeft, ChevronRight, KeyboardArrowDown, Star, StarOutline, ShoppingCartOutlined } from "@material-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Image } from "react-bootstrap";
import AirPods from "../../../public/static/airPods.png";
import Runner from "../../../public/static/runner.png";
import Link from "next/link";
import ourMission1 from "../../../public/static/OurMission1.png";
import ourMission2 from "../../../public/static/OurMission2.png";
import theProduct from "../../../public/static/theProduct.png";

const AboutPage = () => {
  const {
    aboutContainer, title, ourMissionContainer, ourMissionLeft, ourMissionImage, ourMissionRight, ourMissionTitle, learnMore, productContainer, theProductImage, productRight, productTitle
  } = classes;
  return (
    <div className={aboutContainer}>
      <h1 className={title}>ABOUT</h1>
      <div className={ourMissionContainer}>
        <div className={ourMissionLeft}>
          <Image className={ourMissionImage} src={ourMission1}></Image>
          <Image className={ourMissionImage} src={ourMission2}></Image>
        </div>
        <div className={ourMissionRight}>
          <h2 className={ourMissionTitle}>OUR MISSION</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facili- sis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla fac- ilisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
          <Link id="learnMore" href="/" ><a className={learnMore}>LEARN MORE<ChevronRight style={{ fontSize: 40 }} /></a></Link>
        </div>

      </div>
      <div className={productContainer}>
        <Image className={theProductImage} src={theProduct} ></Image>
        <div className={productRight}>
          <h2 className={productTitle}>THE PRODUCT</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp- er suscipit lobortis nisl ut aliquip ex ea com-</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
