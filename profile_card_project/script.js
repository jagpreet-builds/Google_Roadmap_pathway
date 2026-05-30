let myName= "Jagpreet Singh";
let myRole = "AI-Developer";
let mySkill = "Javascript";

console.log(myName);
console.log(myRole);


function changePosition(){
    document.getElementById("position").innerHTML = "Project Manager at Google"
}

function showContact(){
    document.getElementById("Contact").innerHTML = "Call me at 0405351834"
}

function makeSmile(){
    document.getElementById("profile").src='assets/profile_s.png'
    window.alert("Im smiling")
    
}

function write(){
    document.write("hello")
}