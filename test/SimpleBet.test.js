const SimpleBet = artifacts.require("SimpleBet");
const TestToken = artifacts.require("TestToken");

contract("SimpleBet", accounts => {
  // accounts
  const owner = accounts[0];
  const user1 = accounts[1];

  // smart contracts
  let contract;
  let token;

  before(async () => {
    token = await TestToken.new();
    contract = await SimpleBet.new();
  });

  describe("Test the contract end to end", async () => {
    it("Anyone can see who is the contract owner", async () => {
      assert.equal(owner, await contract.owner.call({from: user1}), "The owner is wrong");
    });
    it("Anyone can generate hash to identify a match", async () => {
      const generateHash = async from => {
        assert.equal(
          '0x17921acf9a8e601d2c9e87e4166b32dbe09600281f8faab2053e7eb9d7807350',
          await contract.generateHash.call("BRA", "USA", "2021-01-30", token.address, {from}),
          "The hash is wrong"
        );
      };
      await generateHash(owner);
      await generateHash(user1);
    });
  });
});
