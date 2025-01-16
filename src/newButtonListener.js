import { createTask } from "./components/createTask";

export function addNewButtonListener() {
    const newButton = document.getElementById('new-button');
    newButton.addEventListener("click", function () {
        createTask();
    });
}