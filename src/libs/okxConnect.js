// import { init, getProvider as getOkxConnectProvider, SupportedNetworks } from "@okxconnect/connect-kit";
import {
  init,
  getProvider as getOkxConnectProvider,
  SupportedNetworks,
} from "sher-dapp-connect";

let okxConnect = null;

export const setup = async () => {
    okxConnect = await init();
    // okxConnect = await init({
    //     canInjectProxies: false,
    // });
};

export const getProvider = () => {
    return getOkxConnectProvider(SupportedNetworks.ETHEREUM);
};

// setup();

export default okxConnect;