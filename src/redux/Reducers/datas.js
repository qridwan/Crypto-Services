import trading from "../../img/trading.png";

const initialState = {
    services: [
        {id: 1, title: 'PERPETUAL', details: `First to launch Exchange Quoted Spreads which dramatically
        reduce execution risk in volatile markets.` , img: trading},
        {id: 2, title: 'PERPETUAL', details: `First to launch Exchange Quoted Spreads which dramatically
        reduce execution risk in volatile markets.` , img: trading},
        {id: 3, title: 'PERPETUAL', details: `First to launch Exchange Quoted Spreads which dramatically
        reduce execution risk in volatile markets.` , img: trading},
        {id: 4, title: 'PERPETUAL', details: `First to launch Exchange Quoted Spreads which dramatically
        reduce execution risk in volatile markets.` , img: trading},
    ],
    about: [
        {id: 1, title: 'PERPETUAL', details: `First to launch Exchange Quoted Spreads which dramatically
        reduce execution risk in volatile markets.` , img: trading},
        {id: 2, title: 'PERPETUAL', details: `First to launch Exchange Quoted Spreads which dramatically
        reduce execution risk in volatile markets.` , img: trading},
        {id: 3, title: 'PERPETUAL', details: `First to launch Exchange Quoted Spreads which dramatically
        reduce execution risk in volatile markets.` , img: trading},
        {id: 4, title: 'PERPETUAL', details: `First to launch Exchange Quoted Spreads which dramatically
        reduce execution risk in volatile markets.` , img: trading},
    ],
  };

  export const DataReducers = (state = initialState) => {
      return state
  }