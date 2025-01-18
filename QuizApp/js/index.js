const quizQuestions = [
  {
    question: "What is the full form of HTML?",
    options: [
      "HyperText Machine Language",
      "HyperText Markup Language",
      "HyperText and Links Markup Language",
      "HyperTool Markup Language",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "What is the full form of CSS?",
    options: [
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["url", "link", "a", "href"],
    correctAnswerIndex: 1,
  },
  {
    question: "What does JS stand for in web development?",
    options: ["JollyScript", "JavaSource", "JustScript", "JavaScript"],
    correctAnswerIndex: 3,
  },
];

let index = 0;
let Right = 0 ,Wrong = 0;
let Total = parseInt(quizQuestions.length);
const Question = document.getElementById("Question");
const optionsinput = document.querySelectorAll(".optionsInput");
const SubmitButton = document.getElementById("btn");

const loadQuestions = () => {
  if (index === Total) {
    endQuiz();
  } else {
    const QuizData = quizQuestions[index];

    Question.innerHTML = QuizData.question;

    optionsinput[0].nextElementSibling.innerHTML = QuizData.options[0];
    optionsinput[1].nextElementSibling.innerHTML = QuizData.options[1];
    optionsinput[2].nextElementSibling.innerHTML = QuizData.options[2];
    optionsinput[3].nextElementSibling.innerHTML = QuizData.options[3];
  }
};

loadQuestions();

SubmitButton.addEventListener("click", (e) => {
  const QuizData = quizQuestions[index];

  const Ans = parseInt(getAnswer());

  if (Ans === QuizData.correctAnswerIndex) {
    index++;
    Reset();
    loadQuestions();
    Right++;
  } else {
    index++;
    Reset();
    loadQuestions();
    Wrong++;
  }
});

const getAnswer = () => {
  let Answer;
  optionsinput.forEach((items) => {
    if (items.checked) {
      Answer = items.value;
    }
  });

  return Answer;
};

const Reset = () => {
  optionsinput.forEach((value) => {
    value.checked = false;
  });
};

function endQuiz() {
  document.querySelector(
    ".Quiz-Container"
  ).innerHTML = `<h2>Thank you for playing Quizz</h2>
  <h2>Right Answer: ${Right}</h2>
  <h2>Wrong Answer: ${Wrong}</h2>
  <h2>Total:${Right} / ${Total}</h2>
  `;
}
