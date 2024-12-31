// import { init, getProvider as getOkxConnectProvider, SupportedNetworks } from "@okxconnect/connect-kit";
import {
  init,
  getProvider as getOkxConnectProvider,
  SupportedNetworks,
} from "sher-dapp-connect";
import { isMobile } from "../utils/platform";

let okxConnect = null;


export const setup = async () => {
    okxConnect = await init({
      useMini: !isMobile,
    });
    // okxConnect = await init({
    //     canInjectProxies: false,
    // });
};

export const getProvider = () => {
    return getOkxConnectProvider(SupportedNetworks.ETHEREUM);
};

// setup();

export default okxConnect;