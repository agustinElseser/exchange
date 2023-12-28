import OrderBook from "./components/OrderBook";
import Trades from "./components/Trades";
import { Grid1, Grid2, Grid3, Grid4, TradeContainer } from "../../components/styled/tradeConteiner.styled";

export default function TradePage() {
  return (
    <>
      <TradeContainer>
        <Grid1>GRAFICO</Grid1>
        <Grid2>
          <OrderBook />
        </Grid2>
        <Grid3>BUY/SELL</Grid3>
        <Grid4>
          <Trades />
        </Grid4>
      </TradeContainer>
    </>
  );
}
