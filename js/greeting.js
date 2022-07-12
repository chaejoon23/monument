// const loginForm = document.getElementById("login-form");
//getElementBy~~ 는 ~~ 를 기준으로 document에서 element를 찾는다.
//input과 button을 html에서 자바스크립트로 가져와야함 
const loginForm = document.querySelector("#login-form")
const loginIpunt = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) { //event ==> argument
    event.preventDefault(); //브라우저의 기본 동작을 막는 함수
    loginForm.classList.add(HIDDEN_CLASSNAME);//classList를 이용하여 클래스네임 추가, 삭제 가능
    const userName = loginIpunt.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paingGrrrtings(userName);
}
// input에 입력한 값을 가져오려면 value값을 가져오면 된다.

//username 을 출력하는 함수
function paingGrrrtings (username) {
    greeting.innerText  =`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


if (savedUserName === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show greeting
    paingGrrrtings(savedUserName);
}