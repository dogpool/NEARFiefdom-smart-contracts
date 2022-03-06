const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploying
  const NearFiefdomNFT = await ethers.getContractFactory("NearFiefdomNFT");
  const instance = await upgrades.deployProxy(NearFiefdomNFT, [42]);
  await instance.deployed();

  // Upgrading
  const NearFiefdomNFT_v2 = await ethers.getContractFactory("NearFiefdomNFT_v2");
  const upgraded = await upgrades.upgradeProxy(instance.address, NearFiefdomNFT_v2);
}

main();