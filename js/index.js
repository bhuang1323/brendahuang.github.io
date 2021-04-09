// run this file only when the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // get the navBar element
    var navBar = document.querySelectorAll(".navbar-end")[0];
    // get the hamburgerBar element
    var hamburgerBar = document.querySelectorAll(".navbar-burger")[0];
    // toggle the CSS class for the navbar when the hamburgerBar is hit
    function toggleNavBar() {
        if (navBar.classList.contains("navbar-hidden")) {
            navBar.classList.remove("navbar-hidden");
        } else {
            navBar.classList.add("navbar-hidden");
        }
    }
    // add the listener to the hamburgerBar
    hamburgerBar.addEventListener("click", toggleNavBar);
});
