import {
  getLocalStorage,
  loadHeaderAndFooter,
  setLocalStorage,
} from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  let htmlItems;
  if (cartItems != null && cartItems.length != 0) {
    htmlItems = cartItems.map((item, index) => cartItemTemplate(item, index));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
    cartItems.forEach((item, index) => {
      document
        .getElementById(`${item.Name}-${index}`)
        .addEventListener("click", () => {
          const cItems = getLocalStorage("so-cart");
          const newItems = cItems.filter((i, index2) => index2 != index);
          setLocalStorage("so-cart", newItems);
          renderCartContents();
          loadHeaderAndFooter();
        });
    });
    setTotalCart(cartItems);
  } else {
    document.querySelector(".product-list").innerHTML = cartEmtyTemplate();
    setTotalCart(cartItems);
  }
}
function cartEmtyTemplate() {
  return `<h2>The cart is empty. Please select some products first</h1>`;
}
function cartItemTemplate(item, index) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image text-center">
    <img
      src="${item.Images.PrimarySmall || item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button id="${item.Name}-${index}">x</button>
</li>`;

  return newItem;
}
// get the total cart
function setTotalCart(itemsCart) {
  if (itemsCart.length == 0) {
    document.querySelector(".cart-footer").classList.add("hide");
  } else {
    document.querySelector(".cart-footer").classList.remove("hide");
    const total = itemsCart.reduce((acc, item) => acc + item.FinalPrice, 0);
    document.getElementById("cartTotal").innerText =
      `$${total.toLocaleString()}`;
  }
}

renderCartContents();

// Get header and footer
loadHeaderAndFooter();

// Set event linstenner

document.getElementById("checkoutButton").addEventListener("click", () => {
  window.location.href = "/checkout/index.html";
});
