import { Contract, InfuraProvider } from "ethers";

import contractAbi from "./abi/nftabi.json";

const defaultProvider = new InfuraProvider("goerli");

const contractAddress = "0x89e20C16469B006Fa06eAFbfcF86B2b619283BE4";

const NFT4 = new Contract(contractAddress, contractAbi, defaultProvider);

export default NFT4;
