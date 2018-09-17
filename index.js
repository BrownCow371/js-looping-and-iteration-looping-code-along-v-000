// Code your solutions in this file
function printBadges(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    console.log(`Welcome ${myArray[i]}! You are employee #${i+1}.`);
  }
  return myArray;
}
