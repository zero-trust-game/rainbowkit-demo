import './App.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {  WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { config } from './wagmi';

// import okxconnect setup code
import { setup, getProvider } from './libs/okxConnect';
import { useEffect } from 'react';


const queryClient = new QueryClient();

function App() {

  useEffect(() => {
    window.addEventListener("eip6963:announceProvider", (event) => {
      console.log("EIP6963 support: ", event, event.detail);
    });
  
    const init = async () => {
      await setup();
      console.log("okxConnect", getProvider());
    }
    init();
  }, []);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <ConnectButton />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App
