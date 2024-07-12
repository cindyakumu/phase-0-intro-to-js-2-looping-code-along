function countDown(start) {
    if (typeof start !== 'number' || start < 1) {
      console.error('Please enter a positive integer.');
      return;
    }
  
    let currentNumber = start; 
    while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
    }
  }
// index.js

function writeCards(names) {
    const messages = names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
    return messages;
  }
  
  // Example usage
  const names = ['Guadalupe', 'Ollie', 'Aki'];
  const thankYouMessages = writeCards(names);
  
  console.log(thankYouMessages);
  