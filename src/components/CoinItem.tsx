import { DataCoin, Variation } from "./styled/marketCoin.styled";
interface CoinItemProps {
  item: {
    last: string;
    open24h: string;
    instId: string;
  };
}

export default function CoinItem({ item }: CoinItemProps) {
  const { last, open24h, instId } = item;

  const a = parseFloat(last);
  const b = parseFloat(open24h);
  const variation24hs = (((a - b) / b) * 100).toFixed(2);

  return (
    <DataCoin>
      {instId} : {last}
      {open24h < last ? (
        <Variation color="var(--color-buy)">🠕</Variation>
      ) : open24h === last ? (
        <Variation color="var(--color-info)">⇄</Variation>
      ) : (
        <Variation color="var(--color-sell)">🠗</Variation>
      )}
      <p
        style={{
          color:
            parseFloat(variation24hs) > 0 ? "var(--color-buy)" : parseFloat(variation24hs) == 0 ? "var(--color-info)" : "var(--color-sell)",
        }}
      >
        ({variation24hs}%)
      </p>
    </DataCoin>
  );
}
