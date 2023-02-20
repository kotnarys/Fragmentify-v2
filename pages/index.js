import "@rainbow-me/rainbowkit/styles.css";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, optimism, polygon } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import Pattern from "../components/Pattern.js";

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function Index() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Pattern />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
