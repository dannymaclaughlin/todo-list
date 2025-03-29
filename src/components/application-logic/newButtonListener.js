import { renderTask } from "../dom-related/renderTask";
import { createTextInput } from "./createElement";
import { createForm } from "./createForm";

export function addNewButtonListener() {
    const newButton = document.getElementById('new-button');
    
    newButton.addEventListener("click", function () {
        // function to open form

        // renderTask();
        createForm();
    });
}