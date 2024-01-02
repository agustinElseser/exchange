import { BoxColumn } from "../../../../components/styled/box.styled";
import { Button } from "../../../../components/styled/button.styled.ts";
import { Input } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, LabelFormHelp } from "../../../../components/styled/Form.styled.ts";
import { useState } from "react";
import TwoFactorAuth from "./TwoFactorAuth.tsx";

const schema = yup.object().shape({
  old_email: yup.string().required("*Required field").email("*Invalid email"),
  new_email: yup
    .string()
    .required("*Required field")
    .email("*Invalid email")
    .notOneOf([yup.ref("old_email")], "*Emails cannot be the same"),
});

export default function ChangeEmail({ onClose }) {
  const [verifyCode, setVerifyCode] = useState(false);
  const defaultValues = {
    old_email: "",
    new_email: "",
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
    reset();
    onClose;
    handleDialog();
  };

  const handleDialog = () => {
    setVerifyCode(!verifyCode);
  };

  return (
    <>
      {!verifyCode ? (
        <>
          <h3>Change Email</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <BoxColumn align="start" gap="0px">
              <label>Old email</label>
              <Controller
                name="old_email"
                control={control}
                render={({ field }) => <Input {...field} error={Boolean(errors.old_email)} />}
              />
              {errors.old_email && <LabelFormHelp>{errors.old_email.message}</LabelFormHelp>}
            </BoxColumn>
            <BoxColumn align="start" gap="0px">
              <label>New email</label>
              <Controller
                name="new_email"
                control={control}
                render={({ field }) => <Input {...field} error={Boolean(errors.new_email)} />}
              />
              {errors.new_email && <LabelFormHelp>{errors.new_email.message}</LabelFormHelp>}
            </BoxColumn>
            <ModalActions>
              <Button variant="outlined" onClick={() => onClose("close")}>
                Cancel
              </Button>
              <Button variant="full" type="submit">
                Change email
              </Button>
            </ModalActions>
          </Form>
        </>
      ) : (
        <TwoFactorAuth onClose={onClose} />
      )}
    </>
  );
}
