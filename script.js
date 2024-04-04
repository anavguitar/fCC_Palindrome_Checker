let word = "";

let splitWord = word.split('');

let reverseSplWrd = splitWord.reverse();

let joinRPW = reverseSplWrd.join('');

// console.log('this is the OG word: ' + word);
// console.log('this is the split word: ' + splitWord);
// console.log('this is the reversed split word: ' + reverseSplWrd);
// console.log('this is the joined word: ' + joinRPW);

function palindromeChecker(str) {
    word = str;

    let splitWord = word.split('');

    let reverseSplWrd = splitWord.reverse();

    let joinRPW = reverseSplWrd.join('');

    if(word === joinRPW) {
        console.log(`Yes! ${word} is a palindrome!`)
    }
    else {
        console.log(`Whoops! ${word} is not a palindrome!`)
    }

}