import { getParam, loadHeaderAndFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();


// Get header and footer
loadHeaderAndFooter();

// Animated cart with add to cart
document.querySelector(".addtoCart").addEventListener("click", function() {
    const cartThumbnail = document.querySelector(".cart");
   
    // Add animation class
    cartThumbnail.classList.add("animate");

    // Remove animation class after animation ends
    cartThumbnail.addEventListener("animationend", function() {
        cartThumbnail.classList.remove("animate");
    });
});
