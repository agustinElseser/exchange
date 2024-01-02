import { BoxColumn, BoxRow } from "../../../../components/styled/box.styled";
import { Button } from "../../../../components/styled/button.styled.ts";
import { Input } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";
import { TextModal } from "../../../../components/styled/settings.styled.ts";
import { HelpIcon } from "../../../../components/svg/HelpIcon";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, LabelFormHelp } from "../../../../components/styled/Form.styled.ts";

const schema = yup.object().shape({
  phone: yup.string().required("*Required field").matches(/^\d+$/, "*Must be a numeric"),
  sms_code: yup
    .string()
    .required("*Required field")
    .matches(/[0-9a-zA-Z]{6}$/, "*Must be a 6-digit"),
  email_code: yup
    .string()
    .required("*Required field")
    .matches(/[0-9a-zA-Z]{6}$/, "*Must be a 6-digit"),
  fa: yup
    .string()
    .required("*Required field")
    .matches(/^\d{6}$/, "*Must be a 6-digit number"),
});

interface DefaultValues {
  phone: string;
  sms_code: string;
  email_code: string;
  fa: string;
}

export default function EnableSMSAuth() {
  const defaultValues: DefaultValues = {
    phone: "",
    sms_code: "",
    email_code: "",
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
      <h3>Enabled SMS Authenticador</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BoxColumn align="start" gap="0px">
          <label>Phone Number</label>
          <Controller name="phone" control={control} render={({ field }) => <Input {...field} error={Boolean(errors.phone)} />} />
          {errors.phone && <LabelFormHelp>{errors.phone.message}</LabelFormHelp>}
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <BoxRow justify="space-between">
            <label>SMS Verification code</label>
            <TextModal>Get code</TextModal>
          </BoxRow>
          <Controller name="sms_code" control={control} render={({ field }) => <Input {...field} error={Boolean(errors.sms_code)} />} />
          {errors.sms_code && <LabelFormHelp>{errors.sms_code.message}</LabelFormHelp>}
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <BoxRow justify="space-between">
            <label>Email Verification code</label>
            <TextModal>Get code</TextModal>
          </BoxRow>
          <Controller name="email_code" control={control} render={({ field }) => <Input {...field} error={Boolean(errors.email_code)} />} />
          {errors.email_code && <LabelFormHelp>{errors.email_code.message}</LabelFormHelp>}
          <BoxRow justify="start" gap="3px">
            <HelpIcon />
            <p>Enter the 6 digit code received by exam***@gmail.com</p>
          </BoxRow>
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <label>Google 2-FA Verification code</label>
          <Controller name="fa" control={control} render={({ field }) => <Input {...field} error={Boolean(errors.fa)} />} />
          {errors.fa && <LabelFormHelp>{errors.fa.message}</LabelFormHelp>}
        </BoxColumn>
        <ModalActions>
          <Button variant="outlined">Cancel</Button>
          <Button variant="full" type="submit">
            Submit
          </Button>
        </ModalActions>
      </Form>
    </>
  );
}
