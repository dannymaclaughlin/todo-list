import { createDiv } from "./createElement";

export function appendElement() {
    const taskList = document.getElementById('task-list');

    const newDiv = createDiv();
    taskList.appendChild(newDiv);
}