"use strict";

window.onload = init;

function init() {
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

    let numberOne = Number(number1Field.value);
    let numberTwo = Number(number2Field.value);
    let sum = numberOne + numberTwo;

    answerField.value = sum
}

function onSubBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const answerField = document.getElementById("answerField");

    let numberOne = Number(number1Field.value);
    let numberTwo = Number(number2Field.value);
    let difference = numberOne - numberTwo;

    answerField.value = difference
}

function onMultiBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const answerField = document.getElementById("answerField");

    let numberOne = Number(number1Field.value);
    let numberTwo = Number(number2Field.value);
    let product = numberOne * numberTwo;

    answerField.value = product
}

function onDivdBtnClicked() {
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const answerField = document.getElementById("answerField");

    let numberOne = Number(number1Field.value);
    let numberTwo = Number(number2Field.value);
    let quotient = numberOne / numberTwo;

    answerField.value = quotient
}
