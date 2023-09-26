document.addEventListener("DOMContentLoaded", function () {
  // Variables
  let currentQuestionIndex = 0;
  let questions = [];
  let correctAnswersCount = 0;
  let incorrectAnswersCount = 0;
  let timer; // Variable to hold the timer
  let isOptionClicked = false;

  // DOM Elements
  const questionElement = document.querySelector(".questions p");
  const optionsElements = document.querySelectorAll(".quizzOptions > div");
  const questionCountElement = document.querySelector(".questionsLeft");
  const correctQuestions = document.querySelector(".greenIndicator span");
  const correctQuestionsBar = document.querySelector(".greenIndicator .line");
  const incorrectQuestions = document.querySelector(".redIndicator span");
  const incorrectQuestionsBar = document.querySelector(".redIndicator .line");

  //points Page elements
  const correctAnswerPoints = document.querySelector(".correctQuestions");
  const incorrectAnswerPoints = document.querySelector(".incorrectQuestions");
  const totalPoints = document.querySelector(".totalPoints");

  // Retrieve the counts from localStorage
  const correctCount = localStorage.getItem("correctAnswersCount");
  const incorrectCount = localStorage.getItem("incorrectAnswersCount");

  // Display the counts
  if (correctAnswerPoints && incorrectAnswerPoints) {
    let tp = correctCount * 5;
    totalPoints.innerHTML = `${tp}`;

    correctAnswerPoints.innerHTML = correctCount;
    incorrectAnswerPoints.innerHTML = incorrectCount;
  }

  // clear the counts from localStorage
  // localStorage.removeItem("correctAnswersCount");
  // localStorage.removeItem("incorrectAnswersCount");

  const timeLeft = document.querySelector(".timerIndicator span");

  const categoryId = localStorage.getItem("categoryId");

  // Fetch questions from API
  function fetchQuestions() {
    fetch(
      `https://opentdb.com/api.php?amount=20&category=${categoryId}&difficulty=easy&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => {
        questions = data.results;
        displayQuestion(currentQuestionIndex);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }

  // Display question
  function displayQuestion(index) {
    isOptionClicked = false;

    if (index < questions.length) {
      const question = questions[index];
      questionElement.textContent = decodeHTMLEntities(question.question);

      // Mix correct answer with incorrect answers
      const answers = [...question.incorrect_answers, question.correct_answer];
      shuffleArray(answers);

      // Display answers
      answers.forEach((answer, i) => {
        optionsElements[i].querySelector("p").textContent =
          decodeHTMLEntities(answer);
        optionsElements[i].querySelector(".correctIcon img").src =
          "./assets/svgs/emptyOption.svg";
      });

      // Update question count
      questionCountElement.textContent = `Question ${index + 1}/${
        questions.length
      }`;

      startTimer(); // Start the timer for the question
    } else {
      clearInterval(timer);

      // Store the counts in localStorage
      localStorage.setItem("correctAnswersCount", correctAnswersCount);
      localStorage.setItem("incorrectAnswersCount", incorrectAnswersCount);
      // localStorage.removeItem("categoryId");

      window.location.href = "./summary.php";
    }
  }

  // Shuffle array (used to shuffle answers)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Decode HTML entities
  function decodeHTMLEntities(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }

  // Start the timer for each question
  function startTimer() {
    let time = 10; // 10 seconds for each question
    timeLeft.textContent = time;

    timer = setInterval(() => {
      time--;
      timeLeft.textContent = time;

      if (time <= 0) {
        clearInterval(timer); // Stop the timer
        incorrectAnswersCount++;
        incorrectQuestions.innerHTML = incorrectAnswersCount;
        incorrectQuestionsBar.style.width = `${
          incorrectAnswersCount * 0.25
        }rem`;

        // Find and show the correct answer
        optionsElements.forEach((opt, idx) => {
          if (
            opt.querySelector("p").textContent ===
            decodeHTMLEntities(questions[currentQuestionIndex].correct_answer)
          ) {
            opt.querySelector(".correctIcon img").src =
              "./assets/svgs/correctQues.svg";
          }
        });

        setTimeout(() => {
          currentQuestionIndex++;
          displayQuestion(currentQuestionIndex);
        }, 1000);
      }
    }, 1000); // Decrease the time every second
  }

  // Event listener for option click
  optionsElements.forEach((option, i) => {
    option.addEventListener("click", () => {
      if (isOptionClicked) return;

      isOptionClicked = true;
      clearInterval(timer); // Clear the timer when an option is clicked

      const selectedAnswer = option.querySelector("p").textContent;
      if (
        selectedAnswer ===
        decodeHTMLEntities(questions[currentQuestionIndex].correct_answer)
      ) {
        correctAnswersCount++;
        correctQuestions.innerHTML = correctAnswersCount;
        correctQuestionsBar.style.width = `${correctAnswersCount * 0.25}rem`;
        option.querySelector(".correctIcon img").src =
          "./assets/svgs/correctQues.svg";
        setTimeout(() => {
          currentQuestionIndex++;
          displayQuestion(currentQuestionIndex);
        }, 1000);
      } else {
        incorrectAnswersCount++;
        incorrectQuestions.innerHTML = incorrectAnswersCount;
        incorrectQuestionsBar.style.width = `${
          incorrectAnswersCount * 0.25
        }rem`;
        option.querySelector(".correctIcon img").src =
          "./assets/svgs/wrongOption.svg";
        // Find and show the correct answer
        optionsElements.forEach((opt, idx) => {
          if (
            opt.querySelector("p").textContent ===
            decodeHTMLEntities(questions[currentQuestionIndex].correct_answer)
          ) {
            opt.querySelector(".correctIcon img").src =
              "./assets/svgs/correctQues.svg";
          }
        });
        setTimeout(() => {
          currentQuestionIndex++;
          displayQuestion(currentQuestionIndex);
        }, 1000);
      }
    });
  });

  // Start fetching questions
  fetchQuestions();
});
