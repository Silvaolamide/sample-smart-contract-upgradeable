require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");


ALCHEMY_API_KEY2='';
PRI_KEY2="";
ETHERSCAN_API_KEY='';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
      goerli: {
        //   url: 'https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}',
        //   url: 'https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY2}',
          url: 'https://goerli.infura.io/v3/${ALCHEMY_API_KEY2}',
          accounts: [PRI_KEY2],
      },
  },
  etherscan:{
      apiKey: ETHERSCAN_API_KEY,
  }
};
