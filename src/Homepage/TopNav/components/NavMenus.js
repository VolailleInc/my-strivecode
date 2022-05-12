import "../styles/navigation.css";

import {menuList} from "../../SharedRecources/utils/menuList.js";

import MenuList from "./MenuList.js";

export default function NavMenus() {
  const depthLevel = 0;

  return (
    <nav>
      <ul className="menus">
        {menuList.map((menu) => {
          return (
            <MenuList items={menu} key={menu.id} depthLevel={
        depthLevel} />
          );
        })}
      </ul>
    </nav>
  );
}
