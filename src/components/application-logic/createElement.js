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

// export function createDateInput() {
//     const input = document.createElement('input');
//     input.type = 'date';
//     input.id = 'dateInput';
//     input.classList.add('dateInput');
// }

// FORM

export function createFormElement() {
    const form = document.createElement('form');

    return form;
}
// INPUT LABEL AND TEXT INPUT

export function createInputLabel(labelFor, labelTextContent, className) {
    const label = document.createElement('label');
    const inputLabel = labelFor;
    label.htmlFor = inputLabel;
    label.classList.add(className);
    label.textContent = labelTextContent;

    return label;
}

export function createTextInput(idName, className) {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = idName;
    input.classList.add('className');

    return input;
}

export function createSubmitButtonInput(inputElement1, inputElement2, onSubmit) {
    const input = document.createElement('input')
    input.type = 'submit';

    input.addEventListener('click', (e) => {
        e.preventDefault();

        // if (typeof onSubmit === 'function') {
        //     onSubmit(inputElement.value)
        // }
        onSubmit(inputElement1.value, inputElement2.value);

        inputElement1.value = '';
        inputElement2.value = '';
    })

    return input;
}