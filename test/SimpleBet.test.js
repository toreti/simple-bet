const SimpleBet = artifacts.require("SimpleBet");

contract("SimpleBet", accounts => {
  // accounts
  const owner = accounts[0];
  const user1 = accounts[1];

  // smart contracts
  let contract;

  before(async () => {
    contract = await SimpleBet.new();
  });

  describe("Test the contract end to end", async () => {
    it("Anyone can see who is the contract owner", async () => {
      assert.equal(owner, await contract.owner.call({from: user1}), "The owner is wrong");
    });
  });
});
