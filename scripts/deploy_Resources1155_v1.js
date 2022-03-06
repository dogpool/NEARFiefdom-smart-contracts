const { ethers, upgrades } = require("hardhat");

async function main() {
  // Deploying
  const ResourcesERC1155 = await ethers.getContractFactory("ResourcesERC1155");
  const instance = await upgrades.deployProxy(ResourcesERC1155, [42]);
  await instance.deployed();

  // Upgrading
  const ResourcesERC1155_v2 = await ethers.getContractFactory("ResourcesERC1155_v2");
  const upgraded = await upgrades.upgradeProxy(instance.address, ResourcesERC1155_v2);
}

main();