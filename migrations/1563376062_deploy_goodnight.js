const GoodnightContract = artifacts.require('Goodnight.sol');

module.exports = function(deployer) {
  deployer.deploy(GoodnightContract, 'Goodnight');
  // Use deployer to state migration tasks.
};
