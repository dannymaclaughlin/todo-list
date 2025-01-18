import { createDiv } from "./createElement";
import { appendElement } from "./appendElement";
import { createCheckbox } from "./createElement";
import { createCheckboxLabel } from "./createElement";
import { getUserInput } from "./userInput";

// grabs the div in the html file with the class 'task-list'
// and assigns it to the variable 'taskList'
const taskList = document.getElementById('task-list');

// function to assemble/create a task
export function createTask() {
    // creates a new div,
    // that will act as the container for each task
    const newTaskDiv = createDiv('taskContainer', 'taskContainer');
    appendElement(newTaskDiv, taskList);

    // creates a checkbox (no label, just the checkbox itself)
    const newCheckbox = createCheckbox();
    appendElement(newCheckbox, newTaskDiv);

    // creates container div for checkbox label and description
    const labelAndDescriptionContainer = createDiv('labelAndDescriptionContainer');
    appendElement(labelAndDescriptionContainer, newTaskDiv)

    // creates a label for the checkbox
    const newCheckboxLabel = createCheckboxLabel('taskContainer');
    appendElement(newCheckboxLabel, labelAndDescriptionContainer);
    // gets user input for label
    const userInput = getUserInput();
    newCheckboxLabel.textContent = userInput;

    // creates div to house task description
    const taskDescriptionDiv = createDiv('taskDescriptionContainer')
    const userInputForDescription = getUserInput();
    taskDescriptionDiv.textContent = userInputForDescription;
    appendElement(taskDescriptionDiv, labelAndDescriptionContainer)

}