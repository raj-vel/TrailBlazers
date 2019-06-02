// https://www.educative.io/collection/page/5668639101419520/5671464854355968/5177043027230720
// k > 1 && arr.length > 1
const max_sub_array_of_size_k = function (k, arr) {
  let sum = 0;
  let start = 0;
  let end = 0;
  let max = 0;

  for (end = 0; end < arr.length; end++) {
    sum += arr[end];

    if (end >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[start];
      start++;
    }
  }
  return max;
};


console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`)
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`)