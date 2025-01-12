import { createDiv } from "./components/createElement";
import { appendElement } from "./components/appendElement";
const taskList = document.getElementById('task-list');

export function addNewButtonListener() {
    const newButton = document.getElementById('new-button');
    newButton.addEventListener("click", function () {
        // creates a new div that will act as the container for each task
        const newTaskDiv = createDiv('taskContainer');
        appendElement(taskList, newTaskDiv);
    })
}