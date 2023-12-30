import { useEffect, useState } from "react";
import CoinItem from "./CoinItem";
import { MarketContainer } from "./styled/marketCoin.styled";

export default function ListMarket() {
  const [data, setData] = useState<any>([]);

  const getData = async () => {
    await fetch("https://www.okx.com/api/v5/market/tickers?instType=SPOT")
      .then((resp) => resp.json())
      .then((resp) => setData(resp.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MarketContainer>
      {data?.map((item) => (
        <CoinItem key={item.instId} item={item} />
      ))}
    </MarketContainer>
  );
}
