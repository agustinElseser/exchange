import { BoxColumn } from "./styled/box.styled";
import { LoaderRectangle, Rectangle } from "./styled/loader.styled";

export default function Loader() {
  return (
    <BoxColumn align="center" justify="center" style={{ height: "100%" }}>
      <LoaderRectangle>
        <Rectangle />
        <Rectangle />
        <Rectangle />
        <Rectangle />
        <Rectangle />
      </LoaderRectangle>
    </BoxColumn>
  );
}
