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

        // CONTAINER FOR CONTAINER DIVS
        const taskContentContainer = createDiv('taskContentContainer');

            // CONTAINER FOR CHECKBOX LABEL & DESCRIPTION
            const labelAndDescriptionContainer = createDiv('labelAndDescriptionContainer');

                // CHECKBOX + LABEL
                const newCheckbox = createCheckbox();
                const newCheckboxLabel = createCheckboxLabel('taskContainer');

                // DESCRIPTION CONTAINER
                const taskDescriptionDiv = createDiv('taskDescriptionContainer');

            // CONTAINER FOR DUE DATE & PRIORITY
            const dueDateAndPriorityContainer = createDiv('dueDateAndPriorityContainer');

                // DUE DATE
                const dueDateContainer = createDiv('dueDateContainer');

                // PRIORITY

    return {newTaskDiv, taskContentContainer, labelAndDescriptionContainer, newCheckbox, newCheckboxLabel, taskDescriptionDiv, dueDateAndPriorityContainer, dueDateContainer};
};

// GET INPUT FROM USER
function getTaskData() {
    // gets user input for label
    const userInputForTaskName = getUserInput();
    // gets user input for description
    const userInputForDescription = getUserInput();
    // gets user input for due date
    const userInputForDueDate = getUserInput();

    return {userInputForTaskName, userInputForDescription, userInputForDueDate};
};

// ASSEMBLE/CREATE TASK
export function createTask() {
    const {newTaskDiv, taskContentContainer, labelAndDescriptionContainer, newCheckbox, newCheckboxLabel, taskDescriptionDiv, dueDateAndPriorityContainer, dueDateContainer} = createTaskStructure();
    const {userInputForTaskName, userInputForDescription, userInputForDueDate} = getTaskData();

    newCheckboxLabel.textContent = userInputForTaskName;
    taskDescriptionDiv.textContent = userInputForDescription;

    dueDateContainer.textContent = userInputForDueDate;

    appendElement(newTaskDiv, taskList);
    appendElement(newCheckbox, newTaskDiv);
    appendElement(taskContentContainer, newTaskDiv)
    appendElement(labelAndDescriptionContainer, taskContentContainer);
    appendElement(newCheckboxLabel, labelAndDescriptionContainer);
    appendElement(taskDescriptionDiv, labelAndDescriptionContainer);
    appendElement(dueDateAndPriorityContainer, taskContentContainer);
    appendElement(dueDateContainer, dueDateAndPriorityContainer);
};