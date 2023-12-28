import { useEffect, useMemo, useState } from "react";
import { Table, TableCell, TableHeader, TableRow } from "../../../components/styled/tables.styled";
import { Card } from "../../../components/styled/card.styled.ts";
import { DividerH } from "../../../components/styled/box.styled.ts";

export default function OrderBook() {
  const [data, setData] = useState([]);
  const [sellData, setSellData] = useState([]);
  const [buyData, setBuyData] = useState([]);

  const getData = async () => {
    await fetch("https://www.okx.com/api/v5/market/books?instId=BTC-USDT&sz=8")
      .then((resp) => resp.json())
      .then((resp) => setData(resp.data[0]));
  };

  useEffect(() => {
    getData();
  }, []);

  const calculateOrderBook = useMemo(() => {
    const cumulativeCalc = (items) => {
      let cumulativeSum = 0;
      let data = [];

      items?.forEach((item) => {
        cumulativeSum += parseFloat(item[1]);
        data.push([item[0], parseFloat(item[1]).toFixed(4), cumulativeSum.toFixed(4)]);
      });

      return data;
    };

    const sell = cumulativeCalc(data.asks);
    const buy = cumulativeCalc(data.bids);
    setSellData(sell.reverse());
    setBuyData(buy);
  }, [data]);

  return (
    <Card>
      <h2>ORDER BOOK</h2>
      <DividerH />
      <Table>
        <thead>
          <tr>
            <TableHeader>Price (USDT)</TableHeader>
            <TableHeader>Size (BTC)</TableHeader>
            <TableHeader>Sum (BTC)</TableHeader>
          </tr>
        </thead>
        <tbody>
          {sellData?.map((price, index) => (
            <TableRow key={`${price}-${index}`}>
              <TableCell color={"var(--color-sell)"}>{price[0]}</TableCell>
              <TableCell>{price[1]}</TableCell>
              <TableCell>{price[2]}</TableCell>
            </TableRow>
          ))}
          <div key={"pricebtc"}>
            <div>43000</div>
          </div>
          {buyData?.map((price, index) => (
            <TableRow key={`${price}-${index}`}>
              <TableCell color={"var(--color-buy)"}>{price[0]}</TableCell>
              <TableCell>{price[1]}</TableCell>
              <TableCell>{price[2]}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
