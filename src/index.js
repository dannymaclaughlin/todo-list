import "./styles/styles.css";
// import { addNewButtonListener } from "./newButtonListener";
import { addNewButtonListener } from "./components/application_logic/newButtonListener";

document.addEventListener("DOMContentLoaded", function () {
    addNewButtonListener();
});