import CheckoutProcess from "./CheckoutProcess.mjs";
import { loadHeaderAndFooter } from "./utils.mjs";

loadHeaderAndFooter();

const myCheckout = new CheckoutProcess("so-cart", ".checkout-summary");
myCheckout.init();

document
  .querySelector("#zip")
  .addEventListener("blur", myCheckout.calculateOrdertotal.bind(myCheckout));
// listening for click on the button
document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  const cartForm = document.forms[0];
  e.preventDefault();
  const isOkForm = cartForm.checkValidity();
  cartForm.reportValidity();
  if (isOkForm) {
    myCheckout.checkout();
  }
});
