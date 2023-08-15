const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
//   //   write your code here
 return key in sampleObject;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));


// function hasKey(key) {
//   return key in sampleObject;
// }

// // Global object definition
// let sampleObject = {
//   red: "#FF0000",
//   green: "#00FF00",
//   white: "#FFFFFF"
// };

// // Test the hasKey function
// console.log(hasKey("red"));    // Should return true
// console.log(hasKey("blue"));   // Should return false
// console.log(hasKey("green"));  // Should return true


