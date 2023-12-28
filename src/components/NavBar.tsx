import { useLocation } from "react-router-dom";
import ListMarket from "../components/ListMarket";
import { MsgNotification, NavItems, Navbar, NavTitle, VerticalDivision } from "../components/styled/navbar.styled";
import { DashboardIcon } from "../components/svg/DashboardIcon";
import { DownArrow } from "../components/svg/DownArrow";
import { HelpIcon } from "../components/svg/HelpIcon";
import { Logo } from "../components/svg/Logo";
import { MessagesIcon } from "../components/svg/MessagesIcon";
import { UserIcon } from "../components/svg/UserIcon";
import { DividerV } from "./styled/box.styled";

export default function NavBar() {
  const location: string = useLocation().pathname;

  console.log("location", location);
  return (
    <>
      <Navbar>
        <NavTitle>
          <Logo />
          TX24
        </NavTitle>
        {location === "/dashboard" && (
          <>
            <NavItems to={""}>
              <DashboardIcon />
              Dashboard
            </NavItems>
            <DividerV height={"30px"} />
          </>
        )}

        <NavItems to={""}>
          <MessagesIcon />
          Messages
          <MsgNotification>5</MsgNotification>
        </NavItems>
        <NavItems to={""}>
          <HelpIcon />
          Help
        </NavItems>
        <DividerV height={"30px"} />
        <NavItems to={"/settings"}>
          <UserIcon />
          Agustin
          <DownArrow />
        </NavItems>
      </Navbar>
      <ListMarket />
    </>
  );
}
