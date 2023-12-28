import { useEffect, useState } from "react";
import { Table, TableCell, TableHeader, TableRow } from "../../../components/styled/tables.styled";
import { formatTimeHHMMSS } from "../../../utilities/format-date-time.utility";
import { DividerH } from "../../../components/styled/box.styled";
import { Card } from "../../../components/styled/card.styled";

export default function Trades() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await fetch("https://www.okx.com/api/v5/market/trades?instId=BTC-USDT&limit=8")
      .then((resp) => resp.json())
      .then((resp) => setData(resp.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card>
      <h2>TRADES</h2>
      <DividerH />
      <Table>
        <thead>
          <tr>
            <TableHeader>Price (USDT)</TableHeader>
            <TableHeader>Amount (BTC)</TableHeader>
            <TableHeader>Time</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data?.map((trade, index) => (
            <TableRow key={index}>
              <TableCell color={trade.side === "buy" ? "var(--color-buy)" : "var(--color-sell)"}>{trade.px}</TableCell>
              <TableCell>{trade.sz}</TableCell>
              <TableCell>{formatTimeHHMMSS(parseFloat(trade.ts))}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
