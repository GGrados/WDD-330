// Wrapper for querySelector...returns matching element 
export function qs(selector, parent = document) {
   return parent.querySelector(selector); 
  } 
// Retrieve data from localstorage 
  export function getLocalStorage(key) {
     return JSON.parse(localStorage.getItem(key));
     } 
// Save data to local storage 
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data)); 
  } 
// Get URL parameter 
export function getParam(param) {
  const queryString = window.location.search; 
  const urlParams = new URLSearchParams(queryString); 
  return urlParams.get(param); 
} 
// Set a listener for both touchend and click 
export function setClick(selector, callback) {
   const element = qs(selector); 
   if (element) {
     element.addEventListener("touchend", (event) => { 
      event.preventDefault();
       callback();
      }); 
      element.addEventListener("click", callback);
     } else { 
      console.error(`Element with selector ${selector} not found`);
     } } 
     // Render list with a template 
     export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = false) { 
      const htmlStrings = list.map(templateFn);
       if (clear) { parentElement.innerHTML = "";

        } 
        parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
     }