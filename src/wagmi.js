
import { getDefaultConfig, connectorsForWallets, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { injectedWallet, okxWallet, walletConnectWallet, metaMaskWallet, rainbowWallet, coinbaseWallet } from "@rainbow-me/rainbowkit/wallets";
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';
import { isMobile } from "./utils/platform";

const connectorGroups = [
  {
    groupName: "Others",
    wallets: [
      walletConnectWallet,
      metaMaskWallet,
      rainbowWallet,
      coinbaseWallet,
    ],
  },
];

if (isMobile) {
  // rainbowkit H5 does not support EIP-6963
  connectorGroups.unshift({
    groupName: "Recommended",
    wallets: [injectedWallet],
  });
}
const connectors = connectorsForWallets(connectorGroups, {
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
});

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, optimism, arbitrum, base],
  connectors,
  // wallets: [okxWallet, injectedWallet, ...defaultWallets],
});
