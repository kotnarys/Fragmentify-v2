import { Contract, InfuraProvider } from "ethers";

import contractAbi from "./abi/abi.json";

const defaultProvider = new InfuraProvider("goerli");

const contractAddress = "0x8F3A64D4cB8FEf31c57b27427F8FE922965F55A4";

const NFT2 = new Contract(contractAddress, contractAbi, defaultProvider);

export default NFT2;
