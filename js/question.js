///вопросы

const answers = [
  /*Положительные*/
  'Бесспорно',
  'Предрешено',
  'Никаких сомнений',
  'Определённо да',
  'Можешь быть уверен в этом',

  /*Нерешительно положительные*/
  'Мне кажется — «да»',
  'Вероятнее всего',
  'Хорошие перспективы',
  'Знаки говорят — «да»',
  'Да',

  /*Нейтральные*/
  'Пока не ясно, попробуй снова',
  'Спроси позже',
  'Лучше не рассказывать',
  'Сейчас нельзя предсказать',
  'Сконцентрируйся и спроси опять',

  /*Отрицательные*/
  'Даже не думай',
  'Мой ответ — «нет»',
  'По моим данным — «нет»',
  'Перспективы не очень хорошие',
  'Весьма сомнительно',
];
let answer = document.getElementById('answer');
let getAnswerBtn = $('.btnGetAnswer');
let answerPicker = answers[Math.floor(Math.random() * answers.length)];

getAnswerBtn.on('click', function (evt) {
  evt.preventDefault();
  answer.innerHTML = `<p>${
    answers[Math.floor(Math.random() * answers.length)]
  }</p>`;
  console.log(answer.innerHTML);
  // answer.append(`<p>${answerPicker}</p>`);
  console.log(answer.length);
});
