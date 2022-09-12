const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((sentence) => {
    const wordsSplit = sentence.split(" ");
    const capitalWords = wordsSplit.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const returnedStatement = capitalWords.join(" ");
    return returnedStatement;
  });
};
  // 1. take a string, and capitalize the first letter
  // 1a. access the first letter
  // 1b. capitalize it

  // 2. Capitalize the first letter of every word in a string
  // 2a. Separate each word, separated by the space
  // push, pop, splice, slice


// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }