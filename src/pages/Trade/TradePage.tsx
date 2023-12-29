import OrderBook from "./components/OrderBook";
import Trades from "./components/Trades";
import { Grid1, Grid2, Grid3, Grid4, TradeContainer } from "../../components/styled/tradeConteiner.styled";
import OrderMarket from "./components/OrderMarket";
import { BoxRow } from "../../components/styled/box.styled";
import { useEffect, useState } from "react";

export default function TradePage() {
  const [data, setData] = useState([]);
  const getData = async () => {
    await fetch("https://www.okx.com/api/v5/market/index-tickers?instId=BTC-USDT")
      .then((resp) => resp.json())
      .then((resp) => setData(resp.data[0]));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TradeContainer>
        <Grid1>GRAFICO</Grid1>
        <Grid2>
          <OrderBook price={data?.idxPx} />
        </Grid2>
        <Grid3>
          <BoxRow align="start">
            <OrderMarket type="buy" price={data?.idxPx} />
            <OrderMarket type="sell" price={data?.idxPx} />
          </BoxRow>
        </Grid3>
        <Grid4>
          <Trades />
        </Grid4>
      </TradeContainer>
    </>
  );
}
