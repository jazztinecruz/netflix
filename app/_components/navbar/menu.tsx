import { NAVMENUS } from "@/core/constants";

const NavMenu = () => {
  return (
    <ul className="flex items-center gap-4">
      {NAVMENUS.map((menu, index) => {
        const isBold = index === 0 ? "font-semibold" : "text-gray-300";
        return (
          <li key={menu} className={`text-sm ${isBold}`}>
            {menu}
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;
