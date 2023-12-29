import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const dataToEncode = "Codigo qr";

  return <QRCode value={dataToEncode} style={{ width: "150px", height: "150px" }} />;
}
