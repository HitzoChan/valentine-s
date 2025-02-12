
const firstPassword = "password1";
const secondPassword = "password2";

function unlock() {
    let enteredPassword = document.getElementById("password").value;
    let status = document.getElementById("status");
    let sticker = document.getElementById("sticker"); // Reference to the image element

    if (enteredPassword === firstPassword) {
        status.innerHTML = "✅ Welcome, Marielle!";
        sticker.src = "./img/wow.gif"; // Change to happy sticker

        setTimeout(() => {
            window.location.href = "first.html"; // Redirect after 1 second
        }, 2000);

    } else if (enteredPassword === secondPassword) {
        status.innerHTML = "✅ Welcome, Trisha!";
        sticker.src = "./img/wow.gif"; // Change to heart sticker

        setTimeout(() => {
            window.location.href = "first.html"; // Redirect after 1 second
        }, 2000);

    } else {
        status.innerHTML = "❌ Incorrect Code!";
        sticker.src = "./img/nono.gif";
        sticker.style.width = "100px"; // Change to error sticker

        // Refresh the login form after 7 seconds
        setTimeout(() => {
            window.location.reload(); // Refresh the page
        }, 3000);
    }
}

document.getElementById("heart").addEventListener("click", function() {
    this.style.transform = "rotate(-45deg) scale(1.1)";
    
    setTimeout(() => {
        window.location.href = "third.html"; // Redirect after 1 second
    }, 1000);
});

// Ensure it works on mobile
document.getElementById("heart").addEventListener("touchstart", function(event) {
    event.preventDefault(); // Prevents duplicate triggers
    this.style.transform = "rotate(-45deg) scale(1.1)";
    
    setTimeout(() => {
        window.location.href = "third.html"; 
    }, 1000);
});

function changeLetter() {
            let enteredPassword = document.getElementById("password").value;
            let greeting = document.getElementById("greeting");
            let message = document.getElementById("message");
            let closing = document.getElementById("closing");
            let signature = document.getElementById("signature");

            if (enteredPassword === "password1") {
                greeting.innerHTML = "My Dearest Marielle,";
                message.innerHTML = "Your laughter is my favorite song, <br> your love is my sweetest dream. <br> You are my everything. ❤️";
                closing.innerHTML = "With all my love,";
                signature.innerHTML = "- Your Secret Admirer";
            } else if (enteredPassword === "password2") {
                greeting.innerHTML = "Hello, Trisha!";
                message.innerHTML = "Roses are red, violets are blue, <br> My world is brighter, because of you. 🌹";
                closing.innerHTML = "Forever grateful,";
                signature.innerHTML = "- Your Best Friend";
            } else {
                greeting.innerHTML = "Oops!";
                message.innerHTML = "❌ Incorrect Password!";
                closing.innerHTML = "";
                signature.innerHTML = "- Try again!";
            }
        }


