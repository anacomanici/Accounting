// JavaScript Document
const searchIcon = document.querySelector(".fa-magnifying-glass");
const searchBar = document.querySelector(".search-bar");



searchIcon.addEventListener("click", () => {
const visibility = searchBar.getAttribute("data-visible");
	
//console.log(visibility)
	if(visibility === "false") {
		searchBar.setAttribute("data-visible", true)
	} else if (visibility === "true") {
		searchBar.setAttribute("data-visible", false);
	}
})