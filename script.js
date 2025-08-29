
let counter = 0;
let subscribed = false;
/**
 * Function 1: toggleSubscribe()
 * Toggles between 'Subscribe' and 'Subscribed'
 */
function toggleSubscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    // conditional statement
    if (!subscribed) {
        buttonElement.innerText = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
        subscribed = true;
    } else {
        buttonElement.innerText = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
        subscribed = false;
    }
}

/**
 * Function 2: updateCounterDisplay()
 * Updates the counter display on the webpage
 */
function updateCounterDisplay() {
    const counterElement = document.querySelector('.js-counter-value');
    counterElement.innerText = counter;
}
const numbers = [1, 2, 3, 4, 5];
const listElement = document.querySelector('.js-list');

//for loop
for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement('li');
    li.innerText = `Number (for): ${numbers[i]}`;
    listElement.appendChild(li);
}

// for...of loop
for (const num of numbers) {
    const li = document.createElement('li');
    li.innerText = `Number (for...of): ${num}`;
    listElement.appendChild(li);
}

//DOM Interactions (at least 3)
//Subscribe button
document.querySelector('.js-subscribe-button')
    .addEventListener('click', toggleSubscribe);

// Increment button
document.querySelector('.js-increment-btn')
    .addEventListener('click', () => {
        counter++;
        updateCounterDisplay();
    });

// Reset button
document.querySelector('.js-reset-btn')
    .addEventListener('click', () => {
        counter = 0;
        updateCounterDisplay();
    });
