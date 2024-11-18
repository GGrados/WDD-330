import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

const productData = new ProductData("tents");
const htmlListParent = document.querySelector(".product-list");
const productListing = new ProductListing("", productData, htmlListParent);
productListing.init();
