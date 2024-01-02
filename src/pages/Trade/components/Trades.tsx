import { useEffect } from "react";
import { TableCell, TableChildren, TableHeader, TableRowTrades } from "../../../components/styled/tables.styled";
import { formatTimeHHMMSS } from "../../../utilities/format-date-time.utility";
import { BoxColumn, BoxRow, DividerH } from "../../../components/styled/box.styled";
import { Card } from "../../../components/styled/card.styled";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../components/Loader";

interface Trade {
  side: string;
  ts: string;
  sz: string;
  px: string;
}
export default function Trades() {
  const { fetch, data } = useFetch();

  useEffect(() => {
    const fetchdata = () => fetch("trades?instId=BTC-USDT&limit=8");
    const intervalId = setInterval(fetchdata, 3500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card>
      <h2>TRADES</h2>
      <DividerH />
      {data.length <= 0 && (
        <BoxRow style={{ height: "202px" }}>
          <Loader />
        </BoxRow>
      )}
      <TableChildren>
        {data.data && (
          <>
            <thead>
              <tr>
                <TableHeader>Price (USDT)</TableHeader>
                <TableHeader>Amount (BTC)</TableHeader>
                <TableHeader>Time</TableHeader>
              </tr>
            </thead>

            <tbody>
              {data?.data.map((trade: Trade, index) => (
                <TableRowTrades key={index}>
                  <TableCell color={trade.side === "buy" ? "var(--color-buy)" : "var(--color-sell)"}>{trade.px}</TableCell>
                  <TableCell>{trade.sz}</TableCell>
                  {/* @ts-ignore */}
                  <TableCell>{formatTimeHHMMSS(parseFloat(trade.ts))}</TableCell>
                </TableRowTrades>
              ))}
            </tbody>
          </>
        )}
      </TableChildren>
    </Card>
  );
}
