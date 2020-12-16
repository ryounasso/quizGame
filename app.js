const quiz = [
  {
    question: 'UVERworld史上最も売れたシングルはどれ？',
    answers: [
      '儚くも永久のカナシ',
      'Touch off',
      'THE OVER',
      'クオリア'
    ],
    correct: '儚くも永久のカナシ'
  },
  {
    question: 'UVERworld史上最も売れたアルバムは次のうちどれ？',
    answers: [
      'UNSER',
      'TYCOON',
      '0CHOIR',
      'Neo SOUND BEST'
    ],
    correct: 'Neo SOUND BEST'
  },
  {
    question: 'TAKUYA∞は歌う時に何種類の声を出すことができる？',
    answers: [
      '4種類',
      '5種類',
      '6種類',
      '7種類'
    ],
    correct: '6種類'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  //答えのテキストを変更・変数に代入
  for (let i = 0; i < buttonLength; i++) {
    $button[i].textContent = quiz[quizIndex].answers[i];
  }
}

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了. 正解数は' + score + '/' + quizLength + 'です.')
  };
};

for (let i = 0; i < buttonLength; i++) {
  $button[i].addEventListener('click', (e) => {
    clickHandler(e);
  });
};
