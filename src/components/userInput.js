export function getUserInput(message) {
    let promptMessage = message;
    const userInput = prompt(promptMessage)

    return userInput;
};