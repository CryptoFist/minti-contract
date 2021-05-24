const hre = require("hardhat");
async function main() {
	const NFT = await hre.ethers.getContractFactory("SingleAsset");
	const URI = "ipfs://QmcpdCcAjmqNBrW62gX4gARjiSsQsCbH8SbFGdVsvyXQB3";
	const WALLET_ADDRESS = "0xbA842b7DA417Ba762D75e8F99e11c2980a8F8051";
	const CONTRACT_ADDRESS = "0x83f6A3231149b38C32ebb2993a2cC095cBb54B51";
	const contract = NFT.attach(CONTRACT_ADDRESS);
	await contract.mint(WALLET_ADDRESS, URI);
	console.log("NFT minted");
}
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
