window.addEventListener("scroll", function() {
    let mainNav = document.getElementById("header-area");
    let btt = document.getElementById("back-to-top-btn");

    if (window.pageYOffset > 300) {
        mainNav.classList.add("is-sticky");
        btt.classList.add("is-sticky");
    } else {
        mainNav.classList.remove("is-sticky");
        btt.classList.remove("is-sticky");
    }
});
