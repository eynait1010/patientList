/**
 * https://www.lintcode.com/problem/56/
 * 双指针
 * learn:
 *  isPalindrome也可以封为一个中间函数，要DIY
 * error:
 * 1. isPalindrome 调用了自己
 * 2. 忘记toLowerCase
 */
function twoSum(numbers, target) {
  const map = {};
  let idx = 0;
  while (idx < numbers.length) {
    const anotherValue = target - numbers[idx];
    if (Number.isInteger(map[anotherValue])) {
      return [map[anotherValue], idx];
    }
    map[numbers[idx]] = idx;
    idx++;
  }
  return [-1, -1];
}
