/**
 * https://www.lintcode.com/problem/415/
 * 双指针
 * learn:
 *  正则很好用
 * error:
 * 1. $写错为&
 * 2. 忘记toLowerCase
 */

function isLetterNum(s) {
  return /^[a-zA-Z0-9]$/.test(s);
}
function isPalindrome(s) {
  if (!s) {
    return true;
  }
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (!this.isLetterNum(s[left])) {
      left++;
      continue;
    }
    if (!this.isLetterNum(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
