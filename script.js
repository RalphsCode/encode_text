console.log('JS is running');

// Get the input from the webpage
document.addEventListener('keydown', submitOnEnter);
const formInput = document.querySelector('input');

function submitOnEnter(e) {
    if (e.key === 'Enter') {
      if (formInput.value.length != 0){
      console.log("Original Text:", formInput.value);
      reverseString(formInput.value);}
      else {
        alert('Please enter some words to encrypt...');
      }
    }
  }

// Reverse a string
function reverseString(str){
    // Function to reverse the letters in words of a srting
    let reversedWord = [];  // used to collect individual words
    const reversedWords = [];  // used to collect all the reversed words

    // split the string into individual words
    const wordArray = str.toLowerCase().split(' ');
    reverseWord(wordArray);


function reverseWord(wordArray){
    // get the first word of the string and split out its letters
    const splitWord = wordArray[0].split('');
    // reverse the word and put it into reversedWord array
    for (let i=splitWord.length-1; i>=0; i--) {
        reversedWord.push(splitWord[i]); 
    }
    // put the reversed letters together
    let reversedWordStr = reversedWord.join('');
    reversedWord = [];
    // send the reversed word into the reversedWordStr Array
    populateFinalArr(reversedWordStr);
} // END reverseWord


function populateFinalArr(reversedWordStr){
    // put the reversed words into the final array
    reversedWords.push(reversedWordStr, ' ');
    // delete the word from the original string that was just processed
    wordArray.shift();
    // If there are remaining words in the original string, repeat the process
    if (wordArray.length !== 0){
        reverseWord(wordArray);
    }
    else {
        const decodedText = reversedWords.join('')
        // Log the results and show on webpage
        console.log('Reversed Letters:', decodedText);
        const resultText = document.querySelector('#decode');
        resultText.innerHTML += `<br> >>> ${decodedText}`;
        // Reset the form and put the cursor there
        formInput.value = '';
        formInput.focus();

    }

}  // END populateFinalArr() 
           
}  // END reverseString()


