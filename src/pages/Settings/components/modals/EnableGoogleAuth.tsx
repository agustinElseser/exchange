import { BoxColumn } from "../../../../components/styled/box.styled.ts";
import { Button } from "../../../../components/styled/button.styled.ts";
import { Input } from "../../../../components/styled/input.styled.ts";
import { ModalActions } from "../../../../components/styled/modal.styled.ts";
import QRCodeGenerator from "../CodeQR.tsx";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, LabelFormHelp } from "../../../../components/styled/Form.styled.ts";
import { useContext } from "react";
import { DBContext } from "../../context/DBContext.tsx";

const schema = yup.object().shape({
  fa: yup
    .string()
    .required("*Required field")
    .matches(/^\d{6}$/, "*Must be a 6-digit number"),
});

export default function EnableGoogleAuth({ onClose }) {
  const { handleOptions } = useContext(DBContext);
  const defaultValues = {
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
    handleOptions("google_auth", true);
    reset();
    onClose("close");
  };

  return (
    <>
      <h3>Google Authentication</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <p>
          Please download Google Authentication on your mobile phone and scan the QR. Then provide code to enable authentication in your
          account.
        </p>
        <BoxColumn gap="0px" align="start">
          <label>QR</label>
          <QRCodeGenerator />
        </BoxColumn>
        <BoxColumn gap="0px" align="start">
          <label>Code</label>
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
