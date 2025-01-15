var multipleOf3Regex = /^(0*(1(01*0)*1)*)*0*$/;

/*
* const {assert} = require("chai");

describe("Tests", () => {
  it("Example tests", () => {
    assert.notMatch(" 0", multipleOf3Regex);
    assert.notMatch("abc",multipleOf3Regex);
    assert.match("000", multipleOf3Regex);

    assert.match("110", multipleOf3Regex);
    assert.notMatch("111",multipleOf3Regex);
    assert.match((12345678).toString(2), multipleOf3Regex);
  });
});
* */
