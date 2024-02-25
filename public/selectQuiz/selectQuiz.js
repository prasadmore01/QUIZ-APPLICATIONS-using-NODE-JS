let quizBox = document.querySelectorAll(".quiz-box")
let quizHeadArray = []
for(let i=0;i<quizBox.length;i++){
    quizBox[i].addEventListener("click",()=>{

        let quizHeading = quizBox[i].lastElementChild.firstElementChild.textContent
        console.log(quizHeading)
        quizHeadArray.push(quizHeading)
        if(quizHeadArray[0]=="technology"){
        window.open("../techMcq/techMcq.html")
        location.assign("../techMcq/techMcq.html")
        } else if(quizHeadArray[0]=="Science"){
            window.open("../techMcq/techMcq.html")
            location.assign("../techMcq/techMcq.html")
            } else if(quizHeadArray[0]=="Mathematics"){
                window.open("../techMcq/techMcq.html")
                location.assign("../techMcq/techMcq.html")
            } else if(quizHeadArray[0]=="History"){
                window.open("../techMcq/techMcq.html")
                location.assign("../techMcq/techMcq.html")
            } else if(quizHeadArray[0]=="Computer"){
                window.open("../techMcq/techMcq.html")
                location.assign("../techMcq/techMcq.html")
            } else if(quizHeadArray[0]=="Geography"){
                window.open("../techMcq/techMcq.html")
                location.assign("../techMcq/techMcq.html")
            } else {
                window.alert("Error Occured!")
            }
    })
}
