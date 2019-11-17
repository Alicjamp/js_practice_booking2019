function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  const ingredients = sandwich.fillings
  return ingredients
}

// return sandwich.fillings

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return (person.city === "Manchester") 
}

// can use if statement, but returns boolean already

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required")
  const bus = 40
  var busToPpl = people / bus
  return Math.ceil(busToPpl)
}

// divide ppl by 40 and round up

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
    var noOfSheep = arr.filter(function(word){
      return (word === "sheep")
    })
   return noOfSheep.length
}
// Count length of ==== sheep

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  const firstLet = person.address.postCode.charAt(0)
  if (firstLet === "M" && person.address.city === "Manchester") {
    return true
  } else {
    return false
  }
}

// postCode at index[0] or charAt(0) if is M and person.city 
//does not equal (!==) "Manchester" then return false, else return true?
// object within object

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
