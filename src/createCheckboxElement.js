export function createCheckboxElement() {
    const taskList = document.getElementById('task-list');

    // creates checkbox input element
    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('checkboxDiv');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'newCheckbox'
    checkboxDiv.appendChild(checkbox);
    
    // creates label for checkbox element
    const label = document.createElement('label');
    label.htmlFor = 'newCheckbox';
    const newTaskName = prompt("Enter new task.")
    label.textContent = newTaskName;
    checkboxDiv.appendChild(label);

    taskList.appendChild(checkboxDiv);
};


