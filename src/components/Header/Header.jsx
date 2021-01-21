import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import NavLink from "../NavLink";
import routes from "./routes";
import styles from "./Header.module.css";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Image, Button, Modal } from "react-bootstrap";
import infinityItem from "../../../public/static/infinityItem.png";

function Header(props) {
  const {loggedIn, cart, currentRoute} = props;
  const [items, setItems] = useState(cart);
  useEffect(() => {
    console.log("we're here")
    setItems(cart);
  }, [props.cart])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var total = 0; var item;
  for (item of cart) {
    total += item.price;
  }
  var isCartEmpty = true;
  if (cart.length != 0) {
    isCartEmpty = false;
  }

  const cartText = isCartEmpty ? "CART" : `CART (${cart.length})`;
  return (
    <div className={styles.root}>
      {routes
        .filter((route) => (loggedIn && route.auth) || (!loggedIn && !route.auth))
        .map(({ name, link, atEnd }) => (
          <NavLink href={link} key={name}>
            <div
              className={clsx(
                atEnd ? styles.endRoute : styles.route,
                currentRoute === link && styles.selected
              )}
            >
              {name}
            </div>
          </NavLink>
        ))}
      <Button className={styles.cartButton} onClick={handleShow}>
        {cartText}
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header className={styles.headerContainer} closeButton>
          <Modal.Title className={styles.title}>
            <ShoppingCartOutlined style={{ fontSize: 40, fontWeight: 400, marginRight: "20px" }} className={styles.cartIcon} />
            SHOPPING CART
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.bodyContainer}>
          {items.map((item, index) => (
            <div key={index}>
            <Button onClick={() => props.removeFromCart(index)} className={styles.removeItem}>X</Button>
            <div className={styles.item}>
              <Image className={styles.infinityImage} src={infinityItem} />
              <div>
                <h1 className={styles.productName}>{item.product}</h1>
                <h1>{item.color}</h1>
              </div>
              <h1 className={styles.price}>{item.price}</h1>
            </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.finalPrice}>
              <h4>TOTAL</h4>
              <h4>${total}</h4>
            </div>
            <Button className={styles.nextButton} onClick={handleClose}>
              NEXT
            </Button>
          </div>

        </Modal.Footer>
      </Modal>
    </div>
  )
}
Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  currentRoute: PropTypes.string.isRequired,
};

export default Header;
