

//this function checks the string if its a palindrome
function palindromeChecker(str) {
    let word = str;
    let splitWord = word.split('');
    let reverseSplWrd = splitWord.reverse();
    let joinRPW = reverseSplWrd.join('');

    if(word.length > 0) {
        if (word === joinRPW) {
            console.log(`${word} is a palindrome`);
            newH2.innerText = `${word} is a palindrome`;
        }
        else {
            console.log(`${word} is not a palindrome!`);
            newH2.innerText = `${word} is not a palindrome!`
        }
    } else {
        console.log(`Please input a value`);
        newH2.innerText = `Please input a value`;
    }

    
}

