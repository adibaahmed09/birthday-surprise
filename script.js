let currentPage = 0;


const pages = [
"passwordPage",
"welcomePage",
"questionPage",
"photoPage",
"letterPage",
"giftPage",
"videoPage"
];


const questions = [

"♡ Do you remember the first moment we met?",

"♡ What is the one thing you love the most about me?",

"♡ What is your favorite memory with me?",

"♡ When did you first realize that I was special to you?",

"♡ What little thing about me makes you smile the most?",

"♡ What is your biggest dream for our future together?",

"♡ What is one thing I do that always makes you happy?",

"♡ What is one thing about us that you never want to forget?",

"♡ If we could travel anywhere together, where would you choose?",

"♡ Do you love me?"

];


let questionIndex = 0;



function showPage(id){

document.querySelectorAll(".page").forEach(page=>{

page.classList.remove("active");

});


document.getElementById(id).classList.add("active");

}




function checkPassword(){

let password =
document.getElementById("passwordInput").value;


if(password==="01012023"){

showPage("welcomePage");

}

else{

alert("Wrong Password 💔");

}

}




function startQuestions(){

questionIndex=0;

loadQuestion();

showPage("questionPage");

}




function noExcited(){

document.getElementById("reaction").innerHTML=
"Don't worry 😭 Your surprise is waiting 💕";

}




function loadQuestion(){

document.getElementById("questionNumber").innerHTML=
"Question "+(questionIndex+1)+" 💌";


document.getElementById("questionText").innerHTML=
questions[questionIndex];


document.getElementById("answerInput").value="";

}





function nextQuestion(){

let answer =
document.getElementById("answerInput").value;


if(answer.trim()===""){

alert("Please write your answer first ❤️");

return;

}



questionIndex++;



if(questionIndex < questions.length){

loadQuestion();

}

else{

showPage("photoPage");

}

}




function openLetter(){

showPage("letterPage");

}




function showLetter(){

document.getElementById("letter").style.display="block";

}




function openGift(){

showPage("giftPage");

}




function showVideo(){

showPage("videoPage");

}
