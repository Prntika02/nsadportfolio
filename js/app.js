const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let check = document.getElementById("check").checked;

    if (email == "" || message == "") {
        alert("Please fill up all fields!");
        return;
    }

    if (!check) {
        alert("Please agree to the terms!");
        return;
    }

    alert("Form submitted successfully!");
});