function showDashboard() {
    document.getElementById("dashboard").style.display="block";
    document.getElementById("orders").style.display="none";
    document.getElementById("items").style.display="none";
    document.getElementById("customers").style.display="none";

    let dID = document.getElementById("dash-nav");
    let oID = document.getElementById("order-nav");
    let iID = document.getElementById("item-nav");
    let cID = document.getElementById("customer-nav");
    dID.classList.add("active");
    oID.classList.remove("active");
    iID.classList.remove("active");
    cID.classList.remove("active");

    let nID = document.getElementById("navbarSupportedContent");
    nID.classList.remove("show");
}

function showOrders() {
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="block";
    document.getElementById("items").style.display="none";
    document.getElementById("customers").style.display="none";

    let dID = document.getElementById("dash-nav");
    let oID = document.getElementById("order-nav");
    let iID = document.getElementById("item-nav");
    let cID = document.getElementById("customer-nav");
    dID.classList.remove("active");
    oID.classList.add("active");
    iID.classList.remove("active");
    cID.classList.remove("active");

    let nID = document.getElementById("navbarSupportedContent");
    nID.classList.remove("show");
}

function showItems() {
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="none";
    document.getElementById("items").style.display="block";
    document.getElementById("customers").style.display="none";

    let dID = document.getElementById("dash-nav");
    let oID = document.getElementById("order-nav");
    let iID = document.getElementById("item-nav");
    let cID = document.getElementById("customer-nav");
    dID.classList.remove("active");
    oID.classList.remove("active");
    iID.classList.add("active");
    cID.classList.remove("active");

    let nID = document.getElementById("navbarSupportedContent");
    nID.classList.remove("show");
}
function showCustomers() {
    document.getElementById("dashboard").style.display="none";
    document.getElementById("orders").style.display="none";
    document.getElementById("items").style.display="none";
    document.getElementById("customers").style.display="block";

    let dID = document.getElementById("dash-nav");
    let oID = document.getElementById("order-nav");
    let iID = document.getElementById("item-nav");
    let cID = document.getElementById("customer-nav");
    dID.classList.remove("active");
    oID.classList.remove("active");
    iID.classList.remove("active");
    cID.classList.add("active");

    let nID = document.getElementById("navbarSupportedContent");
    nID.classList.remove("show");
}

function shownabar() {
    let nID = document.getElementById("navbarSupportedContent");
    nID.classList.add("show");
}