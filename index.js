function toggleHeart() {
    const heart = document.querySelector(".heart-button");
    heart.classList.toggle("clicked");

    setTimeout(() => {
    window.location.href = "flower.html"; // Redirect after 1 second
}, 1000);
}

const firstPassword = "135ed83";
const secondPassword = "1093he6";
const thirdPassword = "34fsx79";
const fourthPassword = "49cz7e2";
const fivePassword = "920al81";


// Get the stored password from localStorage
let savedPassword = localStorage.getItem("userPassword");

// Select the message element
let dear = document.getElementById("dear");
let message = document.getElementById("message");
let name = document.getElementById("yourName");
let note = document.getElementById("note");
// Change text based on password
if (savedPassword === firstPassword) {
    dear.innerHTML = `Dear Marielle,<br>`;
    message.innerHTML = `
        Happy Valentine’s Day! 🎉<br>
        Just a little note to say I appreciate you and our friendship.<br>
        Hope today brings you lots of smiles and good vibes! 😊`;
    note.innerHTML = `With a smile,<br>`;
    yourName.innerHTML = `- Jake<br>`;

} else if (savedPassword === secondPassword) {
    dear.innerHTML = `Dear Trisha,<br>`;
    message.innerHTML = `
        Hope you have a great Valentine’s Day! 💖<br>
        You deserve all the happiness in the world.<br>
        Thanks for always being an amazing friend!🌟`;
    note.innerHTML = `Your friend, always and forever,<br>`;
    yourName.innerHTML = `- Jake<br>`;

} else if (savedPassword === thirdPassword) {
    dear.innerHTML = `Dear Dabs,<br>`;
    message.innerHTML = `
        Though miles keep us apart, my heart has never felt closer to anyone than it does to you.<br>
        Every message, every call, and every moment we share makes me fall for you even more.<br>
        Distance may separate us, but it only proves how strong our love truly is.<br>
        I dream of the day when I can hold your hand, look into your eyes, and tell you in person how much you mean to me.<br>
        Until then, know that no matter how far we are, you are always in my heart.<br>`;
    note.innerHTML = `Yours, no matter the distance,<br>`;
    yourName.innerHTML = `- Xaijan<br><br><br>`;

} else if (savedPassword === fourthPassword) {
    dear.innerHTML = `Dear Anthea,<br>`;
    message.innerHTML = `
        Wishing you a Happy Valentine’s Day!<br>
        Thanks for being such a great friend—someone to joke around with,<br>
        help with school stuff, and just make life a little more fun.<br>`;
    note.innerHTML = `Hope your day is filled with happiness (and maybe some chocolates too)! Stay awesome! 😁<br>`;
    yourName.innerHTML = `- Jake<br>`;

} else if (savedPassword === fivePassword) {
    dear.innerHTML = `Dear Anzhelina,<br>`;
    message.innerHTML = `
        Wrap me in serenity's gentle fold, A soothing balm for my weary soul.<br>
        In tranquil hues, my heart finds rest, A calming peace that forever nest.<br>
        May the soft whispers of the summer breeze, Soothe my mind and quiet my pleas.<br>
        May the warmth of love and kindness shine, And wrap my being in a peaceful shrine.<br>
        In serenity's embrace, I find my strength, A refuge from life's turbulent length.<br>
        So wrap me, dear serenity, in your gentle hold, And keep me safe in your peaceful fold.<br>`;

    note.innerHTML = `Hope your day is filled with happiness! 😁<br>`;
    yourName.innerHTML = `- Xinco<br>`;

} else {
    message.innerHTML = "❌ Unauthorized access!";
    setTimeout(() => {
        window.location.href = "index.html"; // Babalik sa login kung walang password
    }, 2000);
}

window.onbeforeunload = function () {
    localStorage.removeItem("userPassword"); // Delete password
};

