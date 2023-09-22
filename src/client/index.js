let cards = document.querySelectorAll(".card");
let isSelected = false;
let vote;

let votes = document.querySelectorAll(".vote")
let vs = document.querySelectorAll(".vote span");

let voters = document.querySelectorAll(".voter-name");

let listOfVoters = [];

voters.forEach(voter => {
    listOfVoters.push(voter.innerText);
});

cards.forEach(card => card.addEventListener("click", () => {
    let voteCounter = 0;
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

let secretVoting = document.querySelector("#secret-voting");
let anonVoting = document.querySelector("#anon-voting");

secretVoting.addEventListener("click", () => {
    secretVoting.classList.toggle("bi-eye-fill");
    secretVoting.classList.toggle("bi-eye-slash-fill");
    votes.forEach(vote => vote.classList.toggle("face-down"));
    vs.forEach(v => v.classList.toggle("hidden"));
});

anonVoting.addEventListener("click", () => {
    if(anonVoting.classList.contains("bi-person-fill")) {
        let ctr = 1;
        voters.forEach(voter => {
            voter.innerText = "Anonymous Voter #" + ctr;
            ctr++;
        });
    }
    else {
        let ctr = 0;
        voters.forEach(voter => {
            voter.innerText = listOfVoters[ctr];
            ctr++;
        });
    }
    anonVoting.classList.toggle("bi-person-fill");
    anonVoting.classList.toggle("bi-incognito");
    // voters.forEach(voter => voter.classList.toggle("face-down"));

    voters.forEach(voter => voter.classList.toggle("selected"));
});