import { displayData } from "./display.js";

const billInputBox = document.querySelector(".js-bill-input");
const peopleInputBox = document.querySelector(".js-people-input");
const tipInput = document.querySelector(".js-tip-input");

export const inputValues = {
    tipPercentage: 0,
    billAmount: 0,
    people: 1,
};

//event Handler for Bill
billInputBox.addEventListener("input", () => {
    inputValues.billAmount = getTextInput(
        billInputBox,
        ".js-bill-input-error-message"
    );

    displayData(inputValues);
});

//eventHandler for people
peopleInputBox.addEventListener("input", () => {
    inputValues.people = getTextInput(
        peopleInputBox || 1,
        ".js-people-input-error-message"
    );

    displayData(inputValues);
});

//tip percentage input buttons
document.querySelectorAll(".js-tip-percentage").forEach((elem) => {
    elem.addEventListener("click", () => {
        inputValues.tipPercentage = Number(elem.dataset.percentage);
        inputBtnClassSwap();
        tipInput.value = "";
        elem.classList.add("percentage-active");
        displayData(inputValues);
    });
});

//tip percentage input textbox
tipInput.addEventListener("input", () => {
    let inputValue = Number(tipInput.value);

    if (!isNaN(inputValue)) {
        if (inputValue <= 0) {
            tipInput.classList.add("input-error-state");
        } else {
            inputValues.tipPercentage = inputValue;
            inputBtnClassSwap();
            displayData(inputValues);
        }
    } else {
        tipInput.classList.add("input-error-state");
    }
});

//Handles input errors and returns input value
function getTextInput(elem, erroMessageElem) {
    let inputValue = Number(elem.value);
    let errorElem = document.querySelector(erroMessageElem);

    if (!isNaN(inputValue)) {
        if (inputValue <= 0) {
            errorElem.innerHTML = "Should be more than zero";
            elem.classList.add("input-error-state");
        } else {
            errorElem.innerHTML = "";
            elem.classList.remove("input-error-state");
            return inputValue;
        }
    } else {
        errorElem.innerHTML = "Plese enter a valid amount";
        elem.classList.add("input-error-state");
    }
}

//Remove active states on all buttons
function inputBtnClassSwap() {
    document.querySelectorAll(".js-tip-percentage").forEach((elem) => {
        elem.classList.remove("percentage-active");
        tipInput.classList.remove("input-error-state");
    });
}

//Reset Values
export function resetInput() {
    inputValues.billAmount = 0;
    inputValues.people = 1;
    inputValues.percentage = 0;

    billInputBox.value = "";
    peopleInputBox.value = "";
    tipInput.value = "";
    inputBtnClassSwap();

    displayData(inputValues);
}
