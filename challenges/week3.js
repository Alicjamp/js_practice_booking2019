function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(function (n) {
    return n * n
  })
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const wordsCap = words.slice(1).map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  })
  return words[0] + wordsCap.join('')
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subs = 0
  for (let i = 0; i < people.length; i++) {
    subs += people[i].subjects.length
  }
  return subs
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    var ing = menu[i].ingredients.filter(function(n){
      return (n === ingredient)
    })
    if (ing.length >= 1) {
      return true
    }
  }
  return false
}

  function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");
    let newArr = arr1.filter(function(n){
      return arr2.includes(n);
  })
 let unique = newArr.filter(function(item, pos){
   return newArr.indexOf(item) == pos
 })
 return unique.sort()
  }

  module.exports = {
    getSquares,
    camelCaseWords,
    getTotalSubjects,
    checkIngredients,
    duplicateNumbers
  };
