
const firstPassword = "135ed83";
const secondPassword = "1093he6";
const thirdPassword = "34fsx79";
const fourthPassword = "49cz7e2";
const fivePassword = "920al81";
const sixPassword = "529jo30";

function unlock() {
    let enteredPassword = document.getElementById("password").value;
    let status = document.getElementById("status");
    let sticker = document.getElementById("sticker");

    if (enteredPassword === firstPassword) {
        localStorage.setItem("userPassword", enteredPassword);
        status.innerHTML = "✅ Welcome, Marielle!";
        sticker.src = "./img/wow.gif"; 

        setTimeout(() => {
            window.location.href = "first.html"; 
        }, 2000);

    } else if (enteredPassword === secondPassword) {
        localStorage.setItem("userPassword", enteredPassword);
        status.innerHTML = "✅ Welcome, Trisha!";
        sticker.src = "./img/wow.gif";

        setTimeout(() => {
            window.location.href = "first.html";
        }, 2000);

    } else if (enteredPassword === thirdPassword) {
        localStorage.setItem("userPassword", enteredPassword);
        status.innerHTML = "✅ Welcome, Izsha!";
        sticker.src = "./img/wow.gif";

        setTimeout(() => {
            window.location.href = "first.html";
        }, 2000);

    } else if (enteredPassword === fourthPassword) {
        localStorage.setItem("userPassword", enteredPassword);
        status.innerHTML = "✅ Welcome, Anthea!";
        sticker.src = "./img/wow.gif";

        setTimeout(() => {
            window.location.href = "first.html";
        }, 2000);
    
    } else if (enteredPassword === fivePassword) {
        localStorage.setItem("userPassword", enteredPassword);
        status.innerHTML = "✅ Welcome, Anzhelina!";
        sticker.src = "./img/wow.gif";

        setTimeout(() => {
            window.location.href = "first.html";
        }, 2000);

    } else if (enteredPassword === sixPassword) {
        localStorage.setItem("userPassword", enteredPassword);
        status.innerHTML = "✅ Welcome, love!";
        sticker.src = "./img/wow.gif";

        setTimeout(() => {
            window.location.href = "first.html";
        }, 2000);
            
    } else {
        status.innerHTML = "❌ Incorrect Code!";
        sticker.src = "./img/nono.gif";
        sticker.style.width = "100px"; 

        setTimeout(() => {
            window.location.reload(); 
        }, 3000);
    }
}

/*go to third*/
document.getElementById("heart").addEventListener("click", function() {
    this.style.transform = "rotate(-45deg) scale(1.1)";
    
    setTimeout(() => {
        window.location.href = "third.html"; 
    }, 1000);
});

document.getElementById("heart").addEventListener("touchstart", function(event) {
    event.preventDefault(); 
    this.style.transform = "rotate(-45deg) scale(1.1)";
    
    setTimeout(() => {
        window.location.href = "third.html"; 
    }, 1000);
});
