
const firstPassword = "password1";
const secondPassword = "password2";

function unlock() {
    let enteredPassword = document.getElementById("password").value;
    let status = document.getElementById("status");
    let sticker = document.getElementById("sticker"); // Reference to the image element

    if (enteredPassword === firstPassword) {
        status.innerHTML = "✅ Welcome, Marielle!";
        sticker.src = "/img/wow.gif"; // Change to happy sticker

        setTimeout(() => {
            window.location.href = "first.html"; // Redirect after 1 second
        }, 2000);

    } else if (enteredPassword === secondPassword) {
        status.innerHTML = "✅ Welcome, Trisha!";
        sticker.src = "/img/wow.gif"; // Change to heart sticker

        setTimeout(() => {
            window.location.href = "first.html"; // Redirect after 1 second
        }, 2000);

    } else {
        status.innerHTML = "❌ Incorrect Code!";
        sticker.src = "/img/nono.gif";
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


