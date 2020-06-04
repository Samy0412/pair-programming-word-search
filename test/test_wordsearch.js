const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch(
      [
        ["A", "W", "K", "N", "A", "Y", "F", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["F", "F", "C", "F", "Q", "U", "A", "L"],
        ["I", "M", "J", "T", "E", "V", "R", "G"],
        ["A", "H", "C", "S", "Y", "E", "R", "L"],
        ["N", "F", "R", "E", "N", "E", "Y", "B"],
        ["K", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "U", "N", "F", "T", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["D", "L", "E", "F", "N", "I", "E", "S"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });
});
