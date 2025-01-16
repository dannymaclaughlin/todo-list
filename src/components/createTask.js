import { createDiv } from "./createElement";
import { appendElement } from "./appendElement";
import { createCheckbox } from "./createElement";
import { createCheckboxLabel } from "./createElement";

const taskList = document.getElementById('task-list');

export function createTask() {
    // creates a new div that will act as the container for each task
    const newTaskDiv = createDiv('taskContainer', 'taskContainer');
    appendElement(newTaskDiv, taskList);

    // creates a checkbox (no label, just the checkbox itself)
    const newCheckbox = createCheckbox();
    appendElement(newCheckbox, newTaskDiv);

    // creates a label for the checkbox
    const newCheckboxLabel = createCheckboxLabel('taskContainer');
    appendElement(newCheckboxLabel, newTaskDiv); 
}