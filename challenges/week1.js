function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.slice(1)
}
//[0] for firtst letter then concatenate to the rest sliced from the 2nd letter (index 1)

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0] + "." + lastName[0]// Add your code here!
}
//[0] index of first letter

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let gross = originalPrice + originalPrice * ( vatRate / 100 ) 
  return parseFloat(gross.toFixed(2))
  }

  // divide by 100 to turn number into percentage

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let newprice = originalPrice - originalPrice * ( reduction / 100 )
  return parseFloat(newprice.toFixed(2))
}
// parseFloat changes string to number, to fixed to 2 decimal places

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let middle = str.length / 2 
  if (str.length % 2 == 0 ) {
    return str[middle-1] + str[middle]
  } else {
    return str[Math.floor(middle)]
  }
}
// math.floor rounds down as starts at index 0
  
function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let revword = ""
  for (var i = word.length - 1; i >= 0; i--) {
    revword += word[i]
  }
 return revword
}

function reverseAllWords(words) {

  return words.map(reverseWord)

  // alternative ways as learnt at codebar:
  // if (words === undefined) throw new Error("words is required");
  // var wordsRev = []
  // for (var i = 0; i < words.length; i++) {
  //   var word = words[i]
  //   var revWord = reverseWord(word)
  //   wordsRev.push(revWord)
  // }
  // return wordsRev
}

//alternative ways including imperative method:
// function isLinuxUser(user) {
//   return user.type === "Linux"
// }

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // const linuxUsers = users.filter(isLinuxUser)
  const linuxUsers = users.filter(function (user) {
    return user.type === "Linux"
  })
  return linuxUsers.length

  // let total = 0
  // for (var i = 0; i < users.length; i++) {
  //   let user = users[i]
  //   if (user.type === "Linux") {
  //     total++
  //   }   
  // }
  // return total 
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  var sum = scores.reduce(function(accumulated, amount){
    return accumulated += amount
  })

  let mean = sum / scores.length
  return parseFloat(mean.toFixed(2))
}

// reduce adds numbers through the array
// accumulates and adds final number of the array to formulate one number

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 15 === 0 ) {
    return "fizzbuzz"
  }
  if (n % 3 === 0) {
    return "fizz"
  }
  if (n % 5 === 0 ) {
    return "buzz"
  } else {
    return n
  }

  // 3 * 5 = 15, % is divisable by, 0 for no remainders

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
