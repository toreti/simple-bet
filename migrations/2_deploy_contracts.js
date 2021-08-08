var SimpleBet = artifacts.require("SimpleBet");
var TestToken = artifacts.require("TestToken");

module.exports = function(deployer) {
  deployer.deploy(SimpleBet);
  deployer.deploy(TestToken);
};
