function isPalindrome(str) {
  let strFormat = str.toLowerCase();
  let arr = [];
  for (let i = 0; i < strFormat.length; i++) {
    if (strFormat[i] != " ") {
      arr.push(strFormat[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
function arrayMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}
