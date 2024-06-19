
const quizData = [
    {
        question: "Which component is known as the 'brain' of the computer?",
        options: ["CPU", "GPU", "RAM", "PSU"],
        answer: "CPU"
    },
    {
        question: "Which component is responsible for displaying graphics on a computer?",
        options: ["CPU", "GPU", "RAM", "Motherboard"],
        answer: "GPU"
    },
    {
        question: "Which component stores data permanently even when the computer is turned off?",
        options: ["RAM", "CPU", "SSD", "HDD"],
        answer: "SSD"
    },
    {
        question: "Which type of RAM is faster?",
        options: ["DDR3", "DDR4", "DDR2", "SDRAM"],
        answer: "DDR4"
    },
    {
        question: "Which interface is commonly used to connect external devices like mice and keyboards?",
        options: ["USB", "HDMI", "VGA", "Thunderbolt"],
        answer: "USB"
    },
    {
        question: "Which component manages communication between all other components in a computer?",
        options: ["CPU", "GPU", "Motherboard", "PSU"],
        answer: "Motherboard"
    },
    {
        question: "Which component provides power to all other components in a computer?",
        options: ["CPU", "PSU", "Motherboard", "RAM"],
        answer: "PSU"
    },
    {
        question: "Which storage type has no moving parts?",
        options: ["HDD", "SSD", "Floppy Disk", "CD-ROM"],
        answer: "SSD"
    },
    {
        question: "Which cooling method is commonly used to cool CPUs?",
        options: ["Air cooling", "Water cooling", "Liquid nitrogen cooling", "Passive cooling"],
        answer: "Air cooling"
    },
    {
        question: "Which form factor is typically used for desktop motherboards?",
        options: ["ATX", "ITX", "BTX", "MicroATX"],
        answer: "ATX"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;

    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.classList.add('option-btn');
        optionElement.addEventListener('click', checkAnswer);
        optionsElement.appendChild(optionElement);
    });

    nextButton.disabled = true;
    feedbackElement.textContent = '';
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
        score++;
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = `Wrong! The correct answer is: ${correctAnswer}`;
    }

    nextButton.disabled = false;
    document.querySelectorAll('.option-btn').forEach(button => {
        button.disabled = true;
    });
}

nextButton.addEventListener('click', function() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    questionElement.textContent = `Quiz completed! Your score is ${score} out of ${quizData.length}`;
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';
    feedbackElement.textContent = '';
}

// Start the quiz
loadQuestion();














