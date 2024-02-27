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