export function createCheckboxElement() {
    const taskList = document.getElementById('task-list');

    // creates checkbox input element
    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('checkboxDiv');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'newCheckbox';
    checkbox.classList = 'checkbox';
    checkboxDiv.appendChild(checkbox);
    
    // creates label for checkbox element
    const label = document.createElement('label');
    label.htmlFor = 'newCheckbox';
    const newTaskName = prompt("Enter new task.")
    label.textContent = newTaskName;
    label.classList = 'strikethrough'
    checkboxDiv.appendChild(label);

    taskList.appendChild(checkboxDiv);
};


