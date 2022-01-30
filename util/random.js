
const keccak256  = require("keccak256")
const { MerkleTree } = require("merkletreejs")
const ethers = require("ethers")

function makeLeaf(address, amount, vesting, decimals) {
    const normalizedAddress = ethers.utils.getAddress(address)
    const value = ethers.utils.parseUnits(amount.toString(), decimals).toString()
    console.log("MAKING THE LEAF:", [normalizedAddress, value, vesting])
    const keccak = ethers.utils.solidityKeccak256(
        ["address", "uint256", "bool"], 
        [normalizedAddress, value, vesting]
    ).slice(2)
    const packed = ethers.utils.solidityPack(
        ["address", "uint256", "bool"], 
        [normalizedAddress, value, vesting]
    )
    console.log("PACKED PARAMS:", packed)
    const hash = keccak256(packed)
    console.log("MY HASH:", hash, Buffer.from(hash).toString("hex"))
    console.log("LEAF KECCAK:", hash, Buffer.from(hash, "hex").toString("hex"))
    return Buffer.from(hash, "hex")//Buffer.from(keccak, "hex")
}

function makeTree(whitelist) {
    const leaves =  whitelist.map(([address, amount, vesting]) => 
        makeLeaf(address, amount, vesting, 18))
    return new MerkleTree(
        leaves,
        keccak256,
        { sort: true }
    )
}

module.exports = {
    makeLeaf, 
    makeTree
}