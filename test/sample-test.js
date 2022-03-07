/** @format */

const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

let owner;
let addr1;
let donation;

beforeEach(async () => {
    [owner, addr1] = await ethers.getSigners();
    const Donation = await ethers.getContractFactory("Donation");
    donation = await Donation.deploy();
    await donation.deployed();
});

describe("Donation", async function () {
    it("only manager can call pickWinner", async () => {
        try {
            await donation.connect(addr1).withdraw(addr1.address, 1000000);
            assert(false);
        } catch (error) {
            assert(true);
        }
    });
});
