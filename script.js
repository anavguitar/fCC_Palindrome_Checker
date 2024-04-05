const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');


function cleanInputString(str) {
    const regex = /[^a-z^A-Z^0-9]+/g;//added^0-9
    return str.replace(regex, '');
  }

//this function checks the string if its a palindrome
function palindromeChecker(str) {
    let word = str;//this is the original string
    let cleanWord = cleanInputString(str);//this cleans out any non alphabetical chars
    let lowerCaseWord = cleanWord.toLowerCase();//this makes the phrase lowercase
    let splitWord = lowerCaseWord.split('');//this splits all the letters into an indexed array
    let reverseSplWrd = splitWord.reverse();//this reverses the array
    let joinRPW = reverseSplWrd.join('');//this joins the array into a string

    if(word.length > 0) {
        if (lowerCaseWord === joinRPW) {
            console.log(`${word} is a palindrome`);
            result.innerText = `${word} is a palindrome`;
        }
        else {
            console.log(`${word} is not a palindrome!`);
            result.innerText = `${word} is not a palindrome`
        }
    } else {
        console.log(`Please input a value`);
        result.innerText = `Please input a value`;
    }
}
// let liveWrd = '';
checkBtn.addEventListener('click', e => {
    liveWrd = textInput.value;
    e.preventDefault();
    palindromeChecker(liveWrd);
    console.log(liveWrd);
})
