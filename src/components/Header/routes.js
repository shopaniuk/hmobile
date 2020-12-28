import urls from "../../../utils/urls";

const routes = [
  {
    name: "Home",
    link: urls.pages.index,
    auth: false,
    atEnd: false,
  },
  {
    name: "O-ACE-Sys®",
    link: urls.pages.oacesys,
    auth: false,
    atEnd: false,
  },
  {
    name: "Clinicians",
    link: urls.pages.clinicians,
    auth: false,
    atEnd: false,
  },
  {
    name: "Investors",
    link: urls.pages.investors,
    auth: false,
    atEnd: false,
  },
  {
    name: "About",
    link: urls.pages.about,
    auth: false,
    atEnd: false,
  },
  {
    name: "中文版",
    link: urls.pages.中文版,
    auth: false,
    atEnd: false,
  },
];

export default routes;
