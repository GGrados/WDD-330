import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { getParam, loadHeaderAndFooter } from "./utils.mjs";

// Get header and footer
loadHeaderAndFooter();

const category = getParam("category");

const listElement = document.querySelector(".product-list");

const producData = new ProductData();

const productList = new ProductList(category, producData, listElement);

document.getElementById("title-products").innerHTML =
  `Top Products: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
productList.init();
