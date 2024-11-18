import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { qs } from "./utils.mjs";

const listElement = document.querySelector(".product-list");

const producData = new ProductData("tents");  

const productList = new ProductListing("tents", producData,listElement);
productList.init();


