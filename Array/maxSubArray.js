
// https://leetcode.com/problems/maximum-subarray/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length == 1)
        return nums[0];

    let sum = 0;
    let max = nums[0];

    for (let index = 0; index < nums.length; index++) {
        sum = sum + nums[index];
        max = Math.max(max, sum);

        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};

let input1 = [4, -3, -2, 2, 3, 1, -2 - 3, 4, 2, -6]
console.log(` Input : [${input1.join(',')}] Output : ${maxSubArray(input1)}`)

input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(` Input : [${input1.join(',')}] Output : ${maxSubArray(input1)}`)

input1 = [-1]
console.log(` Input : [${input1.join(',')}] Output : ${maxSubArray(input1)}`)

input1 = [-2, 1]
console.log(` Input : [${input1.join(',')}] Output : ${maxSubArray(input1)}`)