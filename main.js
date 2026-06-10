//two sum
// var twoSum = function (nums:number[], target:number) {
//     let sum = 0;
//     let leng = nums.length - 1
//     for (let i in nums) {
//         for (let j = +i+1; j <= leng; j++) {
//             sum = nums[i] + nums[j]
//             if (sum === target) {
//                 return console.log([+i, j]);
//             }
//         }
//     }
// };
// twoSum([2,5,5,11], 10);
//counter
var createCounter = function (n) {
    var count = n;
    return function () {
        return count++;
    };
};
var counter = createCounter(10);
console.log(counter);
