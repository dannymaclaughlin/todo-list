export function createCheckboxElement() {
    const taskList = document.getElementById('task-list');

    // creates a div element for the entire checkbox/task element
    const mainTaskDiv = document.createElement('div');
    mainTaskDiv.classList.add('mainTaskDiv');

    // creates checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'newCheckbox';
    checkbox.classList = 'checkbox';
    mainTaskDiv.appendChild(checkbox); 

    // creates div to house all elements excluding checkbox
    const taskElementsDiv = document.createElement('div');
    taskElementsDiv.classList.add('task-elements-div', 'strikethrough');
    mainTaskDiv.appendChild(taskElementsDiv);
    
    // creates label element for checkbox element
    const label = document.createElement('label');
    label.htmlFor = 'newCheckbox';

    // task title (creates title for label element)
    const newTaskName = prompt("Enter new task.")
    label.textContent = newTaskName;
    label.classList.add('label-title');
    taskElementsDiv.appendChild(label);

    // task description
    const taskDescriptionDiv = document.createElement('div')
    taskDescriptionDiv.classList.add('task-description-div')
    taskElementsDiv.appendChild(taskDescriptionDiv);
    const newTaskDescription = prompt("Enter task description or notes.")
    taskDescriptionDiv.textContent = newTaskDescription;
    

    taskList.appendChild(mainTaskDiv);
};
