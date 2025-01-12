export function createDiv(className) {
    const newDiv = document.createElement('div');
    const divClass = className;
    newDiv.classList.add(divClass);

    return newDiv;
};

export function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = checkbox;
    checkbox.classList.add('checkbox');

    return checkbox;
}