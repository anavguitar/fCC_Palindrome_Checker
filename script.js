//intialized createElement const
const body = document.getElementById('body');
const newMain = document.createElement('main');
const newHeader = document.createElement('header');
const newSection = document.createElement('section');
const newH1 = document.createElement('h1');
const newH2 = document.createElement('h2');
const newPara = document.createElement('p');
const newImg = document.createElement('img');
const txtInput = document.createElement('input');
const btnInput = document.createElement('input');

//this function checks the string if its a palindrome
function palindromeChecker(str) {
    let word = str;
    let splitWord = word.split('');
    let reverseSplWrd = splitWord.reverse();
    let joinRPW = reverseSplWrd.join('');

    if (word === joinRPW) {
        console.log(`Yes! ${word} is a palindrome!`);
        newH2.innerText = `Yes! ${word} is a palindrome!`;
    }
    else {
        console.log(`Womp, wooomp! ${word} is not a palindrome!`);
        newH2.innerText = `Womp, wooomp! ${word} is not a palindrome!`
    }
}

function createHeader() {
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
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
let liveWrd = '';
function createForm() {
    body.appendChild(newMain);
    newMain.style.width = '55vw';
    newMain.style.height = '10vw';
    newMain.style.backgroundColor = '#5D3FD3';
    newMain.appendChild(txtInput);
    newMain.appendChild(btnInput);
    txtInput.type = 'text';
    btnInput.type = 'submit';
    btnInput.addEventListener('click', e => {
        liveWrd = txtInput.value;
        e.preventDefault();
        palindromeChecker(liveWrd);
        console.log(liveWrd);
    })
    newMain.appendChild(newH2);
    newH2.style.color = 'white';
    newH2.innerText = ''
}

createHeader();

createForm();