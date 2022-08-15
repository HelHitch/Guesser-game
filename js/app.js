let btn = document.getElementById('submit-btn');
let userName = document.getElementById('name');
let alertWrapper = $('#alert--wrapper');
let overlay = document.getElementById('overlay');
let alertWindow = document.querySelectorAll('#alert');
let form = $('.form-group');

///главная
function alert() {
  let userNameHello =
    userName.value.charAt(0).toUpperCase() +
    userName.value.slice(1, userName.length);
  alertWrapper.append(
    `<div id='alert' class='overlay--alert'> Привет, ${userNameHello}</div>`
  );
}

function fadeAlert() {
  $('#alert').fadeOut(1000);
}

btn.onclick = function (event) {

  event.preventDefault();
  overlay.style.display = 'block';
  alert();
  let alertWindow = document.querySelectorAll('#alert');
  alertWindow.forEach((elem) => {
    if (!this.classList.contains('animation')) {
      elem.classList.add('animation');
    } else {
      elem.classList.remove('animation');
    }
  });

  setTimeout(function removeAlert() {
    alertWindow.forEach((elem) => {
      elem.remove();
    });
  }, 3000);
  console.log(btn.innerHTML);
  if (btn.innerHTML == 'Подтвердить') {
    btn.classList.add('opacity');
    setTimeout(function () {
      btn.remove();
      overlay.remove();
    }, 3000);
  }
  setTimeout(() => {
    form.append(
      '<button id="next-btn" class="btn btn-warning btn-next"> <a href = "../pages/questions.html">Далее</a> </button>'
    );
  }, 3000);
};

//вопросы

// const answers = [
//   /*Положительные*/
//   'Бесспорно',
//   'Предрешено',
//   'Никаких сомнений',
//   'Определённо да',
//   'Можешь быть уверен в этом',

//   /*Нерешительно положительные*/
//   'Мне кажется — «да»',
//   'Вероятнее всего',
//   'Хорошие перспективы',
//   'Знаки говорят — «да»',
//   'Да',

//   /*Нейтральные*/
//   'Пока не ясно, попробуй снова',
//   'Спроси позже',
//   'Лучше не рассказывать',
//   'Сейчас нельзя предсказать',
//   'Сконцентрируйся и спроси опять',

//   /*Отрицательные*/
//   'Даже не думай',
//   'Мой ответ — «нет»',
//   'По моим данным — «нет»',
//   'Перспективы не очень хорошие',
//   'Весьма сомнительно',
// ];
// let answer = document.getElementById('answer');
// let getAnswerBtn = $('.btnGetAnswer');
// let answerPicker = answers[Math.floor(Math.random() * answers.length)];

// getAnswerBtn.on('click', function (evt) {
//   evt.preventDefault();
//   answer.innerHTML = `<p>${answers[Math.floor(Math.random() * answers.length)]}</p>`;
//   console.log(answer.innerHTML);
//   // answer.append(`<p>${answerPicker}</p>`);
//   console.log(answer.length)
//  })
