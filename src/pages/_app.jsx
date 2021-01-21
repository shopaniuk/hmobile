import React, { useState } from "react";
import PropTypes from "prop-types";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { getCurrentUser } from "../actions/User";
import urls from "../../utils/urls";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "focus-visible/dist/focus-visible.min.js";
import "normalize.css";
import "react-toastify/dist/ReactToastify.css";
import "../../public/static/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyApp = ({ Component, pageProps, router, currentUser }) => {
  const [cart, setCart] = useState([]);
  const addItemWrapper = (item) => {
    console.log("ta da")
    setCart([...cart, item]);
    toast.success("Added to Cart!", {
      position: "bottom-right",
      autoClose: 2000,
      closeOnClick: true,
      draggable: true,
    })
  };
  const deleteItemWrapper = (index) => {
    var newCart = cart;
    console.log("we made it")
    newCart.splice(index, 1);
    setCart(newCart);
  }
  return (
    <>
      <Head>
        <title>Huggy Mobile</title>
      </Head>
      <div className="App">
        <Header loggedIn={currentUser != null} cart={cart} currentRoute={router.asPath} removeFromCart={deleteItemWrapper} />
        <div className="Content">
          <Component {...pageProps} cart={cart}  addToCart={addItemWrapper} currentUser={currentUser} />
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { res } = appContext.ctx;

  const appProps = await App.getInitialProps(appContext);

  const cookies = appContext.ctx.req ? appContext.ctx.req.headers.cookie : null;

  const route = appContext.ctx.asPath;

  return getCurrentUser(cookies)
    .then((user) => {
      if (route === "/login") {
        if (res) {
          res.writeHead(301, { Location: urls.pages.app.home });
          res.end();
        } else {
          return Router.replace(urls.pages.app.home);
        }
      }

      return {
        ...appProps,
        currentUser: user,
      };
    })
    .catch(() => {
      if (route.startsWith("/app")) {
        if (res) {
          res.writeHead(301, { Location: urls.pages.index });
          res.end();
        } else {
          return Router.replace(urls.pages.index);
        }
      }

      return appProps;
    });
};

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

MyApp.defaultProps = {
  currentUser: null,
};

export default MyApp;
