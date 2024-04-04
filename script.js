const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');

//this function checks the string if its a palindrome
function palindromeChecker(str) {
    let word = str;
    let splitWord = word.split('');
    let reverseSplWrd = splitWord.reverse();
    let joinRPW = reverseSplWrd.join('');

    if(word.length > 0) {
        if (word === joinRPW) {
            console.log(`${word} is a palindrome`);
            result.innerText = `${word} is a palindrome`;
        }
        else {
            console.log(`${word} is not a palindrome!`);
            result.innerText = `${word} is not a palindrome!`
        }
    } else {
        console.log(`Please input a value`);
        result.innerText = `Please input a value`;
    }
}
let liveWrd = '';
checkBtn.addEventListener('click', e => {
    liveWrd = textInput.value;
    e.preventDefault();
    palindromeChecker(liveWrd);
    console.log(liveWrd);
})
