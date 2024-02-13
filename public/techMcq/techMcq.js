const quiz = new XMLHttpRequest()
let path = "http://localhost:3000/techMcq/getTechMcq"

quiz.open("get",path)

quiz.send()

quiz.onload=function(){
    if(quiz.status==200){
        let response = this.responseText

        let arr = JSON.parse(response)
        console.log(arr)
    }
}