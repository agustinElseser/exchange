import { useRef, useState } from "react";
import { Form } from "../../../../components/styled/Form.styled.ts";
import { BoxColumn, BoxRow } from "../../../../components/styled/box.styled";
import { Button, ButtonClose } from "../../../../components/styled/button.styled.ts";
import { InputSeparate } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";

export default function TwoFactorAuth({ onClose }) {
  const [inputValues, setInputValues] = useState(Array(6).fill(""));

  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleChange = (index, value) => {
    const sanitized = value.replace(/[^0-9]/g, "");
    const singleDigit = sanitized.slice(0, 1);

    const newInputValues = [...inputValues];
    newInputValues[index] = singleDigit;
    setInputValues(newInputValues);

    if (/^[0-9]*$/.test(singleDigit) && index < inputRefs.length - 1) {
      //@ts-ignore
      inputRefs[index + 1].current.focus();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValues.length === 6) {
      onClose("close");
    }
  };

  return (
    <>
      <h3>2-Factor authentication</h3>
      <ButtonClose onClick={() => onClose("close")}>✖</ButtonClose>
      <Form>
        <label>Please enter your 2-factor authentication code to proceed with your wanted changes.</label>
        <BoxColumn align="start" gap="0px">
          <label>2-Factor authentication</label>
          <BoxRow justify="space-between">
            {inputRefs.map((input, index) => (
              <InputSeparate
                key={index}
                ref={input}
                type="text"
                value={inputValues[index]}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
          </BoxRow>
        </BoxColumn>

        <ModalActions>
          <Button variant="outlined" onClick={() => onClose("close")}>
            Cancel
          </Button>
          <Button variant="full" onClick={(e) => onSubmit(e)}>
            Continue
          </Button>
        </ModalActions>
      </Form>
    </>
  );
}
