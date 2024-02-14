let startQuiz = document.getElementById("start-quiz")
startQuiz.addEventListener("click",start,false)
// console.log("heelo")
let userName = document.getElementById("name")
let userEmail = document.getElementById("email")
// let quizSelect = document.getElementById("quiz-select")
let nameError = document.getElementById("nameError")
let emailError = document.getElementById("emailError")
let quizError = document.getElementById("quizError")

function start(){

    let quizSelect = document.getElementById("quiz-select").value
   
    if(userName.value==""){
        nameError.innerText="Please Enter Your Name!"
    } else {
        nameError.style.display="none"
    }
    
    if(userEmail.value==""){
        emailError.innerHTML="Please Enter Your Email Id!"
    } else {
        emailError.style.display="none"
    }

    if(quizSelect=="" || quizSelect=="Select the Quiz"){
        quizError.innerHTML="Please Select the Quiz"
    } else {
        quizError.style.display="none"
    }

   
    if(quizSelect == "technology" && userName.value != "" && userEmail.value != ""){
        location.assign("../techMcq/techmcq.html")
    } 

}


