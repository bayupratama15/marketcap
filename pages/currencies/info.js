import CMCpriceConverter from '../../components/priceConverter';

import Header from '../../components/header';
import solana from '../../assets/solana.png';
import Usd from '../../assets/svg/usd';
import { useEffect, useState } from 'react';
import Graph from '../../components/graph';
import Chat from '../../components/chat';

const styles = {
  activeTab: `p-1 px-2 mr-2 rounded-lg bg-[#171924]`,
  tabItem: `px-2`,
  tabContainer: `flex items-center w-full p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
  info: `min-h-screen`,
  main: `text-white mx-auto max-w-screen-2xl`,
  flexStart: `flex flex-col md:flex-row`,
  flexBetween: `flex justify-between`,
  flexBetweenCenter: `flex justify-between items-center`,
  tabContainerWrapper: `p-10 w-full`,
  flexCenter: `flex items-center`,
};

const Currencies = () => {
  const [coinName, setCoinName] = useState('');
  const [coinSymbol, setCoinSymbol] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    setCoinName(urlParams.get('coin'));
    setPrice(Number(urlParams.get('price')).toLocaleString());
    setCoinSymbol(urlParams.get('symbol'));
  };

  return (
    <div className={styles.info}>
      <Header />
      <main className={styles.main}>
        <div className={styles.flexStart}>
          <div className={styles.tabContainerWrapper}>
            <div className={styles.flexBetween}>
              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>Price</p>
                <p className={styles.tabItem}>Market Cap</p>
                <p className={styles.tabItem}>Trading View</p>
                <p className={styles.tabItem}>History</p>
              </div>
            </div>
            <br />
            <Graph />
            <br />
            <br />
            <CMCpriceConverter
              from={coinName}
              fromSymbol={coinSymbol}
              fromLogo={solana}
              toLogo={<Usd />}
              price={price}
              to='United States Dollars'
              toSymbol='USD'
            />
          </div>

          <div className='pt-10 ml-5'>
            {/* PASSING COINNAME TO CHAT */}
            <Chat coinName={coinName} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Currencies;
