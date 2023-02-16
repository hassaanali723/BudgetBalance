import React from "react";
import Navigation from "../../menu-items";
import { NavLink, Outlet } from "react-router-dom";

const layout = () => {
  return (
    <div>
      <nav>
        {Navigation.menuItem.map((item, index) => {
          return (
            <NavLink to={item.path} key={index}>
              {item.name}
            </NavLink>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
};

export default layout;
