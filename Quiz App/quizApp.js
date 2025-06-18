// DOMs
const quizElement = document.querySelector("#quiz");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_textElement = document.getElementById("a_text");
const b_textElement = document.getElementById("b_text");
const c_textElement = document.getElementById("c_text");
const d_textElement = document.getElementById("d_text");
const submitButtonElement = document.getElementById("submit");

// Array of questions
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

//Quiz variables
let currentQuiz = 0;
let score = 0;

loadQuiz();

//Load Quiz Function
function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionElement.textContent = currentQuizData.question;
    a_textElement.textContent = currentQuizData.a;
    b_textElement.textContent = currentQuizData.b;
    c_textElement.textContent = currentQuizData.c;
    d_textElement.textContent = currentQuizData.d;
};

//Unselect Function
function deselectAnswer() {
    answerElement.forEach(answerElement => answerElement.checked = false);
};

//Selected Answer Function
function getSelected() {
    let answer;

    answerElement.forEach(answerElement => {
        if(answerElement.checked) {
            answer = answerElement.id;
        };
    });

    return answer;
};

// Submit Button Event Listener
submitButtonElement.addEventListener('click', () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        };
        currentQuiz ++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizElement.innerHTML = `
                <h1>You answered ${score}/${quizData.length} questions correctly </h1>

                <button onclick="location.reload()">Reload</button>
            `
        };
    };
});