function rotate(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
			// Transpose
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reverse
    matrix.forEach(arr => arr.reverse());
    return matrix;
};

console.log(rotate(
    [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
)

//00 01 02
//10 11 12
//20 22 22  


//https://leetcode.com/problems/rotate-image/description/
//https://leetcode.com/problems/rotate-image/solutions/2617602/easy-to-understand-typescript-solution-with-explanation/