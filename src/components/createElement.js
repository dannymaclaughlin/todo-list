// creates a div
export function createDiv(className, idName) {
    const newDiv = document.createElement('div');
    const divClass = className;
    const divId = idName;
    newDiv.classList.add(divClass);

    return newDiv;
};

// creates a checkbox (no label, just the checkbox itself)
export function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    checkbox.classList.add('checkbox');

    return checkbox;
}

export function createCheckboxLabel(labelFor) {
    const label = document.createElement('label');
    const checkboxLabel = labelFor;
    label.htmlFor = checkboxLabel;
    label.classList.add('checkboxLabel')

    return label;
}