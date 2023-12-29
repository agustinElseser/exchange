import { DividerH } from "../../../components/styled/box.styled";
import { NavItems, NavTitle } from "../../../components/styled/navbar.styled";
import { SidebarContainer } from "../../../components/styled/sidebar.styled";
import { DashboardIcon } from "../../../components/svg/DashboardIcon";
import { HistoryIcon } from "../../../components/svg/HistoryIcon";
import { TradeIcon } from "../../../components/svg/TradeIcon";
import { WalletIcon } from "../../../components/svg/WalletIcon";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <NavTitle>Exchange</NavTitle>
      <NavItems to="/dashboard">
        <DashboardIcon />
        Dashboard
      </NavItems>
      <NavItems to="">
        <TradeIcon />
        Trade
      </NavItems>
      <NavItems to="">
        <WalletIcon />
        Wallet
      </NavItems>
      <NavItems to="">
        <HistoryIcon />
        Transaction History
      </NavItems>
      <DividerH />
      ICO
    </SidebarContainer>
  );
}
