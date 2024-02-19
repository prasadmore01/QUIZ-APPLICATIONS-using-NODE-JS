

let div = document.getElementById("container")
// let quizSelectNew = document.getElementById("quiz-select").value

let quizArr = []


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
        // display()
    }
}

//SELECT QUIZ SCRIPT STARTS HERE 

let quizBox = document.querySelectorAll(".quiz-box")
let quizHeadArray = []
for(let i=0;i<quizBox.length;i++){
    quizBox[i].addEventListener("click",()=>{

        let quizHeading = quizBox[i].lastElementChild.firstElementChild.textContent
        console.log(quizHeading)
        quizHeadArray.push(quizHeading)
        display()
    })
}



function display(){ 
   console.log("Selected Quiz is "+quizHeadArray[0])    
    
    for(let i=0;i<10;i++){
        if(quizArr[i].category == quizHeadArray[0]){

            let question = document.createElement("h3")
            question.textContent = i+"] "+quizArr[i].question;
            let mcqBox = document.createElement("div")
            mcqBox.classList.add("mcqBox")
            for(let j=0;j<4;j++){
                let radios = document.createElement("div")
                radios.innerHTML="<input type='radio' name='"+i+"'>"+quizArr[i].options[j]
                question.appendChild(mcqBox)
                mcqBox.appendChild(radios)

        }
        
        div.appendChild(question)
        }
    }
}