import { createCheckboxElement } from "./createCheckboxElement";
import { appendElement } from "./components/appendElement";

export function addNewButtonListener() {
    const newButton = document.getElementById('new-button');
    newButton.addEventListener("click", function () {
        // createCheckboxElement();
        appendElement();
    })
}