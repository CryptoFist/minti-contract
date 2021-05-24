const { ethers } = require("hardhat");
const { expect } = require("chai");
describe("SingleAsset", function () {
	it("It should deploy the contract, mint a token, and resolve to the right URI", async function () {
		const NFT = await ethers.getContractFactory("SingleAsset");
		const nft = await NFT.deploy();
		const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
		await nft.deployed();
		await nft.mint("0xbA842b7DA417Ba762D75e8F99e11c2980a8F8051", URI);
		expect(await nft.tokenURI(1)).to.equal(URI);
	});
});
