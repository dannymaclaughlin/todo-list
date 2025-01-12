export function createDiv(className) {
    const newDiv = document.createElement('div');
    const divClass = className;
    newDiv.classList.add(divClass);

    return newDiv;
};