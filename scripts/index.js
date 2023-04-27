"use strict";

const addBtn = document.getElementById("addBtn");
addBtn.onclick = onAddBtnClick;

const subtractBtn = document.getElementById("subtractBtn");
subtractBtn.onclick = onSubtractBtnClick;

const multiplyBtn = document.getElementById("multiplyBtn");
multiplyBtn.onclick = onMultiplyBtnClick;

const divideBtn = document.getElementById("divideBtn");
divideBtn.onclick = onDivideBtnClick;

const num1El = document.getElementById("number1Field");
const num2El = document.getElementById("number2Field");
const answerEl = document.getElementById("answerField");

function onAddBtnClick() {
  const answer = Number(num1El.value) + Number(num2El.value);
  answerEl.value = answer;
}

function onSubtractBtnClick() {
  const answer = Number(num1El.value) - Number(num2El.value);
  answerEl.value = answer;
}

function onMultiplyBtnClick() {
  const answer = Number(num1El.value) * Number(num2El.value);
  answerEl.value = answer;
}

function onDivideBtnClick() {
  const answer = Number(num1El.value) / Number(num2El.value);
  answerEl.value = answer;
}
