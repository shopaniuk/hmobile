import React from "react";
import classes from "./IndexPage.module.css";
import HomeCarousel from "../../components/HomeCarousel";
import { ChevronLeft, ChevronRight, KeyboardArrowDown, Star, StarOutline, ShoppingCartOutlined } from "@material-ui/icons";
import { Button, Image } from "react-bootstrap";
import Link from "next/link";
import AirPods from "../../../public/static/airPods.png";
import Runner from "../../../public/static/runner.png";

const IndexPage = () => {
  return (
    <div className={classes.indexContainer}>
      {/* <HomeCarousel /> */}
      <div className={classes.carouselContainer}>
        <ChevronLeft style={{ fontSize: 60 }} className={classes.chevron} />
        <div className={classes.carouselItem}>
          <Image className={classes.carouselImage} src={AirPods} />
          <div className={classes.carouselText}>
            <h1>Be Ready for Anything!</h1>
            <p>
            To offer you new ways to access your device that are comfortable, secure, and tailored to fit your lifestyle. Life can be complex, HuggyGear helps you simplify. Have it your way – anywhere, anytime. Be Ready for Anything!
          </p>
            <Link href="/infinity"><Button className={classes.buyButton}>BUY PRODUCT</Button></Link>
          </div>
        </div>

        <ChevronRight style={{ fontSize: 60 }} className={classes.chevron} />
      </div>
      <div className={classes.learnMore}>
        <h1>SCROLL TO LEARN MORE</h1>
        <KeyboardArrowDown style={{ fontSize: 60 }} className={classes.chevron} />
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
          <Link href="/infinity"><Button className={classes.buyButton}>BUY PRODUCT</Button></Link>
        </div>
      </div>
      <div className={classes.viewAll}>
        <h1>VIEW ALL PRODUCTS</h1>
        <ChevronRight style={{ fontSize: 60 }} className={classes.chevron} />
      </div>
      <div className={classes.customerReviewContainer}>
        <h1>Customer Reviews</h1>
        <div className={classes.customerReviewRight}>
          <div className={classes.starContainer}>
            <Star style={{ fontSize: 80 }} />
            <Star style={{ fontSize: 80 }} />
            <Star style={{ fontSize: 80 }} />
            <Star style={{ fontSize: 80 }} />
            <StarOutline style={{ fontSize: 80 }} />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ncommodo consequat.
          </p>
        </div>
      </div>
      <div className={classes.weirdContainer}>
        <ChevronLeft style={{ fontSize: 60 }} />
        <div className={classes.smallRoundedSquare} />
        <div className={classes.largeRoundedSquare} />
        <div className={classes.smallRoundedSquare} />
        <ChevronRight style={{ fontSize: 60 }} />
      </div>
      <div className={classes.footer}>
        <div>
          <h2><i>HuggyMobile</i></h2>
          <div className={classes.footerRow}>
            <h3>Lorem ipsum</h3>
            <h3>Lorem ipsum</h3>
            <h3>Lorem ipsum</h3>
          </div>
          <div className={classes.footerRow}>
            <h3>Lorem ipsum</h3>
            <h3>Lorem ipsum</h3>
            <h3>Lorem ipsum</h3>
          </div>
          <div className={classes.footerRow}>
            <h3>Lorem ipsum</h3>
            <h3>Lorem ipsum</h3>
            <h3>Lorem ipsum</h3>
          </div>
        </div>
        <div className={classes.footerRight}>
          <ShoppingCartOutlined style={{ fontSize: 70, marginBottom: "20px" }} />
          <Button className={classes.buyProductButton}>BUY PRODUCT</Button>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
