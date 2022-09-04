/**
 * https://www.lintcode.com/problem/891/
 * 双指针
 * learn:
 *  isPalindrome也可以封为一个中间函数，要DIY
 * error:
 * 1. isPalindrome 调用了自己
 * 2. 忘记toLowerCase
 */
function validPalindrome(s) {
  // Write your code here
  const [left, right] = this.isPalindromeHelper(s, 0, s.length - 1);
  if (left >= right) {
    return true;
  }
  return (
    this.isPalindrome(s, left + 1, right) ||
    this.isPalindrome(s, left, right - 1)
  );
}

function isPalindrome(s, left, right) {
  [left, right] = this.isPalindromeHelper(s, left, right);
  return left >= right;
}

function isPalindromeHelper(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return [left, right];
    }
    left++;
    right--;
  }
  return [left, right];
}
