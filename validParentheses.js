// var isValid = function(s) {
    
//     for(let i=0; i< s.length; i++) {
//         if(s[i] == '(' && s[i+1] !== ')') {
//             return false;
//         } else if(s[i] == '{' && s[i+1] !== '}') {
//             return false;
//         } else if(s[i] == '[' && s[i+1] !== ']') {
//             return false;
//         }
//     }

//     return true;
// };


/**
 * @param {string} 
 * @return {boolean}
 */

var isValid = function(s) {

    const pairs = {
        "[":"]",
        "{":"}",
        "(":")"
    }
    //first check the pairs
    //edge case is check the length of the string if even then need to move further
    //edge case is check first and last character is starting bracket and last is closing bracket

    //if in odd
    if(s.length % 2 === 1) return false;

    //if closing bracket in the start of the string then means no order of the bracket
    if(s[0] === '}' || s[0] === "]" || s[0] === ")") {
        return false;
    }

    //if ending value in the end of the string is starting then not pair of bracket
    if(s[s.length - 1] === '{' || s[s.length - 1] === "(" || s[s.length - 1] === "[") {
        return false;
    }

    let stack = [];

    for (let index = 0; index < s.length; index++) {
        if(s[index] === "(" || s[index] === "[" || s[index] === "{") {
            stack.push(s[index]);
        } else {
            if(pairs[stack.pop()] !== s[index]) return false;
        }
    }
    
    return stack.length === 0;
}


console.log(
    isValid("{[]}"));

console.log(
    isValid("{[]"));

