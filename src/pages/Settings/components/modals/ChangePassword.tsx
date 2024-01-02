import { useState } from "react";
import { BoxColumn, BoxRow } from "../../../../components/styled/box.styled";
import { Button } from "../../../../components/styled/button.styled.ts";
import { IconInput, Input, InputWithIcon, InputWrapper } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";
import { useForm, Controller, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, LabelFormHelp } from "../../../../components/styled/Form.styled.ts";
import { EyeIcon } from "../../../../components/svg/EyeIcon.tsx";
import { EyeOffIcon } from "../../../../components/svg/EyeOffIcon.tsx";
import { Variation } from "../../../../components/styled/marketCoin.styled.ts";

const schema = yup.object().shape({
  new_pw: yup
    .string()
    .required("*Required field")
    .test("is-length-valid", "*Password must be at least 8 characters", (value) => (value ? value.length >= 8 : false))
    .test("has-number", "*Password must contain at least one number", (value) => (value ? /\d/.test(value) : false))
    .test("has-lowercase", "*Password must contain at least one lowercase letter", (value) => (value ? /[a-z]/.test(value) : false))
    .test("has-uppercase", "+Password must contain at least one uppercase letter", (value) => (value ? /[A-Z]/.test(value) : false)),
  old_pw: yup.string().required("*Required field"),
  repeat_pw: yup
    .string()
    .required("*Required field")
    .oneOf([yup.ref("new_pw")], "*Passwords do not match"),
  fa: yup
    .string()
    .required("*Required field")
    .matches(/^\d{6}$/, "*Must be a 6-digit number"),
});

interface DefaultValues {
  new_pw: string;
  old_pw: string;
  repeat_pw: string;
  fa: string;
}
export default function ChangePassword({ onClose }) {
  const [showPassword, setShowPassword] = useState({
    old_pw: false,
    new_pw: false,
    repeat_pw: false,
  });

  const defaultValues: DefaultValues = {
    old_pw: "",
    new_pw: "",
    repeat_pw: "",
    fa: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    onClose("close");
    reset();
  };

  const toggleShowPassword = (type) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };
  const new_pw = useWatch({ control, name: "new_pw" });

  const contain_uperCase = /[A-Z]/.test(new_pw);
  const contain_lowerCase = /[a-z]/.test(new_pw);
  const contain_number = /\d/.test(new_pw);
  const min_length = new_pw.length >= 8;

  return (
    <>
      <h3>Change sign-in password</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BoxColumn align="start" gap="0px">
          <label>Insert old password</label>
          <Controller
            name="old_pw"
            control={control}
            render={({ field }) => {
              return (
                <InputWrapper>
                  <InputWithIcon {...field} error={Boolean(errors.old_pw)} type={showPassword.old_pw ? "text" : "password"} />
                  <IconInput onClick={() => toggleShowPassword("old_pw")}>{showPassword.old_pw ? <EyeIcon /> : <EyeOffIcon />}</IconInput>
                </InputWrapper>
              );
            }}
          />

          {errors.old_pw && <LabelFormHelp>{errors.old_pw.message}</LabelFormHelp>}
        </BoxColumn>
        <BoxColumn align="start" gap="0px">
          <label>Insert new password</label>
          <Controller
            name="new_pw"
            control={control}
            render={({ field }) => {
              return (
                <InputWrapper>
                  <InputWithIcon {...field} error={Boolean(errors.new_pw)} type={showPassword.new_pw ? "text" : "password"} />
                  <IconInput onClick={() => toggleShowPassword("new_pw")}>{showPassword.new_pw ? <EyeIcon /> : <EyeOffIcon />}</IconInput>
                </InputWrapper>
              );
            }}
          />

          {/* {errors.new_pw && <LabelFormHelp>{errors.new_pw.message}</LabelFormHelp>} */}
        </BoxColumn>
        <BoxRow justify="start" align="start">
          <BoxColumn align="start" gap="0px">
            <BoxRow justify="start" gap="8px">
              {!min_length ? <Variation color="var(--color-sell)">✖</Variation> : <Variation color="var(--color-buy)">✔</Variation>}
              <p>+8 characters</p>
            </BoxRow>
            <BoxRow justify="start" gap="8px">
              {!contain_number ? <Variation color="var(--color-sell)">✖</Variation> : <Variation color="var(--color-buy)">✔</Variation>}
              <p>Number(s)</p>
            </BoxRow>
          </BoxColumn>
          <BoxColumn align="start" gap="0px">
            <BoxRow justify="start" gap="8px">
              {!contain_lowerCase ? <Variation color="var(--color-sell)">✖</Variation> : <Variation color="var(--color-buy)">✔</Variation>}
              <p>Lowercase letter(s)</p>
            </BoxRow>
            <BoxRow justify="start" gap="8px">
              {!contain_uperCase ? <Variation color="var(--color-sell)">✖</Variation> : <Variation color="var(--color-buy)">✔</Variation>}
              <p>Upercase letter(s)</p>
            </BoxRow>
          </BoxColumn>
        </BoxRow>
        <BoxColumn align="start" gap="0px">
          <label>Repeat new password</label>
          <Controller
            name="repeat_pw"
            control={control}
            render={({ field }) => {
              return (
                <InputWrapper>
                  <InputWithIcon {...field} error={Boolean(errors.repeat_pw)} type={showPassword.repeat_pw ? "text" : "password"} />
                  <IconInput onClick={() => toggleShowPassword("repeat_pw")}>
                    {showPassword.repeat_pw ? <EyeIcon /> : <EyeOffIcon />}
                  </IconInput>
                </InputWrapper>
              );
            }}
          />

          {errors.repeat_pw && <LabelFormHelp>{errors.repeat_pw.message}</LabelFormHelp>}
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <label>Google 2-FA Verification code</label>
          <Controller name="fa" control={control} render={({ field }) => <Input {...field} error={Boolean(errors.fa)} />} />
          {errors.fa && <LabelFormHelp>{errors.fa.message}</LabelFormHelp>}
        </BoxColumn>
        <ModalActions>
          <Button variant="outlined" onClick={() => onClose("close")}>
            Cancel
          </Button>
          <Button variant="full" type="submit">
            Submit
          </Button>
        </ModalActions>
      </Form>
    </>
  );
}
