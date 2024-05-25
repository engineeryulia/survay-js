const CURRENT_YEAR = 2023;
const CORRECT_ANSWER = 'Right answer'
const ERROR_ANSWER = 'Wrong answer'

const inputNode = document.querySelector('.js-input')
const buttonNode = document.querySelector('.js-button')
const outputNode = document.querySelector('.js-output')

buttonNode.addEventListener('click', function() {
    const answer = Number(inputNode.value);
    let output = CORRECT_ANSWER

    if(answer !== '2023'){
        output = ERROR_ANSWER
    }

    outputNode.innerHTML = output;
})