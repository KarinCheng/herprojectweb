/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var button = document.querySelector(".intoButton button:nth-child(2)");
var img = document.querySelector(".intoButton button:nth-child(2) img");
var notification = document.querySelector("nav div");

button.addEventListener("click", function() {
    button.classList.toggle("downloadButton");
    img.classList.toggle("animationIcon");
    notification.classList.toggle("Notification");
});
