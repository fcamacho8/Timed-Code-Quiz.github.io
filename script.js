var startButton = document.getElementById("start")
var questionEl = document.getElementById("question")
var answerOne = document.getElementById("ans1")
var answerTwo = document.getElementById("ans2")
var answerThree = document.getElementById("ans3")
var answerFour = document.getElementById("ans4")
var score = document.getElementById("score")
var timer = document.getElementById("timer")
var ansButtons = document.getElementById("ansButtons")
var scoreBlock = document.getElementById("scoreBlock")



var currentQuestion = 0;
var points = 0;
var correct = "";
var questions = [
    {
        question: "What is the square root of 2209?",
        selectA: "1",
        selectB: "47",
        selectC: "-28",
        selectD: "Red",
        correct: "47",
    },
    {
        question: "What's planck's constant?",
        selectA: "3.1416",
        selectB: "6.67x10^-11",
        selectC: "6.63x10^-34",
        selectD: "123",
        correct: "6.63x10^-34",
    },
    {
        question: "Who published his theory of general relativity in 1915",
        selectA: "Leonardo DaVinci",
        selectB: "Elon Musk",
        selectC: "Albert Einstein",
        selectD: "Larry Bird",
        correct: "Hyperlink",
    },
    {
        question: "How much does the earth weigh(Mass)?",
        selectA: "5.972 × 10^24 kg",
        selectB: "1 gram",
        selectC: "35cm",
        selectD: "1.898 × 10^27 kg",
        correct: "5.972 × 10^24 kg",
    },
    {
        question: "What is the smallest particle known so far?",
        selectA: "Atom",
        selectB: "Electrons",
        selectC: "Grain of sand",
        selectD: "Quarks",
        correct: "Quarks",
    },
]
ansButtons.style.display = "none";
scoreBlock.style.display = "none";


function startQuiz() {
    event.preventDefault();

    ansButtons.style.display = "grid";

    questionEl.textContent = questions[currentQuestion].question;
    answerOne.textContent = questions[currentQuestion].selectA;
    answerTwo.textContent = questions[currentQuestion].selectB;
    answerThree.textContent = questions[currentQuestion].selectC;
    answerFour.textContent = questions[currentQuestion].selectD;
    startCounter();

    startButton.style.display = "none"

};


function startCounter() {
    time = 60;
    interval = setInterval(function () {
        time--;
        timer.textContent = time;
        if (time <= 0 || currentQuestion >= questions.length) {
            clearInterval(interval);
            timer.style.display = "none"
            scoreBlock.style.display ="block"
        }
    }, 1000);
}

function scorePoints() {
    score.textContent = points;

}

startButton.addEventListener("click", startQuiz);

answerOne.addEventListener("click", function (event) {
    var correct = event.target.textContent;
    if (correct === questions[currentQuestion].correct) {
        alert("You are correct!")
        points += 1;
        scorePoints();
    }
    else {
        alert("You are wrong!")
        time += -12;
    }
    currentQuestion++;
    questionEl.textContent = questions[currentQuestion].question;
    answerOne.textContent = questions[currentQuestion].selectA;
    answerTwo.textContent = questions[currentQuestion].selectB;
    answerThree.textContent = questions[currentQuestion].selectC;
    answerFour.textContent = questions[currentQuestion].selectD;
});
answerTwo.addEventListener("click", function (event) {
    var correct = event.target.textContent;
    if (correct === questions[currentQuestion].correct) {
        alert("You are correct!")
        points++;
        scorePoints();
    }
    else {
        alert("You are wrong!")
        time += -12;
    }
    currentQuestion++;
    questionEl.textContent = questions[currentQuestion].question;
    answerOne.textContent = questions[currentQuestion].selectA;
    answerTwo.textContent = questions[currentQuestion].selectB;
    answerThree.textContent = questions[currentQuestion].selectC;
    answerFour.textContent = questions[currentQuestion].selectD;
});
answerThree.addEventListener("click", function (event) {
    var correct = event.target.textContent;
    if (correct === questions[currentQuestion].correct) {
        alert("You are correct!")
        points++;
        scorePoints();

    }
    else {
        alert("You are wrong!")
        time += -12;
    }
    currentQuestion++;
    questionEl.textContent = questions[currentQuestion].question;
    answerOne.textContent = questions[currentQuestion].selectA;
    answerTwo.textContent = questions[currentQuestion].selectB;
    answerThree.textContent = questions[currentQuestion].selectC;
    answerFour.textContent = questions[currentQuestion].selectD;
});
answerFour.addEventListener("click", function (event) {
    var correct = event.target.textContent;
    if (correct === questions[currentQuestion].correct) {

        alert("You are correct!")
        points++;
        scorePoints();

    }
    else {
        alert("You are wrong!")
        time += -12;
    }
    currentQuestion++;
    questionEl.textContent = questions[currentQuestion].question;
    answerOne.textContent = questions[currentQuestion].selectA;
    answerTwo.textContent = questions[currentQuestion].selectB;
    answerThree.textContent = questions[currentQuestion].selectC;
    answerFour.textContent = questions[currentQuestion].selectD;


});


scoreBlock.style.display;