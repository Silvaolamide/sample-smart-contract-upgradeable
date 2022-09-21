require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");


ALCHEMY_API_KEY2='xBfUwfpTLZ2xejtB4mjrsjrk0X7-jSoj';
PRI_KEY2="71701ab2f5786ff1ad3b65ebea5d4f03d6e37d1409f77b9f99b3c32b30a530aa";
ETHERSCAN_API_KEY='HITMNXU8VJ495828DNIFZSQWWX3QMECQIS';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
      goerli: {
        //   url: 'https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}',
        //   url: 'https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY2}',
          url: 'https://goerli.infura.io/v3/57c00db1b90b40af9d0ba4bd9f0702d6',
          accounts: [PRI_KEY2],
      },
  },
  etherscan:{
      apiKey: ETHERSCAN_API_KEY,
  }
};
