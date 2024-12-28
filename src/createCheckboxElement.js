export function createTextElement() {
    const taskList = document.getElementById('task-list');
    
    // test to see if this function is working
    const textDiv = document.createElement('div');
    const someText = document.createTextNode('Test text...');
    textDiv.append(someText)
    taskList.appendChild(textDiv);
};


