const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true; //As soon as it finds it
    }
  }
  let verticalJoin = transpose(letters);
  verticalJoin = verticalJoin.map((ls) => ls.join(""));
  //console.log(verticalJoin);
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true; //As soon as it finds it
    }
  }

  let backWardsJoin = letters.map((ls) => ls.reverse().join(""));
  //console.log(backWardsJoin);
  for (let l of backWardsJoin) {
    if (l.includes(word)) {
      return true; //As soon as it finds it
    }
  }
  return false; //AFTER it has checked vert and horiz and backwards
};

const transpose = function(matrix) {
  let vertArray = [];
  let newArrayCol = matrix[0].length;
  for (let i = 0; i < newArrayCol; i++) {
    vertArray.push([]);
  }

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      vertArray[c].push(matrix[r][c]);
    }
  }

  return vertArray;
};

// wordSearch(
//   [
//     ["A", "W", "C", "F", "Q", "U", "A", "L"],
//     ["S", "E", "I", "N", "F", "E", "L", "D"],
//     ["Y", "F", "C", "F", "Q", "U", "A", "L"],
//     ["H", "M", "J", "T", "E", "V", "R", "G"],
//     ["W", "K", "N", "A", "R", "F", "R", "L"],
//     ["B", "F", "R", "E", "N", "E", "Y", "B"],
//     ["U", "B", "T", "W", "A", "P", "A", "I"],
//     ["O", "D", "C", "A", "K", "U", "A", "S"],
//     ["E", "Z", "K", "F", "Q", "U", "A", "L"],
//   ],
//   "FRANK"
// );

module.exports = wordSearch;
