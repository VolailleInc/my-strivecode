import "../styles/navigation.css";

import MenuList from "./MenuList";

export default function DropMenu({submenus, dropdown, depthLevel}) {
  depthLevel += 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((sub) => (
        <MenuList key={sub.id} items={sub} depthLevel={
      depthLevel} />
      ))}
    </ul>
  );
}
