const easyQuestions = [
    { q: "2 + 2", a: 4 },
    { q: "3 + 5", a: 8 },
    { q: "1 + 1", a: 2 },
    { q: "4 + 4", a: 8 },
    { q: "5 + 3", a: 8 },
];

const mediumQuestions = [
    { q: "12 + 15", a: 27 },
    { q: "14 + 19", a: 33 },
    { q: "10 + 21", a: 31 },
    { q: "17 + 13", a: 30 },
    { q: "22 + 18", a: 40 },
];

const hardQuestions = [
    { q: "45 + 67", a: 112 },
    { q: "78 + 99", a: 177 },
    { q: "123 + 456", a: 579 },
    { q: "234 + 789", a: 1023 },
    { q: "567 + 890", a: 1457 },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let totalTime = 0;

function startQuiz() {
    const difficulty = document.getElementById('difficulty-level').value;
    let questions;

    if (difficulty === 'easy') {
        questions = easyQuestions;
    } else if (difficulty === 'medium') {
        questions = mediumQuestions;
    } else if (difficulty === 'hard') {
        questions = hardQuestions;
    }

    document.getElementById('difficulty').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');

    displayQuestion(questions);
}

function displayQuestion(questions) {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex].q;
        document.getElementById('question').innerText = question;
        document.getElementById('answer').value = '';
        document.getElementById('feedback').innerText = '';
        startTimer(questions);
    } else {
        clearInterval(timer);
        document.getElementById('question-container').innerHTML = `<h2>Quiz Completed! Your score is ${score}/${questions.length}</h2>`;
        document.getElementById('question-container').innerHTML += `<h2>Time Taken: ${totalTime} seconds</h2>`;
    }
}

function submitAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const difficulty = document.getElementById('difficulty-level').value;
    let questions;

    if (difficulty === 'easy') {
        questions = easyQuestions;
    } else if (difficulty === 'medium') {
        questions = mediumQuestions;
    } else if (difficulty === 'hard') {
        questions = hardQuestions;
    }

    if (userAnswer === questions[currentQuestionIndex].a) {
        score++;
        document.getElementById('feedback').innerText = 'Correct!';
        document.getElementById('feedback').style.color = 'green';
    } else {
        document.getElementById('feedback').innerText = 'Incorrect';
        document.getElementById('feedback').style.color = 'red';
    }

    currentQuestionIndex++;
    clearTimeout(timer);
    setTimeout(() => displayQuestion(questions), 1000);
}

function startTimer(questions) {
    let timeLeft = 10;
    document.getElementById('timer').innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        totalTime++;
        document.getElementById('timer').innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('feedback').innerText = 'Time Up!';
            document.getElementById('feedback').style.color = 'red';
            currentQuestionIndex++;
            setTimeout(() => displayQuestion(questions), 1000);
        }
    }, 1000);
}