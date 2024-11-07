import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import { getLocalStorage } from "./utils.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  const listFromStorage = getLocalStorage("so-cart") || [];
  listFromStorage.push(product);
  setLocalStorage("so-cart", listFromStorage);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
