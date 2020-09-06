document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "none";
        document.querySelector(".loader").style.visibility = "visible";
    } else {
        document.querySelector(".loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};