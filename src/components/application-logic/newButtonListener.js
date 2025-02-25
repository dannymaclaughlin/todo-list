import { renderTask } from "../dom-related/renderTask";

export function addNewButtonListener() {
    const newButton = document.getElementById('new-button');
    
    newButton.addEventListener("click", function () {
        renderTask();
    });
}