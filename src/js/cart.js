import { getLocalStorage, loadHeaderAndFooter } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  let htmlItems;
  if (cartItems != null && cartItems.length != 0) {
    htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
    setTotalCart(cartItems);
  } else {
    document.querySelector(".product-list").innerHTML = cartEmtyTemplate();
  }
}
function cartEmtyTemplate() {
  return `<h2>The cart is empty. Please select some products first</h1>`;
}
function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}
// get the total cart
function setTotalCart(itemsCart) {
document.querySelector(".cart-footer").classList.remove("hide");
const total = itemsCart.reduce((acc, item) => acc + item.FinalPrice, 0);
document.getElementById("cartTotal").innerText = `$${total.toLocaleString()}`;
}

renderCartContents();

// Get header and footer
loadHeaderAndFooter();

// Set event linstenner

document.getElementById("checkoutButton").addEventListener("click", () => {
  window.location.href = "/checkout/index.html";
});
