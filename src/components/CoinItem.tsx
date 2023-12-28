import { BuyArrow } from "./svg/BuyArrow";
import { EqualsArrow } from "./svg/EqualsArrow";
import { SellArrow } from "./svg/SellArrow";
import { DataCoin } from "./styled/marketCoin.styled";

interface CoinItemProps {
  item: {
    last: number;
    open24h: number;
    instId: string;
  };
}

export default function CoinItem({ item }: CoinItemProps) {
  const { last, open24h, instId } = item;

  const variation24hs: number = (((last - open24h) / open24h) * 100).toFixed(2);

  return (
    <DataCoin>
      {instId} : {last}
      {open24h < last ? <BuyArrow /> : open24h === last ? <EqualsArrow /> : <SellArrow />}
      <p style={{ color: variation24hs > 0 ? "var(--color-buy)" : variation24hs == 0 ? "var(--color-info)" : "var(--color-sell)" }}>
        ({variation24hs}%)
      </p>
    </DataCoin>
  );
}
