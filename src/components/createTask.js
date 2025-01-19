import { createDiv } from "./createElement";
import { appendElement } from "./appendElement";
import { createCheckbox } from "./createElement";
import { createCheckboxLabel } from "./createElement";
import { getUserInput } from "./userInput";

// grabs the div in the html file with the class 'task-list'
// and assigns it to the variable 'taskList'
const taskList = document.getElementById('task-list');

function createTaskStructure() {
    // creates a new div,
    // that will act as the container for each task
    const newTaskDiv = createDiv('taskContainer', 'taskContainer');
    
    // creates container div for checkbox label and description
    const labelAndDescriptionContainer = createDiv('labelAndDescriptionContainer');

    // creates a checkbox (no label, just the checkbox itself)
    const newCheckbox = createCheckbox();
    // creates a label for the checkbox
    const newCheckboxLabel = createCheckboxLabel('taskContainer');

    // creates div to house task description
    const taskDescriptionDiv = createDiv('taskDescriptionContainer')

    return {newTaskDiv, labelAndDescriptionContainer, newCheckbox, newCheckboxLabel, taskDescriptionDiv};
}

function getTaskData() {
    // gets user input for label
    const userInput = getUserInput();
    newCheckboxLabel.textContent = userInput;

    const userInputForDescription = getUserInput();
    taskDescriptionDiv.textContent = userInputForDescription;
}

// function to assemble/create a task
export function createTask() {
    const {newTaskDiv, labelAndDescriptionContainer, newCheckbox, newCheckboxLabel, taskDescriptionDiv} = createTaskStructure();

    appendElement(newTaskDiv, taskList);
    appendElement(newCheckbox, newTaskDiv)
    appendElement(labelAndDescriptionContainer, newTaskDiv);
    appendElement(newCheckboxLabel, labelAndDescriptionContainer)
    appendElement(taskDescriptionDiv, labelAndDescriptionContainer)
}