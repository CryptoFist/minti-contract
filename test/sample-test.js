const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("SingleAsset", function () {
	it("It should deploy the contract, mint a token, and resolve to the right URI", async function () {
		const NFT = await ethers.getContractFactory("SingleAsset");
		const nft = await NFT.deploy();
		const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
		await nft.mint("0xbA842b7DA417Ba762D75e8F99e11c2980a8F8051", URI);
		const uri = await nft.tokenURI(1);
		expect(uri).equal(URI);
	});
});

describe("MultiAsset", function () {
	it("It should deploy the contract, mint a token, and resolve to the right URI", async function () {
		const NFT = await ethers.getContractFactory("MultiAsset");
		const nft = await NFT.deploy();
		const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
		await nft.mint("0xbA842b7DA417Ba762D75e8F99e11c2980a8F8051", URI);
		expect(await nft.tokenURI(1)).equal(URI);
	});

	it("It should deploy the contract, mint batch tokens, and resolve to the right URI", async function () {
		const NFT = await ethers.getContractFactory("MultiAsset");
		const nft = await NFT.deploy();
		const URIs = new Array(5).fill("ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv");
		await nft.mintBatch("0xbA842b7DA417Ba762D75e8F99e11c2980a8F8051", URIs);
		expect(await nft.tokenURI(2)).equal(URIs[1]);
		expect(await nft.tokenURI(4)).equal(URIs[3]);
	});
});
