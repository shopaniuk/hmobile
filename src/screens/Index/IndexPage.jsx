import React from "react";
import classes from "./IndexPage.module.css";
import HomeCarousel from "../../components/HomeCarousel";
import { faChevronLeft, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Image } from "react-bootstrap";
import AirPods from "../../../public/static/airPods.png";
import Runner from "../../../public/static/runner.png";

const IndexPage = () => {
  return (
    <div className={classes.indexContainer}>
      {/* <HomeCarousel /> */}
      <div className={classes.carouselContainer}>
        <FontAwesomeIcon className={classes.chevron} size="lg" icon={faChevronLeft} />
        <div className={classes.carouselItem}>
          <Image className={classes.carouselImage} src={AirPods} />
          <div className={classes.carouselText}>
            <h1>Lorem ipsum dolor sit</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
          </p>
            <Button className={classes.buyButton}>BUY PRODUCT</Button>
          </div>
        </div>

        <FontAwesomeIcon className={classes.chevron} size="lg" icon={faChevronRight} />
      </div>
      <div className={classes.learnMore}>
        <h1>SCROLL TO LEARN MORE</h1>
        <FontAwesomeIcon className={classes.chevron} size="2x" icon={faChevronDown} />
      </div>
      <h1 className={classes.productTitle}>Our Products</h1>
      <div className={classes.productsContainer}>
        <Image className={classes.runnerImage} src={Runner} />
        <div className={classes.productText}>
          <h4>pick your device</h4>
          <div className={classes.deviceSelection}>
            <h2>PHONE</h2>
            <h2 style={{ marginLeft: "15px", marginRight: "15px" }}>|</h2>
            <h2> TABLET</h2>
          </div>
          <h1>INFINITY</h1>
          <p>
            <span className={classes.features}>FEATURES - </span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </p>
          <p>
            <span className={classes.features}>FEATURES - </span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </p>
          <p>
            <span className={classes.features}>FEATURES - </span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </p>
          <Button className={classes.buyButton}>BUY PRODUCT</Button>
        </div>
      </div>
      <div className={classes.viewAll}>
        <h1>VIEW ALL PRODUCTS</h1>
        <FontAwesomeIcon className={classes.chevron} size="lg" icon={faChevronRight} />
      </div>
      <div className={classes.customerReviewContainer}>
        
      </div>
    </div>
  );
};

export default IndexPage;
