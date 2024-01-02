import { BoxColumn, BoxRow } from "../../../../components/styled/box.styled";
import { Button } from "../../../../components/styled/button.styled.ts";
import { IconInput, Input, InputWithIcon, InputWrapper } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";
import { TextModal } from "../../../../components/styled/settings.styled.ts";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, LabelFormHelp } from "../../../../components/styled/Form.styled.ts";
import { useState } from "react";
import { EyeIcon } from "../../../../components/svg/EyeIcon.tsx";
import { EyeOffIcon } from "../../../../components/svg/EyeOffIcon.tsx";

const schema = yup.object().shape({
  email_code: yup.string().required("*Required field"),
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

const DisableAccount = () => {
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
      <h3>Disable my account</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BoxColumn gap="0px" align="start">
          <h6>WARNING</h6>
          <p>
            You can only disable account, for legalreasons we ca not delete your account. After you click disable button, you will receive
            email with next steps. You will be able to cancel during the process.
          </p>
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <BoxRow justify="space-between">
            <label>Email Verification code</label>
            <TextModal>Get code</TextModal>
          </BoxRow>
          <Controller name="email_code" control={control} render={({ field }) => <Input {...field} error={Boolean(errors.email_code)} />} />
          {errors.email_code && <LabelFormHelp>{errors.email_code.message}</LabelFormHelp>}
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <label>Insert old password</label>
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
          <Button variant="outlined">Cancel</Button>
          <Button variant="full" color="var(--color-sell)" type="submit">
            Disable
          </Button>
        </ModalActions>
      </Form>
    </>
  );
};
export default DisableAccount;
