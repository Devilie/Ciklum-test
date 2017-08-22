'use strict';

window.onload = getUserName;
var userNameId;
function getUserName() {
    // Добавить проверку на наличие username в local storage; 
    // по нажатию кнопки доставать введенный пользователем логин и подставлять в usernameDiv
    var UsernameModalBtn = document.getElementsByClassName("modal-username-btn")[0].addEventListener("click", verifideUsername);
    //<button type="button" onClick="document.getElementsByClassName('get-username-modal')[0].style.display='none';">Сохранить</button>
    userNameId = document.getElementsByClassName('get-username-modal')[0].removeAttribute('style');
    var usernameDiv = document.getElementsByClassName("user-id-name");
    usernameDiv[0].innerHTML = "Somebody";
}