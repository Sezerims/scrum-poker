let cards = document.querySelectorAll(".card");
let isSelected = false;
let vote;

let votes = document.querySelectorAll(".vote")
let vs = document.querySelectorAll(".vote span");

let voteCounter = 0;

document.querySelector("#vote-counter").innerText = voteCounter;

cards.forEach(card => card.addEventListener("click", () => {
    voteCounter = 0;
    isSelected = card.classList.contains("selected");
    cards.forEach(card => card.classList.remove("selected"));
    if(isSelected) {
        card.classList.remove("selected");
        vote = null;
    }
    else {
        card.classList.add("selected");
        vote = card.value;
        voteCounter ++;
    }
    console.log("Current vote: " + vote);
    document.querySelector("#vote-counter").innerText = voteCounter;
}));

let toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("bi-eye-fill");
    toggle.classList.toggle("bi-eye-slash-fill");
    votes.forEach(vote => vote.classList.toggle("face-down"));
    vs.forEach(v => v.classList.toggle("hidden"));
});