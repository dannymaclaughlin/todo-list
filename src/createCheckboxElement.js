export function createCheckboxElement() {
    const taskList = document.getElementById('task-list');
    
    // test to see if this function is working
    const textDiv = document.createElement('div');
    textDiv.classList.add('textDiv');
    const someText = document.createTextNode('Test text...');
    textDiv.append(someText)
    taskList.appendChild(textDiv);
};


