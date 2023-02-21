import DashboardIcon from "@mui/icons-material/Dashboard";
import PaidIcon from "@mui/icons-material/Paid";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import WalletIcon from "@mui/icons-material/Wallet";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CategoryIcon from "@mui/icons-material/Category";

export default {
  menuItem: [
    {
      path: "/",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      path: "/transactions",
      name: "Trasactions",
      icon: <PaidIcon />,
    },
    {
      path: "/accounts",
      name: "Accounts",
      icon: <AccountBalanceIcon />,
    },
    {
      path: "/budget",
      name: "Budget",
      icon: <WalletIcon />,
    },
    {
      path: "/categories",
      name: "Category Management",
      icon: <CategoryIcon />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <SettingsApplicationsIcon />,
    },
    {
      path: "/documentation",
      name: "Documentation",
      icon: <DocumentScannerIcon />,
    },
  ],
  navbarMenuItems: [
    { path: "/profile", name: "Profile", icon: <AccountCircleIcon /> },
    { path: "/auth/logout", name: "Logout", icon: <LoginIcon /> },
  ],
};
