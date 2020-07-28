var nav = document.querySelector("nav");

var expandMobileNavigation = function() {
  nav.classList.add("mobile-navigation-expanded");
};

var collapseMobileNavigation = function() {
  nav.classList.remove("mobile-navigation-expanded");
};

var expandButton = document.querySelector("#expand-mobile-navigation");
expandButton.addEventListener("click", expandMobileNavigation);

var collapseButton = document.querySelector("#collapse-mobile-navigation");
collapseButton.addEventListener("click", collapseMobileNavigation);

var bodyElement = document.querySelector("body");
var toggleDarkMode = function() {
  var element = document.getElementById("footer");
  element.classList.add("dark")
  bodyElement.classList.toggle("dark");
};

var darkModeButton = document.querySelector("#dark-mode-button");
darkModeButton.addEventListener("click", toggleDarkMode);

var darkModeButtonMobile = document.querySelector("#dark-mode-button-mobile");
darkModeButtonMobile.addEventListener("click", toggleDarkMode);
