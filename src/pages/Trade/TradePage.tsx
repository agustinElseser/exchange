import OrderBook from "./components/OrderBook";
import Trades from "./components/Trades";
import { Grid1, Grid2, Grid3, Grid4, TradeContainer } from "../../components/styled/tradeConteiner.styled";
import OrderMarket from "./components/OrderMarket";
import { BoxRow, DividerV } from "../../components/styled/box.styled";
import { useEffect, useMemo, useState } from "react";
import Chart from "./components/Chart";
import { TextModal } from "../../components/styled/settings.styled.ts";
import { useFetch } from "../../hooks/useFetch.tsx";
import Loader from "../../components/Loader.tsx";

export default function TradePage() {
  const { fetch, data } = useFetch();
  const { fetch: fetchRefresh, data: dataOrderBook } = useFetch();

  const [sellData, setSellData] = useState<string[]>([]);
  const [buyData, setBuyData] = useState<string[]>([]);

  useEffect(() => {
    fetch("index-tickers?instId=BTC-USDT");
  }, []);

  useEffect(() => {
    const fetchdata = () => fetchRefresh("books?instId=BTC-USDT&sz=8");
    const intervalId = setInterval(fetchdata, 3000);
    return () => clearInterval(intervalId);
  }, []);

  //@ts-ignore
  const calculateOrderBook = useMemo(() => {
    const cumulativeCalc = (items) => {
      let cumulativeSum = 0;

      const data: any = [];

      items?.forEach((item) => {
        cumulativeSum += parseFloat(item[1]);
        data.push([item[0], parseFloat(item[1]).toFixed(4), cumulativeSum.toFixed(4)]);
      });

      return data;
    };

    const sell = cumulativeCalc(dataOrderBook.data && dataOrderBook.data[0].asks);
    const buy = cumulativeCalc(dataOrderBook.data && dataOrderBook.data[0].bids);
    setSellData(sell.reverse());
    setBuyData(buy);
  }, [dataOrderBook.data && dataOrderBook.data[0]]);

  return (
    <>
      <TradeContainer>
        <BoxRow justify="space-between">
          <Grid1>
            {sellData.length <= 0 ? (
              <BoxRow justify="center">
                <Loader />
              </BoxRow>
            ) : (
              <>
                <h1>BTCS/USDT</h1>
                {data.data && (
                  <BoxRow justify="start">
                    <p>24hs Range:</p>
                    <TextModal color="var(--color-text-primary)">
                      {(((data.data[0].high24h - data.data[0].low24h) / data.data[0].low24h) * 100).toFixed(2)} %
                    </TextModal>
                    <DividerV height="20px" />
                    <p>Low:</p>
                    <TextModal color="var(--color-sell)">{data.data[0].low24h} USDT</TextModal> <DividerV height="20px" />
                    <p>High:</p>
                    <TextModal color="var(--color-buy)">{data.data[0].high24h} USDT</TextModal>
                    <DividerV height="20px" />
                    <p>24hs Volume:</p>
                    <TextModal color="var(--color-text-primary)">{data.data[0].high24h * 14230} USDT</TextModal>
                  </BoxRow>
                )}
                <Chart sellData={sellData} buyData={buyData} />
              </>
            )}
          </Grid1>
          <Grid2>
            <OrderBook sellData={sellData} buyData={buyData} />
          </Grid2>
        </BoxRow>
        <BoxRow justify="space-between">
          <Grid3>
            <BoxRow gap="2rem">
              <OrderMarket type="buy" price={data.data && data?.data[0].idxPx} />
              <OrderMarket type="sell" price={data.data && data?.data[0].idxPx} />
            </BoxRow>
          </Grid3>
          <Grid4>
            <Trades />
          </Grid4>
        </BoxRow>
      </TradeContainer>
    </>
  );
}
