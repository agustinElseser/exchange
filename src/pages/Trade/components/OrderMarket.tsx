import { useEffect, useRef, useState } from "react";
import { BoxColumn, BoxRow } from "../../../components/styled/box.styled";
import { Button } from "../../../components/styled/button.styled";
import { InputMarket, InputWithIcon, InputWrapper, TextInput } from "../../../components/styled/input.styled";
import { Card } from "../../../components/styled/card.styled";

interface Props {
  type: "buy" | "sell";
  price: string;
}

interface ITrade {
  btc: string;
  price: string;
}

export default function OrderMarket({ type, price }: Props) {
  const initialState = {
    available: 934340,
  };

  const formRef = useRef<HTMLFormElement>(null);

  const [account, setAccount] = useState(initialState);
  const [tradeConfig, setTradeConfig] = useState<ITrade>({
    price: price ?? 0,
    btc: "",
  });

  const handleSubmit = (e) => {
    //En este punto los datos deben ser enviados al servidor.
    e.preventDefault();
    setTradeConfig({ price: price, btc: "" });
  };

  const handleInputs = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    //Reemplazo de "," por "." y bloquear NaN
    const numericValue = value.replace(/,/g, ".");
    const sanitized = numericValue.replace(/[^0-9.]/g, "");
    const finalValue = sanitized.replace(/(\.\d*\.)/g, ".");

    setTradeConfig((prevConfig) => ({
      ...prevConfig,
      [name]: finalValue,
    }));
  };

  useEffect(() => {
    setTradeConfig((prevConfig) => ({
      ...prevConfig,
      price: price,
    }));
  }, [price]);

  const fee: number | string =
    tradeConfig.btc !== ""
      ? Math.round(parseFloat(tradeConfig.price as string) * parseFloat(tradeConfig.btc as string) * 0.05 * 100) / 100
      : "";
  const total: number | string =
    tradeConfig.btc !== ""
      ? Math.round(
          ((parseFloat(tradeConfig.price as string) * parseFloat(tradeConfig.btc as string) + parseFloat(fee as string)) as number) * 100
        ) / 100
      : "";

  return (
    <form ref={formRef}>
      <BoxColumn align="start" p="0px 1rem" gap="6px">
        <Card bgcolor="var(--color-hover)">
          <BoxRow justify="end">
            <h2>Available:</h2>
            <h3>{account.available} USDT</h3>
          </BoxRow>
        </Card>
        <BoxRow>
          <h6>PRICE:</h6>
          <InputWrapper>
            <InputMarket value={tradeConfig.price} name="price" onChange={(e) => handleInputs(e)} />
            <TextInput>USDT</TextInput>
          </InputWrapper>
        </BoxRow>

        <BoxRow>
          <h6>AMOUNT:</h6>
          <InputWrapper>
            <InputMarket value={tradeConfig.btc} name="btc" onChange={(e) => handleInputs(e)} />
            <TextInput>BTC</TextInput>
          </InputWrapper>
        </BoxRow>

        <BoxRow justify="space-between">
          <h6>EST. FEE:</h6>
          <h2> {!isNaN(fee as number) ? fee : ""} USDT (0.05%)</h2>
        </BoxRow>
        <BoxRow justify="space-between">
          <h6>TOTAL:</h6>
          <h3>{!isNaN(total as number) ? total : ""} USDT</h3>
        </BoxRow>
        {tradeConfig.btc !== "" && parseFloat(tradeConfig.btc) >= 0 && (total as number) < 5 ? (
          <h5> * Minimum amount is 5 usdt.</h5>
        ) : (
          <div style={{ height: "20px", width: "100%" }}></div>
        )}
        <Button
          disabled={tradeConfig.btc === undefined || (parseFloat(tradeConfig.btc) >= 0 && (total as number) < 5)}
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
