const quiz = {
      id: "uniqueID",
      questions: [
            {
                  id: 1,
                  text: "กรุงเทพฯ เป็นเมืองหลวงของประเทศอะไร?",
                  choices: ["ประเทศไทย", "ลาว", "กัมพูชา", "เวียดนาม"],
                  correct: "ประเทศไทย",
            },
            {
                  id: 2,
                  text: "แม่น้ำที่ยาวที่สุดในประเทศไทยคืออะไร?",
                  choices: ["แม่น้ำเจ้าพระยา", "แม่น้ำโขง", "แม่น้ำปิง", "แม่น้ำยม"],
                  correct: "แม่น้ำเจ้าพระยา",
            },
            {
                  id: 3,
                  text: "ธงชาติไทยมีทั้งหมดกี่สี?",
                  choices: ["2 สี", "3 สี", "4 สี", "5 สี"],
                  correct: "3 สี",
            },
            {
                  id: 4,
                  text: "ดอกไม้ประจำชาติไทยคืออะไร?",
                  choices: ["ดอกมะลิ", "ดอกบัว", "ดอกพุด", "ดอกราชพฤกษ์"],
                  correct: "ดอกราชพฤกษ์",
            },
            {
                  id: 5,
                  text: "สัตว์ชนิดใดเป็นสัญลักษณ์ของประเทศไทย?",
                  choices: ["ช้าง", "เสือ", "นก", "งู"],
                  correct: "ช้าง",
            },
            {
                  id: 6,
                  text: "เทศกาลสงกรานต์ตรงกับเดือนอะไร?",
                  choices: ["มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน"],
                  correct: "เมษายน",
            },
            {
                  id: 7,
                  text: "ประเทศไทยแบ่งออกเป็นกี่ภาค?",
                  choices: ["4 ภาค", "5 ภาค", "6 ภาค", "7 ภาค"],
                  correct: "6 ภาค",
            },
            {
                  id: 8,
                  text: "ขนมไทยชนิดใดที่มีชื่อเป็นมงคล?",
                  choices: ["ทองหยิบ", "ขนมครก", "กล้วยแขก", "ข้าวต้มมัด"],
                  correct: "ทองหยิบ",
            },
            {
                  id: 9,
                  text: "วันแม่แห่งชาติของไทยตรงกับวันที่เท่าไหร่?",
                  choices: ["12 กรกฎาคม", "12 สิงหาคม", "12 กันยายน", "12 ตุลาคม"],
                  correct: "12 สิงหาคม",
            },
            {
                  id: 10,
                  text: "อุทยานแห่งชาติแห่งแรกของไทยคือที่ไหน?",
                  choices: ["เขาใหญ่", "ดอยอินทนนท์", "น้ำหนาว", "เอราวัณ"],
                  correct: "เขาใหญ่",
            },
            {
                  id: 11,
                  text: "ภูเขาที่สูงที่สุดในประเทศไทยคืออะไร?",
                  choices: ["ดอยสุเทพ", "ดอยอินทนนท์", "ดอยหลวง", "ดอยผ้าห่มปก"],
                  correct: "ดอยอินทนนท์",
            },
            {
                  id: 12,
                  text: "ตลาดน้ำที่มีชื่อเสียงในประเทศไทยคืออะไร?",
                  choices: [
                        "ตลาดน้ำอัมพวา",
                        "ตลาดน้ำสำเพ็ง",
                        "ตลาดน้ำจตุจักร",
                        "ตลาดน้ำรัชดา",
                  ],
                  correct: "ตลาดน้ำอัมพวา",
            },
            {
                  id: 13,
                  text: "ประเทศใดอยู่ทางทิศตะวันตกของประเทศไทย?",
                  choices: ["ลาว", "พม่า", "กัมพูชา", "มาเลเซีย"],
                  correct: "พม่า",
            },
            {
                  id: 14,
                  text: "อาหารไทยชนิดใดที่ได้รับการยกย่องว่าอร่อยที่สุดในโลก?",
                  choices: ["แกงเขียวหวาน", "ต้มยำกุ้ง", "ส้มตำ", "ผัดไทย"],
                  correct: "ต้มยำกุ้ง",
            },
            {
                  id: 15,
                  text: "วันลอยกระทงจัดขึ้นในวันขึ้น 15 ค่ำ เดือนอะไร?",
                  choices: ["10", "11", "12", "1"],
                  correct: "12",
            },
            {
                  id: 16,
                  text: "ในหลวงรัชกาลที่ 9 ทรงงานด้านใดเป็นที่รู้จัก?",
                  choices: ["เกษตร", "ศิลปะ", "ดนตรี", "กีฬา"],
                  correct: "เกษตร",
            },
            {
                  id: 17,
                  text: "หมู่เกาะที่มีชื่อเสียงในทะเลอันดามันของไทยคืออะไร?",
                  choices: ["เกาะสมุย", "เกาะล้าน", "หมู่เกาะสิมิลัน", "เกาะช้าง"],
                  correct: "หมู่เกาะสิมิลัน",
            },
            {
                  id: 18,
                  text: "รัชกาลที่ 5 มีพระนามว่าอะไร?",
                  choices: [
                        "พระบาทสมเด็จพระมงกุฎเกล้าเจ้าอยู่หัว",
                        "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว",
                        "พระบาทสมเด็จพระปกเกล้าเจ้าอยู่หัว",
                        "พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช",
                  ],
                  correct: "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว",
            },
            {
                  id: 19,
                  text: "เครื่องดนตรีไทยชนิดใดที่มีลักษณะคล้ายระนาด?",
                  choices: ["ซออู้", "ฆ้องวง", "ขลุ่ย", "ฉิ่ง"],
                  correct: "ฆ้องวง",
            },
            {
                  id: 20,
                  text: "จังหวัดใดในประเทศไทยที่เรียกว่าดินแดนแห่งสามหมอก?",
                  choices: ["เชียงใหม่", "แม่ฮ่องสอน", "ลำปาง", "น่าน"],
                  correct: "แม่ฮ่องสอน",
            },
      ],
      timeLimit: 60, // วินาที
      passingScore: 60, // คะแนนผ่าน
};

