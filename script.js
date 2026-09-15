function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

function orderItem(itemName) {
    alert(itemName + " has been added to your order!");
}

function sendMessage(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    event.target.reset();
}