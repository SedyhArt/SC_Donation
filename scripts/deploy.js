/** @format */

const hre = require("hardhat");
require("dotenv").config();

async function main() {
    const Donation = await hre.ethers.getContractFactory("Donation");
    const donation = await Donation.deploy();

    await donation.deployed();

    console.log("Greeter deployed to:", donation.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
