function navtoggle(){
    var outerGrid = document.querySelector(".outer-grid");
    outerGrid.classList.toggle("outer-grid-expanded");

    var innerGrid = document.querySelector("nav");
    innerGrid.classList.toggle("hide-nav");
}

