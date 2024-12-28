import { createTextElement } from "./createCheckboxElement";

export function addNewButtonListener() {
    const newButton = document.getElementById('new-button');
    newButton.addEventListener("click", function () {
        createTextElement();
    })
}