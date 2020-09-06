function openNav() {
    console.log("called");
    document.getElementById("myNav").style.height = "100vh";
    // document.getElementsByClassName(".overlay").style.height = "50vh";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}