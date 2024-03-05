const questions = [
    {
        question: "What is the capital city of France?",
        choices: ["A. London", "B. Paris", "C. Rome", "D. Berlin "],
        correctAnswer: "B"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["A. Mars", "B. Jupiter", "C. Earth", "D. Saturn "],
        correctAnswer: "B"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["A. William Shakespeare", "B. Charles Dickens", "C. Jane Austen", "D. Mark Twain "],
        correctAnswer: "A"
    }
];

const quizForm = document.getElementById("quizForm");
const feedback = document.getElementById("feedback");

let currentQuestionIndex = 0;

//Load initial question
loadQuestion();

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("choiceA").textContent = currentQuestion.choices[0];
    document.getElementById("choiceB").textContent = currentQuestion.choices[1];
    document.getElementById("choiceC").textContent = currentQuestion.choices[2];
    document.getElementById("choiceD").textContent = currentQuestion.choices[3];
}

//Function to handle form submission
quizForm.addEventListener("submit", function(event){

})
 