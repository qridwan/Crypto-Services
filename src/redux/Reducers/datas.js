import trading from "../../img/trading.png";
import wallet from "../../img/security.png";
import like from "../../img/trade-mining.png";
import lightBulb from "../../img/intuitive.png";
import perpetual from "../../img/perpetual.png";
import futures from "../../img/futures.png";
import exchange from "../../img/exchange-quoted.png";

const initialState = {
  services: [
    {
      id: 1,
      title: "PERPETUAL",
      details: `Easy-to-trade, non-expiring crypto 
      derivatives contracts.`,
      img: perpetual,
    },
    {
      id: 2,
      title: "FUTURES",
      details: `Cash-settled derivatives contracts for 
      going long or short on future 
      crypto-currency prices.`,
      img: futures,
    },
    {
      id: 3,
      title: "EXCHANGE-QUOTED SPREADS",
      details: `Low-risk trading instruments to easily trade 
      the price difference of underlying futures 
      and perpetual contracts.`,
      img: exchange,
    },
  ],
  about: [
    {
      id: 1,
      title: "UNIQUE TRADING PRODUCTS",
      details: `First to launch Exchange Quoted Spreads which dramatically
        reduce execution risk in volatile markets.`,
      img: trading,
    },
    {
      id: 2,
      title: "TRADE MINING",
      details: `Earn rewards on the fees you pay as per trade volume.`,
      img: like,
    },
    {
      id: 3,
      title: "MAXIMUM SECURITY",
      details: `Funds stored in multi-signature deep cold storage. Insurance 
        Fund from Day 1.`,
      img: lightBulb,
    },
    {
      id: 4,
      title: "INTUITIVE INTERFACE",
      details: `Easy-to-use, highly customizable and trader-friendly 
        platform.`,
      img: wallet,
    },
  ],
};

export const DataReducers = (state = initialState) => {
  console.log("🚀 ~ file: datas.js ~ line 68 ~ DataReducers ~ state", state);
  return state;
};
