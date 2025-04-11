import { createTask } from "../application-logic/createTask";
import { appendElement } from "./appendElement";
import { createTaskStructure } from "../application-logic/createTask";

const taskList = document.getElementById('task-list');

export function renderTask() {
    // creates task structure(elements), assigns them to variables, and returns variables to make them available for use.
    // (will be used to target specific elements in the task structure & append it to the DOM)
    const {newTaskContainer, taskContentContainer, labelAndDescriptionContainer, newCheckbox, newCheckboxLabel, taskDescriptionContainer, dueDateAndPriorityContainer, dueDateContainer} = createTaskStructure();
    createTask(newCheckboxLabel, taskDescriptionContainer, dueDateContainer); // passes through the variables needed in createTask() as arguments

    appendElement(newTaskContainer, taskList);
    appendElement(newCheckbox, newTaskContainer);
    appendElement(taskContentContainer, newTaskContainer)
    appendElement(labelAndDescriptionContainer, taskContentContainer);
    appendElement(newCheckboxLabel, labelAndDescriptionContainer);
    appendElement(taskDescriptionContainer, labelAndDescriptionContainer);
    appendElement(dueDateAndPriorityContainer, taskContentContainer);
    appendElement(dueDateContainer, dueDateAndPriorityContainer);
}

