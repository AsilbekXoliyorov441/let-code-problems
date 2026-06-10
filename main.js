var twoSum = function (nums, target) {
    var sum = 0;
    var leng = nums.length - 1;
    for (var i in nums) {
        for (var j = +i + 1; j <= leng; j++) {
            sum = nums[i] + nums[j];
            if (sum === target) {
                return console.log([+i, j]);
            }
        }
    }
};
twoSum([2, 5, 5, 11], 10);
