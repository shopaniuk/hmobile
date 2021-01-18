import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import NavLink from "../NavLink";
import routes from "./routes";
import styles from "./Header.module.css";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Button, Modal } from "react-bootstrap";

const Header = ({ loggedIn, currentRoute }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        CART
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.title}>
            <ShoppingCartOutlined style={{ fontSize: 40, fontWeight: 400, marginRight: "20px" }} className={styles.cartIcon} />
            SHOPPING CART
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body}>The dynamic version of this coming soon</Modal.Body>
        <Modal.Footer>
          <div className={styles.footerContainer}>
            <div className={styles.finalPrice}>
              <h4>TOTAL</h4>
              <h4>$6.99</h4>
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
