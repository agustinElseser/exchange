import { TableCell, TableChildren, TableHeader, TableRowTrades } from "../../../components/styled/tables.styled";
import { Card } from "../../../components/styled/card.styled.ts";
import { BoxRow, DividerH } from "../../../components/styled/box.styled.ts";
import Loader from "../../../components/Loader.tsx";

interface IOrderBook {
  sellData: string[];
  buyData: string[];
}

export default function OrderBook({ sellData, buyData }: IOrderBook) {
  const getTotal = () => {
    if (sellData.length > 0) {
      const sell = parseFloat(sellData[7][0] as string);
      const buy = parseFloat(buyData[0][0] as string);
      const prom = ((sell + buy) / 2).toFixed(2);
      return prom;
    } else {
      return null;
    }
  };

  return (
    <Card>
      <h2>ORDER BOOK</h2>
      <DividerH />
      {sellData.length <= 0 && (
        <BoxRow style={{ height: "409px" }}>
          <Loader />
        </BoxRow>
      )}
      <TableChildren>
        {sellData.length > 0 && (
          <thead>
            <tr>
              <TableHeader>Price (USDT)</TableHeader>
              <TableHeader>Size (BTC)</TableHeader>
              <TableHeader>Sum (BTC)</TableHeader>
            </tr>
          </thead>
        )}
        <tbody>
          {sellData?.map((price, index) => (
            <TableRowTrades key={`${price}-${index}`}>
              <TableCell color={"var(--color-sell)"}>{price[0]}</TableCell>
              <TableCell>{price[1]}</TableCell>
              <TableCell>{price[2]}</TableCell>
            </TableRowTrades>
          ))}
        </tbody>
      </TableChildren>
      <h3>{getTotal()}</h3>
      <TableChildren>
        <tbody>
          {buyData?.map((price, index) => (
            <TableRowTrades key={`${price}-${index}`}>
              <TableCell color={"var(--color-buy)"}>{price[0]}</TableCell>
              <TableCell>{price[1]}</TableCell>
              <TableCell>{price[2]}</TableCell>
            </TableRowTrades>
          ))}
        </tbody>
      </TableChildren>
    </Card>
  );
}
