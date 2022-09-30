"use strict";

window.onload = init;

function init() {
    // get the button element
    const addBtn = document.getElementById("addBtn");
    const subBtn = document.getElementById("subBtn");
    const multiBtn = document.getElementById("multiBtn");
    const divdBtn = document.getElementById("divdBtn");

    addBtn.onclick = onAddBtnClicked;
    subBtn.onclick = onSubBtnClicked;
    multiBtn.onclick = onMultiBtnClicked;
    divdBtn.onclick = onDivdBtnClicked;
}

function onAddBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const answerField = document.getElementById("answerField");
    const messagePara = document.getElementById("messagePara");

    let numberOne = Number(number1Field.value);
    let numberTwo = Number(number2Field.value);
    let sum = numberOne + numberTwo;

    if (isNaN(numberOne) || isNaN(numberTwo)) {
        messagePara.innerHTML = "One or more of your input values are invalid.";
        return;
    }

    answerField.value = sum
    messagePara.innerHTML = "";
}

function onSubBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const answerField = document.getElementById("answerField");
    const messagePara = document.getElementById("messagePara");

    let numberOne = Number(number1Field.value);
    let numberTwo = Number(number2Field.value);
    let difference = numberOne - numberTwo;

    if (isNaN(numberOne) || isNaN(numberTwo)) {
        messagePara.innerHTML = "One or more of your input values are invalid.";
        return;
    }

    answerField.value = difference
    messagePara.innerHTML = "";
}

function onMultiBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const answerField = document.getElementById("answerField");
    const messagePara = document.getElementById("messagePara");

    let numberOne = Number(number1Field.value);
    let numberTwo = Number(number2Field.value);
    let product = numberOne * numberTwo;

    if (isNaN(numberOne) || isNaN(numberTwo)) {
        messagePara.innerHTML = "One or more of your input values are invalid.";
        return;
    }

    answerField.value = product
    messagePara.innerHTML = "";
}

function onDivdBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const answerField = document.getElementById("answerField");
    const messagePara = document.getElementById("messagePara");

    let numberOne = Number(number1Field.value);
    let numberTwo = Number(number2Field.value);
    let quotient = numberOne / numberTwo;

    if (isNaN(numberOne) || isNaN(numberTwo)) {
        messagePara.innerHTML = "One or more of your input values are invalid.";
        return;
    }

    answerField.value = quotient
    messagePara.innerHTML = "";
}
