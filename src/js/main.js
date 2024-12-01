import { loadHeaderAndFooter } from "./utils.mjs";
import Alert from "./Alert.js";

// Get header and footer
loadHeaderAndFooter();

const listAlert = new Alert();
listAlert.getAlerts();

//button for signup
function redirectToSignUp() {
  window.location.href = "join.html";
}

document.addEventListener("DOMContentLoaded", function () {
  var welcomeBanner = document.getElementById("welcomeBanner");
  var closeButton = document.getElementById("closeBanner");

  closeButton.addEventListener("click", function () {
    welcomeBanner.style.display = "none";
  });
});
