const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploying
  const ResourceGenerator = await ethers.getContractFactory("ResourceGenerator");
  const instance = await upgrades.deployProxy(ResourceGenerator, [42]);
  await instance.deployed();

  // Upgrading
  const ResourceGenerator_v2 = await ethers.getContractFactory("ResourceGenerator_v2");
  const upgraded = await upgrades.upgradeProxy(instance.address, ResourceGenerator_v2);
}

main();