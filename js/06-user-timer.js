"use strict";

//0. НАЧАЛЬНОЕ СООБЩЕНИЕ

console.log("Context Demo application started");

//1. ПОЛУЧАЕМ HTML-ЭЛЕМЕНТЫ

const nameInput =
    document.querySelector("#userName");

const showNowButton =
    document.querySelector("#showNow");

const showBrokenButton =
    document.querySelector("#showBroken");

const showArrowButton =
    document.querySelector("#showArrow");

const showBindButton =
    document.querySelector("#showBind");

const result =
    document.querySelector("#result");

//2. СОЗДАЁМ ОБЪЕКТ ПОЛЬЗОВАТЕЛЯ

const user = {

    name: "Anna",

    showName() {

        console.log("this =", this);

        const message = `Hello, ${this.name}!`;

        result.textContent = message;

        return message;
    }
};

//3. ОБНОВЛЯЕМ ИМЯ ПОЛЬЗОВАТЕЛЯ

function updateUserName() {

    const name = nameInput.value.trim();

    user.name = name || "Guest";
}

//4. КНОПКА SHOW NOW

showNowButton.addEventListener("click", () => {

    updateUserName();

    user.showName();
});

//5. КНОПКА SHOW LATER (BROKEN)

showBrokenButton.addEventListener("click", () => {

    updateUserName();
    console.log(user);

    result.textContent =
        "Waiting 1 second (broken context)...";

    setTimeout(user.showName, 1000);
});

//6. КНОПКА SHOW LATER (ARROW)

showArrowButton.addEventListener("click", () => {

    updateUserName();

    result.textContent =
        "Waiting 1 second (arrow solution)...";

    setTimeout(() => {


        user.showName();

    }, 1000);
});

//7. КНОПКА SHOW LATER (BIND)

showBindButton.addEventListener("click", () => {

    updateUserName();

    result.textContent =
        "Waiting 1 second (bind solution)...";

    const boundShowName = user.showName.bind(user);

    setTimeout(boundShowName, 1000);
});

console.log("Tests simple!!!!!!")

const user1 = {
    name: "Anna",
    greet() {
        console.log("Hello, " + this.name);
    }
};

user1.greet();//Hello, Anna

const user2= {
    name: "Bob",
    greet() {
        console.log("Hello, " + this.name);
    }
}

const fn=user2.greet;
// fn();//ERROR undefinde.name

const user3 = {
    name: "John",
    greet(){
        const inner = () => {
            console.log("Hello, " + this.name);
        }
        inner();
    }
}

user3.greet();

const user4 = {
    name: "Alice",
    greet: () => {
        console.log("Hello, " + this.name);
    }
}

user4.greet()



