/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  const arr = Array.from(n.toString()).map(Number);
  return arr.reduce((acc, digit) => {
    return acc += digit
  })
};


/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (start && end && step) {
    return Array.from({ length: ((end - start) / step) + 1 }, (v, i) => start + i * step)
  } else {
    return Array.from({ length: end - start + 1 }, (v, i) => i + start)
  }
};



/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  // if (users === undefined) throw new Error("users is required");
  // // if (date === undefined) throw new Error("date is required");
  let overs = users.map((user) => {
    var day = user.screenTime.filter((obj) => {
      return obj.date === date
    })
    if (day.length > 0) {
      var hours = Object.values(day[0].usage)
      var over = hours.reduce((acc, n) => {
        return acc + n
      })
      if (over > 100) {
        return user.username
      }
    }
  })
  return overs.filter(Boolean)
};
//  users.screenTime.usage - values
//  flter date value

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  var rgb = hexStr.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i).substring(1).match(/.{2}/g).map(n =>
    parseInt(n, 16))
  return "rgb(" + rgb + ")"
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  const arr = board.flat()
  var indicesOfX = []
  var cross = 'X'
  var index = arr.indexOf(cross);
  while (index != -1) {
    indicesOfX.push(index)
    index = arr.indexOf(cross, index + 1)
  }
  {
    var indicesOf0 = []
    var naught = '0'
    var indexNaught = arr.indexOf(naught);
    while (indexNaught != -1) {
      indicesOf0.push(indexNaught)
      indexNaught = arr.indexOf(naught, indexNaught + 1)
    }
  }
  const xWins = (indicesOfX.includes(0) && indicesOfX.includes(3) && indicesOfX.includes(6)) ||
    (indicesOfX.includes(0) && indicesOfX.includes(1) && indicesOfX.includes(2)) ||
    (indicesOfX.includes(3) && indicesOfX.includes(4) && indicesOfX.includes(5)) ||
    (indicesOfX.includes(6) && indicesOfX.includes(7) && indicesOfX.includes(8)) ||
    (indicesOfX.includes(1) && indicesOfX.includes(4) && indicesOfX.includes(7)) ||
    (indicesOfX.includes(2) && indicesOfX.includes(5) && indicesOfX.includes(8)) ||
    (indicesOfX.includes(0) && indicesOfX.includes(4) && indicesOfX.includes(8)) ||
    (indicesOfX.includes(6) && indicesOfX.includes(4) && indicesOfX.includes(2))

   const oWins = (indicesOf0.includes(0) && indicesOf0.includes(3) && indicesOf0.includes(6)) ||
    (indicesOf0.includes(0) && indicesOf0.includes(1) && indicesOf0.includes(2)) ||
    (indicesOf0.includes(3) && indicesOf0.includes(4) && indicesOf0.includes(5)) ||
    (indicesOf0.includes(6) && indicesOf0.includes(7) && indicesOf0.includes(8)) ||
    (indicesOf0.includes(1) && indicesOf0.includes(4) && indicesOf0.includes(7)) ||
    (indicesOf0.includes(2) && indicesOf0.includes(5) && indicesOf0.includes(8)) ||
    (indicesOf0.includes(0) && indicesOf0.includes(4) && indicesOf0.includes(8)) ||
    (indicesOf0.includes(6) && indicesOf0.includes(4) && indicesOf0.includes(2))

  if (xWins) {
    return "X"
  } else if (oWins) {
    return "0"
  } else {
    return null
  }
  // winning conditions: (0 && 1 && 2) || (3 && 4 && 5) || (6 && 7 && 8) || (0 && 3 && 6) || (1 && 4 && 7) || (2 && 5 && 8) || (0 && 4 && 8) || (6 && 4 && 2)
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
