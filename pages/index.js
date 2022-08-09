import CMCtable from '../components/cmc-table/cmcTable';
import Header from '../components/header';
import Trending from '../components/trending';
import SwapCryptoModal from '../components/swapCryptoModal';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        {/* <link rel='shortcut icon' href='/favicon.ico' /> */}
        <title>Brewhost MarketCap</title>
      </Head>
      <Header />
      <div className='container mx-auto px-4'>
        <SwapCryptoModal />
        <div className='mt-10' />
        <Trending />
        <div className='mt-20' />
        <CMCtable />
      </div>
    </div>
  );
}
