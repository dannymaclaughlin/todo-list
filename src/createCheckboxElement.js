export function createTextElement() {
    const taskList = document.getElementById('task-list');
    const someText = document.createTextNode('Test text...');
    taskList.appendChild(someText);    
};


