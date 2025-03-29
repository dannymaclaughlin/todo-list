import { appendElement } from "../dom-related/appendElement";
import { createFormElement, createInputLabel, createTextInput, createSubmitButtonInput } from "./createElement";

const taskList = document.getElementById('task-list');

export function createForm() {
    // CREATES <FORM>
    const form = createFormElement();
    // CREATES TEXT INPUT FOR TASK NAME & TASK DESCRIPTION
    const taskNameLabel = createInputLabel('taskName', 'Task Name:');
    const taskNameInputElement = createTextInput('taskName');
    const taskDescriptionLabel = createInputLabel('taskDescription', 'Task Description:');
    const taskDescriptionInputElement = createTextInput('taskDescription');
    // CREATES SUBMIT BUTTON
    const submitButton = createSubmitButtonInput();

    appendElement(form, taskList)
    appendElement(taskNameLabel, form)
    appendElement(taskNameInputElement, form)
    appendElement(taskDescriptionLabel, form)
    appendElement(taskDescriptionInputElement, form)
    appendElement(submitButton, form)
}