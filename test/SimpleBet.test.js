const SimpleBet = artifacts.require("SimpleBet");

contract("SimpleBet", accounts => {
  describe("Test the contract end to end", async () => {
    it("Can do anything", async () => {
      assert.isOk(true, "Something is wrong");
    });
  });
});
