const newMain = document.createElement('main');
const newSection = document.createElement('section');
const newH1 = document.createElement('h1');
const newH2 = document.createElement('h2');
const newp = document.createElement('p');




function palindromeChecker(str) {
    let word = "";

    word = str;

    let splitWord = word.split('');

    let reverseSplWrd = splitWord.reverse();

    let joinRPW = reverseSplWrd.join('');

    if (word === joinRPW) {
        console.log(`Yes! ${word} is a palindrome!`)
    }
    else {
        console.log(`Whoops! ${word} is not a palindrome!`)
    }

}