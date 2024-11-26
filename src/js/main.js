import { loadHeaderAndFooter } from "./utils.mjs";
import Alert from "./Alert.js";

// Get header and footer
loadHeaderAndFooter();

const listAlert = new Alert();
listAlert.getAlerts();

/*document.addEventListener("DOMContentLoaded", function() { 
    const banner = document.getElementById("welcomeBanner"); 
    const closeButton = document.getElementById("closeBanner"); // Check if the user has visited before
     if (!localStorage.getItem("bannerDisplayed")) { 
        banner.style.display = "block";// Show the banner 
        // Set the local storage item to indicate that the banner has been displayed
         localStorage.setItem("bannerDisplayed", "true"); } 
         closeButton.addEventListener("click", function() { 
            banner.style.display = "none"; }); });*/
//this was supposed to make it only show on first time, but I have a hard time testing it seems to just get rid of the banner

document.querySelector('.add-to-cart').addEventListener('click', function() {
    const cartThumbnail = document.querySelector('.cart-thumbnail img');
    const itemCount = document.querySelector('.item-count');
    let count = parseInt(itemCount.textContent, 10);
    count += 1;
    itemCount.textContent = count;
   
    // Add animation class
    cartThumbnail.classList.add('animate');

    // Remove animation class after animation ends
    cartThumbnail.addEventListener('animationend', function() {
        cartThumbnail.classList.remove('animate');
    });
});