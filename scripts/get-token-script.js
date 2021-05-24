const hre = require("hardhat");
async function main() {
	const NFT = await hre.ethers.getContractFactory("SingleAsset");
	const CONTRACT_ADDRESS = "0x83f6A3231149b38C32ebb2993a2cC095cBb54B51";
	const contract = NFT.attach(CONTRACT_ADDRESS);
	const owner = await contract.ownerOf(1);
	console.log("Owner:", owner);
	const uri = await contract.tokenURI(1);
	console.log("URI: ", uri);
}
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
