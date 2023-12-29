import { useEffect, useRef, useState } from "react";
import { BoxColumn, BoxRow } from "../../../components/styled/box.styled";
import { Button } from "../../../components/styled/button.styled";
import { Input } from "../../../components/styled/input.styled";
import { Card } from "../../../components/styled/card.styled";

interface Props {
  type: "buy" | "sell";
  price: string;
}

interface ITrade {
  btc: number | undefined;
  price: number;
}

export default function OrderMarket({ type, price }: Props) {
  const initialState = {
    available: 934340,
  };

  const formRef = useRef<HTMLFormElement>(null);

  const [account, setAccount] = useState(initialState);
  const [tradeConfig, setTradeConfig] = useState<ITrade>({
    price: parseFloat(price) ?? 0,
    btc: undefined,
  });

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleSubmit = (e) => {
    //At this point the data should be sent to the server
    e.preventDefault();
    handleReset();
  };

  const handleInputs = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    const numericValue = value === "" ? undefined : parseFloat(value);

    setTradeConfig((prevConfig) => ({
      ...prevConfig,
      [name]: numericValue,
    }));
  };

  useEffect(() => {
    setTradeConfig((prevConfig) => ({
      ...prevConfig,
      price: parseFloat(price),
    }));
  }, [price]);

  const fee: number | undefined =
    tradeConfig.btc !== undefined ? Math.round(tradeConfig.price * tradeConfig.btc * 0.05 * 100) / 100 : undefined;
  const total: number | undefined =
    tradeConfig.btc !== undefined ? Math.round((tradeConfig.price * tradeConfig.btc + fee!) * 100) / 100 : undefined;

  return (
    <form ref={formRef}>
      <BoxColumn align="start" p="0px 3rem">
        <Card bgcolor="var(--color-hover)">
          <BoxRow justify="end">
            <h2>Available:</h2>

            <h3>{account.available} USDT</h3>
          </BoxRow>
        </Card>
        <BoxRow>
          <h6>PRICE:</h6>
          <Input value={tradeConfig.price} name="price" type="number" onChange={(e) => handleInputs(e)} />
        </BoxRow>

        <BoxRow>
          <h6>AMOUNT:</h6>
          <Input value={tradeConfig.btc} name="btc" type="number" onChange={(e) => handleInputs(e)} />
        </BoxRow>

        <BoxRow justify="space-between">
          <h6>EST. FEE:</h6>
          <h2>{fee} USDT (0.05%)</h2>
        </BoxRow>
        <BoxRow justify="space-between">
          <h6>TOTAL:</h6>
          <h3>{total} USDT</h3>
        </BoxRow>
        {tradeConfig.btc! >= 0 && total! < 5 ? (
          <h5> * Minimum amount is 5 usdt.</h5>
        ) : (
          <div style={{ height: "20px", width: "100%" }}></div>
        )}
        <Button
          disabled={tradeConfig.btc === undefined || (tradeConfig.btc >= 0 && total! < 5)}
          width="100%"
          variant="full"
          color={`var(--color-${type})`}
          onClick={handleSubmit}
        >
          {type.toLocaleUpperCase()}
        </Button>
      </BoxColumn>
    </form>
  );
}
