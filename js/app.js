let btn = document.getElementById('submit-btn');
let userName = document.getElementById('name');
let alertWrapper = $('#alert--wrapper');
let overlay = document.getElementById('overlay');
let alertWindow = document.querySelectorAll('#alert');
let form = $('.form-group');

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
  console.log('hui 1');
  alertWindow.forEach((elem) => {
    console.log('hui 2');
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
    if( btn.innerHTML == 'Подтвердить'){
        btn.classList.add('opacity');
        setTimeout(function(){
            btn.remove() ;
            overlay.remove() ;
        }, 3000);
    };
  setTimeout(() => {
    form.append(
      '<button id="next-btn" class="btn btn-warning btn-next"> <a href = "*">Далее</a> </button>'
    );
  }, 3000);

};
