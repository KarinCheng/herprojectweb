/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var postButton = document.querySelector(".postReaction input:nth-child(3)");
var reaction = document.querySelector(".bgReaction div");

postButton.addEventListener("click", function() {
    reaction.classList.add("allReaction");
});
