export function createCheckboxElement() {
    const taskList = document.getElementById('task-list');
    
    // checkbox div
        // const checkboxDiv = document.createElement('div');
        // checkboxDiv.classList.add('checkboxDiv');
        // const someText = document.createTextNode('Test text...');
        // checkboxDiv.append(someText)
        // taskList.appendChild(checkboxDiv);

    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('checkboxDiv');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'newCheckbox'
    checkboxDiv.appendChild(checkbox);
    
    const label = document.createElement('label');
    label.htmlFor = 'newCheckbox';
    label.textContent = 'new checkbox';
    checkboxDiv.appendChild(label);

    taskList.appendChild(checkboxDiv);
    
};


