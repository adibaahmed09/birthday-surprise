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

"আমাদের প্রথম দেখা কবে হয়েছিল? ❤️",

"আমার কোন জিনিসটা তোমার সবচেয়ে বেশি ভালো লাগে? 💕",

"আমাদের সবচেয়ে সুন্দর memory কোনটা? ✨",

"আমার জন্য তোমার সবচেয়ে বড় wish কী? 💖",

"আমাকে প্রথম দেখে তোমার কী মনে হয়েছিল? 🌸",

"আমার কোন habit তোমার favourite? 🥰",

"আমাদের future নিয়ে তোমার dream কী? 💍",

"আমার কোন কথা তোমাকে সবচেয়ে বেশি হাসায়? 😊",

"আমার সাথে কোন জায়গায় যেতে চাও? ✈️",

"আমাকে এক কথায় describe করলে কী বলবে? ❤️"

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
