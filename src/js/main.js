import Alert from "./Alert";
import ProductData from "./ProductData.mjs";

import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);

listing.init();

import ProductListing from "./ProductList.mjs";
import { getMenucartLogo } from "./utils.mjs";

const listElement = document.querySelector(".product-list");

const producData = new ProductData("tents");

const productList = new ProductListing("tents", producData, listElement);
productList.init();

// Get the logo cart with the number of elements in cart
getMenucartLogo(".cart");

const listAlert = new Alert;
listAlert.getAlerts();

