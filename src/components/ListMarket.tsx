import { useEffect, useState } from "react";
import CoinItem from "./CoinItem";
import { MarketContainer } from "./styled/marketCoin.styled";

export default function ListMarket() {
  const [data, setData] = useState([]);

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
        <CoinItem item={item} />
      ))}
    </MarketContainer>
  );
}
