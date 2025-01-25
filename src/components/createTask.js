import { createDiv } from "./createElement";
import { appendElement } from "./appendElement";
import { createCheckbox } from "./createElement";
import { createCheckboxLabel } from "./createElement";
import { getUserInput } from "./userInput";

// ASSIGNS THE 'task-list' HTML ELEMENT TO THE VARIABLE 'taskList'
const taskList = document.getElementById('task-list');

function createTaskStructure() {
    // CONTAINER DIV FOR TASKS
    const newTaskDiv = createDiv('taskContainer', 'taskContainer');
    
    // CONTAINER FOR CHECKBOX LABEL & DESCRIPTION
    const labelAndDescriptionContainer = createDiv('labelAndDescriptionContainer');

    // CHECKBOX + LABEL
    const newCheckbox = createCheckbox();
    const newCheckboxLabel = createCheckboxLabel('taskContainer');

    // DESCRIPTION CONTAINER
    const taskDescriptionDiv = createDiv('taskDescriptionContainer');

    return {newTaskDiv, labelAndDescriptionContainer, newCheckbox, newCheckboxLabel, taskDescriptionDiv};
};

// GET INPUT FROM USER
function getTaskData() {
    // gets user input for label
    const userInput = getUserInput();
    const userInputForDescription = getUserInput();

    return {userInput, userInputForDescription};
};

// ASSEMBLE/CREATE TASK
export function createTask() {
    const {newTaskDiv, labelAndDescriptionContainer, newCheckbox, newCheckboxLabel, taskDescriptionDiv} = createTaskStructure();
    const {userInput, userInputForDescription} = getTaskData();

    newCheckboxLabel.textContent = userInput;
    taskDescriptionDiv.textContent = userInputForDescription;

    appendElement(newTaskDiv, taskList);
    appendElement(newCheckbox, newTaskDiv);
    appendElement(labelAndDescriptionContainer, newTaskDiv);
    appendElement(newCheckboxLabel, labelAndDescriptionContainer);
    appendElement(taskDescriptionDiv, labelAndDescriptionContainer);
};