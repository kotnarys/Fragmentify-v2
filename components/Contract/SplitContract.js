import { Contract, InfuraProvider } from "ethers";

import contractAbi from "./abi/splitabi.json";

const defaultProvider = new InfuraProvider("goerli");

const contractAddress = "0x2885CaDfAa67Bfa3A96961de436B1276A1d36701";

const split3 = new Contract(contractAddress, contractAbi, defaultProvider);

export default split3;
