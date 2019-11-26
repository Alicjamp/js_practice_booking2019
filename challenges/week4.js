function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function (n) {
    return n < 1
  })
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(function (name) {
    return name.charAt(0) == char
  })
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(function (verb) {
    return verb.slice(0, 3).includes("to ")
  })
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function (n) {
    return (n % 1 === 0)
  })
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(function (user) {
    return user.data.city.displayName
  })
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(function (n) {
    return parseFloat(Math.sqrt(n).toFixed(2))
  })
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(function (sentence) {
    return sentence.toLowerCase().includes(str)
  })
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(function (value) {
    return (Math.max(...value))
  })
}
module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
