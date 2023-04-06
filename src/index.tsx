import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import * as Sentry from "@sentry/react";
import App from "./app";

import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";

import { NetworkContextName } from "./constants/index";
import getLibrary from "./utils/getLibrary";

import { ColorModeScript } from "@chakra-ui/react";

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

Sentry.init({
  dsn: "https://c1d15592daaa4290b633ca994cedd0cd@o4504962030108672.ingest.sentry.io/4504962371420160",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


//const container = document.getElementById(“app”);
//const root = createRoot(container);

if ("ethereum" in window) {
  (window as any).ethereum.autoRefreshOnNetworkChange = false;
}

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <App />
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
