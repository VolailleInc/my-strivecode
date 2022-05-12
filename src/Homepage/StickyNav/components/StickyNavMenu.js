import { stickyMenuList } from "../../SharedRecources/utils/stickyMenuList.js";
import MenuList from "../../TopNav/components/MenuList.js";
import "../styles/navigation.css";

export default function StickyNavMenu() {
  const depthLevel = 0;

  return (
    <nav>
      <ul className="menus">
        {stickyMenuList.map((menu) => {
          return (
            <MenuList items={menu} key={menu.id} depthLevel={depthLevel} />
          );
        })}
      </ul>
    </nav>
  );
}
