import "../styles/navigation.css";

import { useEffect, useRef, useState } from "react";

import DropMenu from "./DropMenu.js";

export default function MenuList({ items, depthLevel }) {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      // Cleanup the event Listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenus ? (
        <>
          <button
            type="button"
            aria-haspopup={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {depthLevel > 0 ? (
              <span
                style={{
                  color: "#858687",
                  fontWeight: "Bold",
                  marginLeft: "0.3rem",
                }}
              >
                &raquo;
              </span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <DropMenu
            depthLevel={depthLevel}
            submenus={items.submenus}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a href="/#">{items.title} </a>
      )}
    </li>
  );
}
