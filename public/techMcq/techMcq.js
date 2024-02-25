

let div = document.getElementById("container")
let count = 0
let submitCount = 0
// let quizSelectNew = document.getElementById("quiz-select").value

let quizArr = []
let correctAns = []

const quiz = new XMLHttpRequest()
let path = "http://localhost:3000/techMcq/getTechMcq"

quiz.open("get",path)

quiz.send()

quiz.onload=function(){
    if(quiz.status==200){
        let response = this.responseText

        let arr = JSON.parse(response)
        for(let i=0;i<arr.length;i++){
            quizArr.push(arr[i])
        }
      display()
    }
}


function display(){ 
 
    let arr = []
    let random = []
    for(let i=0;i<10;i++){
        arr.push(i)
    }
    const shuffledArray = arr.sort((a, b) => 0.5 - Math.random());

    for(let i=0;i<10;i++){
          
            let randomNo = shuffledArray[i] 
            let question =  document.createElement("h3")
            question.textContent = (i+1)+"] "+ quizArr[randomNo].question;
            let mcqBox = document.createElement("div")
            mcqBox.classList.add("mcqBox")
            for(let j=0;j<4;j++){
                let radios = document.createElement("div")
                radios.innerHTML="<input type='radio' name='"+i+"'>"+quizArr[randomNo].options[j]
                question.appendChild(mcqBox)
                mcqBox.appendChild(radios)

            }
            
        let cans = quizArr[randomNo].correct_answer
        correctAns.push(cans)
           
           
        div.appendChild(question)
 

        }
     }



    //--------------------------------------------------------- After Submit Quiz


 submitQuiz.addEventListener("click",funSubmit,false)

 function funSubmit(){
 correctAnswers()
 
 setTimeout(()=>{
    
    let popup = document.getElementById("popup")
    popup.style.display="block"

    let divPop = document.createElement("div")
    let ansH1 = document.createElement("h1")
    ansH1.innerHTML = count + " Answers are Correct out of 10 & you got "+count*10+"% out of 100"

    divPop.append(ansH1)
    popup.append(divPop)

    if(count >= 8){
        let congrats = document.createElement("h2")
        congrats.innerHTML = "🤩Congratulations! You Got Good Marks 🎉🥳"
        divPop.append(congrats)
    } else if ( count >= 5 && count < 8){
        let congrats = document.createElement("h2")
        congrats.innerHTML = "😊Congratulations! You are Passed,but you need to Work Hard!✍"
        divPop.append(congrats)

    } else {
        let congrats = document.createElement("h2")
        congrats.innerHTML = "😔You are Failed! You need to dedicate all time to Study!📚"
        congrats.style.color="rgb(255, 43, 43)"
        divPop.append(congrats)

    }

 },400)

 submitCount++;

 setTimeout(()=>{
    window.scrollTo(0, 3000);
 },500)

}



function correctAnswers(){

 // if(submitCount==1){
 let h3values = document.querySelectorAll('div.mcqBox')

 let corAns;
 
 //-------Implemented the Logic of On checked of option it should give us the answer is right or wrong
 
 setTimeout(()=>{
     let mcqOptions = document.querySelectorAll('input[type=radio]')

     for(let i=0;i<(4*10);i++){
  
         for(j=0;j<10;j++){
             
             if(mcqOptions[i].checked){
                 let selectedValue = mcqOptions[i].parentNode.firstChild.nextSibling.nodeValue;
                 
                 if(selectedValue == quizArr[j].correct_answer){
                     console.log("Answer is Correct")
                     count++
                     console.log("Set timeout Count"+count)
                 }
                 
                
             }  
             
         }
     }
   
 },300)

 for(let i=0;i<10;i++){
     for(let j=0;j<4;j++){
         let mcqOptions = h3values[i].childNodes[j].childNodes[1].nodeValue
         console.log(mcqOptions)
         if(mcqOptions==correctAns[i]){ 
                      h3values[i].children[j].style.backgroundColor="green"
                       console.log("true")
                       
                 }
     }
 }
 
 }


