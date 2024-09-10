// console.log("Hello World")

/* Document Object Modle */
const term = document.querySelector('.term');
const definitionButton = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const hideButton = document.querySelector('.hide');
const nextButton = document.querySelector('.next');

/* data = {key: value} */

words = {
    Hello: "안녕하세요.",
    Goodbye: "안녕히 가세요.",
    "I drank water today.": "오늘 물을 마셨어요."
}

data = Object.entries(words)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random()* data.length)]
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definitionButton.innerHTML = `<h3>${randomTerm[1]}</h3>`
}

checkButton. addEventListener('click', function() {
    definitionButton.style.display = 'block';
});

hideButton. addEventListener('click', function() {
    definitionButton.style.display = 'none';
});

nextButton. addEventListener('click', function() {
    getRandomWord();
});