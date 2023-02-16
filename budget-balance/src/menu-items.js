import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
} from "react-icons/fa";

export default {
  menuItem: [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/transactions",
      name: "Trasactions",
      icon: <FaUserAlt />,
    },
    {
      path: "/expenses",
      name: "Expenses",
      icon: <FaRegChartBar />,
    },
    {
      path: "/budget",
      name: "Budget",
      icon: <FaCommentAlt />,
    },
    {
      path: "/login",
      name: "Login",
      icon: <FaShoppingBag />,
    },
    {
      path: "/signup",
      name: "SignUp",
      icon: <FaShoppingBag />,
    },
  ],
};
