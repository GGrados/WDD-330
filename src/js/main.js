import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { getMenucartLogo } from "./utils.mjs";

const listElement = document.querySelector(".product-list");

const producData = new ProductData("tents");  

const productList = new ProductListing("tents", producData,listElement);
productList.init();

// Get the logo cart with the number of elements in cart
getMenucartLogo(".cart");


