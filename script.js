var startButton = document.getElementById("start")
var nextButton = document.getElementById("next")
var questionContainer =document.getElementById("question-container")
var questionEl = document.getElementById("questions")
var answerEl = document.getElementById("buttons")

var shuffle, questionIndex


startButton.addEventListener("click", startQuiz)

function startQuiz() {
  console.log("working")
  shuffle = questions.sort(()=>Math.random() - .5)
  questionIndex = 0;
  nextQuestion();
}
function nextQuestion(){
resetAns()
showQuestion(shuffle[questionIndex])
}
function showQuestion(question){
questionEl.innerText = question.question
question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
      button.addEventListener("click", selectAns)
      answerEl.appendChild(button)
});
}

function resetAns(){
    nextButton.classList.add("hide")
    while(answerEl.firstChild){
        answerEl.removeChild(answerEl.firstChild)
    }
}
function selectAns(e){
 
}

var questions = [
 {
    question: "What is the square of 2401? ",
    answers: [
    {text: "1", correct: true},
    {text: "22", correct: false}

  ]
 }   
]