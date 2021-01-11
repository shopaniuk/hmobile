import React from "react";
import classes from "./ProductPage.module.css";
import HomeCarousel from "../../components/HomeCarousel";
import { ChevronLeft, ChevronRight, KeyboardArrowDown, Star, StarOutline, ShoppingCartOutlined } from "@material-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Image } from "react-bootstrap";
import AirPods from "../../../public/static/airPods.png";
import Runner from "../../../public/static/runner.png";
import Link from "next/link";
import product from "../../../public/static/product.png";
import phone2 from "../../../public/static/OurMission2.png";

const ProductPage = () => {
  const {
    productContainer, title, phoneContainer, phoneLeft, phoneImage, phoneRight, phoneTitle, learnMore, tabletContainer, tabletLeft, 
  } = classes;
  return (
    <div className={productContainer}>
      <h1 className={title}>OUR PRODUCTS</h1>
      <div className={phoneContainer}>
        <div className={phoneLeft}>
          <Image className={phoneImage} src={product}></Image>
        </div>
        <div className={phoneRight}>
          <h2 className={phoneTitle}>PHONE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
          </p>
          <h1>$6.99</h1>
          <h4>ACCESSORIES AVAILABLE</h4>
          <h4>COLORS AVAILABLE</h4>
          <h4>CUSTOMIZATION AVAILABLE</h4>
          <Link id="learnMore" href="/" ><Button className={learnMore}>MORE INFORMATION</Button></Link>
        </div>
      </div>
      <div className={tabletContainer}>

        <div className={tabletLeft}>
          <h2 className={phoneTitle}>TABLET</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
          </p>
          <h1>$6.99</h1>
          <h4>ACCESSORIES AVAILABLE</h4>
          <h4>COLORS AVAILABLE</h4>
          <h4>CUSTOMIZATION AVAILABLE</h4>
          <Link id="learnMore" href="/" ><Button className={learnMore}>BUY PRODUCT</Button></Link>
        </div>
        <div className={phoneLeft}>
          <Image className={phoneImage} src={product}></Image>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default ProductPage;
