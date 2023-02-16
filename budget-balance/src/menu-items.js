import DashboardIcon from "@mui/icons-material/Dashboard";
import PaidIcon from "@mui/icons-material/Paid";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import WalletIcon from "@mui/icons-material/Wallet";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

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
      path: "/expenses",
      name: "Expenses",
      icon: <AutoGraphIcon />,
    },
    {
      path: "/budget",
      name: "Budget",
      icon: <WalletIcon />,
    },
    {
      path: "/auth/login",
      name: "Login",
      icon: <LoginIcon />,
    },
    {
      path: "/auth/signup",
      name: "SignUp",
      icon: <HowToRegIcon />,
    },
  ],
};
