import urls from "../../../utils/urls";

const routes = [
  {
    name: "HuggyMobile",
    link: urls.pages.index,
    auth: false,
    atEnd: false,
  },
  {
    name: "SHOP",
    link: urls.pages.oacesys,
    auth: false,
    atEnd: true,
  },
  {
    name: "ABOUT",
    link: urls.pages.clinicians,
    auth: false,
    atEnd: false,
  },
  {
    name: "CART",
    link: urls.pages.clinicians,
    auth: false,
    atEnd: false,
  },
];

export default routes;
