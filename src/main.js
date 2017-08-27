"use strict";

window.onload = getUserName;
var userNameId;
const uIdKey = "username";
var usernameDiv = document.getElementsByClassName("user-id-name")[0];
var getNameId = document.getElementsByClassName("get-username-modal")[0];
var usernInpt = document.getElementsByClassName("user-n-id")[0];
var usernameModalBtn = document.getElementsByClassName("modal-username-btn")[0];
var allQHolder = document.getElementsByClassName("all-q")[0];
var allAnsHolder = document.getElementsByClassName("all-ans")[0];
var noAnsHolder = document.getElementsByClassName("no-asw")[0];
var ascQ = document.getElementsByClassName("asc-q")[0];
var ascQModal = document.getElementsByClassName("asc-q-modal")[0];

ascQ.addEventListener("click",addQuestion);

function addQuestion(){
    ascQModal.removeAttribute("style");
}

function getUserName() {
    // по нажатию кнопки доставать введенный пользователем логин и подставлять в usernameDiv

    if (localStorage.getItem(uIdKey)) {
        userNameId = localStorage.getItem(uIdKey);
        setUsername();
    } else {
        getNameId.removeAttribute("style"); //отображение модального окна -> запрос юзернейма
        usernInpt.addEventListener("input", inputFormated);
        usernameModalBtn.addEventListener("click", setUsername); //отлавливаем нажатие кнопки сохранения
    }

}

function setUsername() {
    if (usernInpt.value.length >= 3 || userNameId) {
        if (!userNameId) {
            userNameId = usernInpt.value;
            getNameId.style.display = "none";
            if (!localStorage.getItem(uIdKey)) {
                localStorage.setItem(uIdKey, userNameId);
            }
        }
        usernameDiv.innerHTML = userNameId;
    } else {
        usernInpt.focus();
    }
}

function inputFormated() {
    usernInpt.value = formatStr(usernInpt.value);
}

function formatStr(str) {
    str = str.trim().replace(/\s+/g, " ");
    return str;
}