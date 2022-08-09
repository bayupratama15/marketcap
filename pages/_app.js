import '../styles/globals.css';
import { MoralisProvider } from 'react-moralis';
import { GunProvider } from '../context/gunContext';
import { CoinMarketProvider } from '../context/context';
import { Head } from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://leujgkn7cz3h.usemoralis.com:2053/server'
      appId='tKnAEwjIWdWqPIlHxBBMOdaCQTwwolQAxGcTvSar'
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  );
}

export default MyApp;
