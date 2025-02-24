import { createDiv } from "./createElement";
import { createCheckbox } from "./createElement";
import { createCheckboxLabel } from "./createElement";
import { getUserInput } from "./userInput";
import { createDateInput } from "./createElement";
import { renderTask } from "../dom-related/renderTask";

// ASSIGNS THE 'task-list' HTML ELEMENT TO THE VARIABLE 'taskList'
const taskList = document.getElementById('task-list');

export function createTaskStructure() {
    // CONTAINER DIV FOR TASKS
    const newTaskContainer = createDiv('taskContainer', 'taskContainer');

        // CONTAINER FOR CONTAINER DIVS
        const taskContentContainer = createDiv('taskContentContainer');

            // CONTAINER FOR CHECKBOX LABEL & DESCRIPTION
            const labelAndDescriptionContainer = createDiv('labelAndDescriptionContainer');

                // CHECKBOX + LABEL
                const newCheckbox = createCheckbox();
                const newCheckboxLabel = createCheckboxLabel('taskContainer');

                // DESCRIPTION CONTAINER
                const taskDescriptionContainer = createDiv('taskDescriptionContainer');

            // CONTAINER FOR DUE DATE & PRIORITY
            const dueDateAndPriorityContainer = createDiv('dueDateAndPriorityContainer');

                // DUE DATE
                const dueDateContainer = createDiv('dueDateContainer');

                // PRIORITY

    return {newTaskContainer, taskContentContainer, labelAndDescriptionContainer, newCheckbox, newCheckboxLabel, taskDescriptionContainer, dueDateAndPriorityContainer, dueDateContainer};
};

// GET INPUT FROM USER
export function getTaskData() {
    // gets user input for label
    const userInputForTaskName = getUserInput("Enter task.");
    // gets user input for description
    const userInputForDescription = getUserInput("Enter task description.");
    // gets user input for due date
    const userInputForDueDate = getUserInput("Enter task due date.");

    return {userInputForTaskName, userInputForDescription, userInputForDueDate};
};

// ASSEMBLE/CREATE TASK
export function createTask(newCheckboxLabel, taskDescriptionContainer, dueDateContainer) { // sets newCheckboxLabel, taskDescriptionContainer, and dueDateContainer as parameters for when it takes in those args from renderTask()
    const {userInputForTaskName, userInputForDescription, userInputForDueDate} = getTaskData();
        console.log(`userInputForTaskName entered: ${userInputForTaskName}, userInputForDescription entered: ${userInputForDescription}, userInputForDueDate entered: ${userInputForDueDate}`)

    newCheckboxLabel.textContent = userInputForTaskName;
        console.log(`newCheckboxLabel.textContent => ${newCheckboxLabel.textContent}`)
    taskDescriptionContainer.textContent = userInputForDescription;
        console.log(`taskDescriptionContainer.textContent => ${taskDescriptionContainer.textContent}`)

    dueDateContainer.textContent = userInputForDueDate;
};