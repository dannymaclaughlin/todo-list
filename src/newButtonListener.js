import { createDiv } from "./components/createElement";
import { appendElement } from "./components/appendElement";
const taskList = document.getElementById('task-list');

export function addNewButtonListener() {
    const newButton = document.getElementById('new-button');
    newButton.addEventListener("click", function () {
        const newDiv = createDiv();
        appendElement(taskList, newDiv);
    })
}