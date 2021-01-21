import React, { useState } from "react";
import classes from "./InfinityPage.module.css";
import { ChevronLeft, ChevronRight, KeyboardArrowDown, Star, StarOutline, ShoppingCartOutlined } from "@material-ui/icons";
import { Button, Image } from "react-bootstrap";
import Link from "next/link";
import infinity from "../../../public/static/infinity.png";
import recommended from "../../../public/static/recommended.png";
import activities from "../../../public/static/activities.png";

function InfinityPage(props) {
  const {
    infinityContainer, leftContainer, infinityImage, recommendedImage, middleContainer, rightContainer, gallery, colorContainer, black, blue, red,
    turquoise, green, gray, activitiesImage, locations, buyButton
  } = classes;
  const [currentItem, setCurrentItem] = useState({quantity: 1, color:"BLACK", product: "INFINITY", price: 6.99});

  return (
    <div className={infinityContainer}>
      <div className={leftContainer}>
        <Image src={infinity} className={infinityImage}></Image>
        <div className={gallery}>
          <ChevronLeft style={{ fontSize: 40 }} />
          <Image src={recommended} className={recommendedImage}></Image>
          <ChevronRight style={{ fontSize: 40 }} />
        </div>
      </div>
      <div className={middleContainer}>
        <h1>INFINITY</h1>
        <h3>PHONE</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna ali- quam</p>
        <div>
          <h3>COLORS</h3>
          <h4>** 1-3 day shipping</h4>
        </div>
        <div className={colorContainer}>
          <Button size="lg" className={black}></Button>
          <Button size="lg" className={blue}></Button>
          <Button size="lg" className={red}></Button>
          <Button size="lg" className={turquoise}></Button>
          <Button size="lg" className={green}></Button>
        </div>
        <div>
          <h3>PATTERNS</h3>
          <h4>** 7-10 day shipping</h4>
        </div>
        <div className={colorContainer}>
          <Button size="lg" className={gray}></Button>
        </div>
        <h3>DESIGN YOUR OWN</h3>
      </div>
      <div className={rightContainer}>
        <h1>$6.99</h1>
        <h3>ACTIVITIES</h3>
        <Image src={activities} className={activitiesImage}></Image>
        <h3>LOCATIONS</h3>
        <ul className={locations}>
          <li>Lorem Ipsum</li>
          <li>adipiscing elit,</li>
          <li>dolor sit amet,</li>
          <li>used diam nonummy</li>
          <li>consectetuer</li>
        </ul>
        <Button onClick={() => props.addToCart(currentItem)} className={buyButton}>Buy Product</Button>
      </div>
    </div>
  );
};

export default InfinityPage;
