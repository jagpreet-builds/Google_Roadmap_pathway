let myName= "Jagpreet Singh";
let myRole = "AI-Developer";
let mySkill = "Javascript";

console.log(myName);
console.log(myRole);


let position = document.getElementById("change_pos")

position.addEventListener("click", changePosition)

function changePosition(){
    document.getElementById("position").innerHTML = "Project Manager at Google"
}

let contact = document.getElementById("show_contact")

contact.addEventListener("click", showContact)

function showContact(){
    document.getElementById("Contact").textContent = "Email me at jag@test.com"
}


let smile = document.getElementById("smileBtn")

smile.addEventListener("click", makeSmile)

function makeSmile(){
    document.getElementById("profile").src='assets/profile_s.png'

}

let Reset = document.getElementById("reset")

Reset.addEventListener("click" , restart);

function restart(){
    location.reload();

}


let dmode = document.getElementById("theme");
let card = document.querySelector(".card_body");


dmode.addEventListener("click", change_theme);

function change_theme(){

    card.classList.toggle("card_body_light")

}