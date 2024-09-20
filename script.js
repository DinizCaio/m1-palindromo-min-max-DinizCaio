function isPalindrome(str) {
  let strFormat = str.toLowerCase();
  let arr = [];
  for (let i = 0; i < strFormat.length; i++) {
    if (strFormat[i] != " ") {
      arr.push(strFormat[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[arr.length - 1]) {
      return false;
    } else {
      return true;
    }
  }
}
function arrayMaxMin(arr) {}
