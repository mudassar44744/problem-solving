// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function(digits) {
//     if(digits.length === 1 && digits[0] !== 9) { 
//         digits = digits[0] + 1; 
//         return digits;
//         }

//           if(digits.length === 1 && digits[0] === 9) { 
//             digits[0] = 1; digits.push(0);
//         return digits;
//         }


//     digits[digits.length -1] = digits[digits.length - 1] + 1; 
//     return digits;
// };


var plusOne = function(digits) {
    // let sum = BigInt(digits.join('')) + 1n
    // return sum.toString().split('')


    let str = digits.join("");
    let num = BigInt(str)+ BigInt(1);
    // convert the num into array
    num = num.toString().split('').map((num) => parseInt(num));
    return num;
  }

  console.log(
    plusOne([1,2,3,4,5,6,7,8,9])
  )