const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  for (let i = 0; i < nums.length; i++) {
    value = nums[i]
    if (value == n) {
      if (nums[i] == nums[nums.length - 1]) {
        return null
      }
      return nums[i + 1]
    }
  }
  return null
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  var sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return {
    '0': str.length - sum,
    '1': sum
  }
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  n = n + "";
  var str = n.split("").reverse().join("")
  return parseInt(str)
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  var combo = arrs.reduce((a, b) => a.concat(b))
  return combo.reduce((accumulated, amount) =>
    (accumulated += amount))
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr
  }
  var swap = arr[0]
  arr[0] = arr[arr.length - 1]
  arr[arr.length - 1] = swap
  return arr
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
 var arr = Object.values(haystack)
 var arr2 = arr.toString().toLowerCase()
return (arr2.includes(searchTerm.toLowerCase()))
}

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  var arr = str.toLowerCase().replace(/[.,\/!?]/g, "").split(' ')
  const newObj = {}
  arr.forEach(value => {
    if (value in newObj) {
      newObj[value]++
    } else {
      newObj[value] = 1
    }
  })
  return newObj
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