let currentQuestionIndex = 0;
let selectedAnswers = [];
let timer;
let timeRemaining;

document.getElementById("startQuizBtn").addEventListener("click", startQuiz);
document
      .getElementById("nextQuestionBtn")
      .addEventListener("click", nextQuestion);
document.getElementById("retryBtn").addEventListener("click", retryQuiz);

function startQuiz() {
      document.getElementById("startQuizBtn").style.display = "none";
      document.getElementById("quiz-container").style.display = "block";

      // Show the first 5 questions
      showQuestions();

      // Start the timer
      timeRemaining = quiz.timeLimit;
      timer = setInterval(updateTimer, 1000);
}

function showQuestions() {
      const questionContainer = document.getElementById("question-container");
      questionContainer.innerHTML = "";

      const questionsToShow = quiz.questions.slice(
            currentQuestionIndex,
            currentQuestionIndex + 5
      );

      questionsToShow.forEach((question) => {
            const questionElement = document.createElement("div");
            questionElement.innerHTML = `
            <p>${question.text}</p>
            ${question.choices
                        .map(
                              (choice) => `
                <label><input type="radio" name="question-${question.id}" value="${choice}"> ${choice}</label>
            `
                        )
                        .join("<br>")}
        `;
            questionContainer.appendChild(questionElement);
      });

      document.getElementById("nextQuestionBtn").style.display = "block";
}

function nextQuestion() {
      const questionElements = document.querySelectorAll(
            '#question-container input[type="radio"]:checked'
      );
      questionElements.forEach((element) => {
            const questionId = parseInt(element.name.split("-")[1]);
            const answer = element.value;
            selectedAnswers.push({ questionId, answer });
      });

      currentQuestionIndex += 5;

      if (currentQuestionIndex >= quiz.questions.length) {
            clearInterval(timer);
            showResults();
      } else {
            showQuestions();
      }
}

function updateTimer() {
      if (timeRemaining <= 0) {
            clearInterval(timer);
            showResults();
      } else {
            timeRemaining--;
            document.getElementById(
                  "timer"
            ).innerText = `เวลาเหลือ: ${timeRemaining} วินาที`;
      }
}

function showResults() {
      let score = 0;
      let correctAnswers = [];

      selectedAnswers.forEach((answer) => {
            const question = quiz.questions.find((q) => q.id === answer.questionId);
            if (answer.answer === question.correct) {
                  score += 10; // Assume each correct answer gives 10 points
                  correctAnswers.push(question);
            }
      });

      const resultText = `คะแนน: ${score}/${quiz.questions.length * 10}`;
      const correctAnswersText = `คำตอบที่ถูกต้อง: ${correctAnswers
            .map((q) => q.text)
            .join("<br>")}`;

      document.getElementById("score").innerHTML = resultText;
      document.getElementById("correct-answers").innerHTML = correctAnswersText;

      document.getElementById("quiz-container").style.display = "none";
      document.getElementById("results-container").style.display = "block";
}

function retryQuiz() {
      selectedAnswers = [];
      currentQuestionIndex = 0;
      document.getElementById("results-container").style.display = "none";
      document.getElementById("startQuizBtn").style.display = "block";
}
