//intialized createElement const
const body = document.getElementById('body');
const newMain = document.createElement('main');
const newHeader = document.createElement('header');
const newSection = document.createElement('section');
const newH1 = document.createElement('h1');
const newH2 = document.createElement('h2');
const newPara = document.createElement('p');
const newImg = document.createElement('img');
const newInput = document.createElement('input');

//this function checks the string if its a palindrome
function palindromeChecker(str) {
    let word = str;
    let splitWord = word.split('');
    let reverseSplWrd = splitWord.reverse();
    let joinRPW = reverseSplWrd.join('');

    if (word === joinRPW) {
        console.log(`Yes! ${word} is a palindrome!`)
    }
    else {
        console.log(`Womp, wooomp! ${word} is not a palindrome!`)
    }
}

function createHeader() {
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.backgroundColor = '#6F8FAF'

    body.appendChild(newHeader);
    newHeader.style.backgroundColor = '#EEDC82';
    newHeader.style.width = '55vw';
    newHeader.style.height = '5vw';
    newHeader.style.display = 'flex';
    newHeader.style.justifyContent = 'center';
    newHeader.style.alignItems = 'center';
   
    newHeader.appendChild(newH1);
    newH1.innerText = 'fCC and anavguitar present...Palindrome Checker!';
    newH1.style.color = 'white';
    newH1.style.padding = '0';
}

createHeader();