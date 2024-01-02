import { BoxColumn } from "../../../../components/styled/box.styled.ts";
import { Button } from "../../../../components/styled/button.styled.ts";
import { IconInput, Input, InputWithIcon, InputWrapper } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, LabelFormHelp } from "../../../../components/styled/Form.styled.ts";
import { useState } from "react";
import { EyeIcon } from "../../../../components/svg/EyeIcon.tsx";
import { EyeOffIcon } from "../../../../components/svg/EyeOffIcon.tsx";

const schema = yup.object().shape({
  old_pw: yup.string().required("*Required field"),
  fa: yup
    .string()
    .required("*Required field")
    .matches(/^\d{6}$/, "*Must be a 6-digit number"),
});

interface DefaultValues {
  email_code: string;
  old_pw: string;
  fa: string;
}
export default function DisableWhitedraw() {
  const [showActPassword, setShowActPassword] = useState(false);
  const defaultValues: DefaultValues = {
    email_code: "",
    old_pw: "",
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

  const onSubmit = (values: any) => {
    console.log(values);
    reset();
  };
  return (
    <>
      <h3>Cancel disabling process</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BoxColumn align="start" gap="0px">
          <label>Password</label>
          <Controller
            name="old_pw"
            control={control}
            render={({ field }) => {
              return (
                <InputWrapper>
                  <InputWithIcon {...field} error={Boolean(errors.old_pw)} type={showActPassword ? "text" : "password"} />
                  <IconInput onClick={() => setShowActPassword(!showActPassword)}>
                    {showActPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </IconInput>
                </InputWrapper>
              );
            }}
          />

          {errors.old_pw && <LabelFormHelp>{errors.old_pw.message}</LabelFormHelp>}
        </BoxColumn>

        <BoxColumn gap="0px" align="start">
          <label>Google 2-FA Verification code</label>
          <Controller name="fa" control={control} render={({ field }) => <Input {...field} error={Boolean(errors.fa)} />} />
          {errors.fa && <LabelFormHelp>{errors.fa.message}</LabelFormHelp>}
        </BoxColumn>
        <ModalActions>
          <Button variant="outlined">Exit</Button>
          <Button variant="full" color="var(--color-sell)" type="submit">
            Cancel
          </Button>
        </ModalActions>
      </Form>
    </>
  );
}
