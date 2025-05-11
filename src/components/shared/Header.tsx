import React from "react";
import SwitchTheme from "../ui/Switch";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="text-lg font-bold">Mario Mamede</div>
      <nav className="space-x-4">
        <SwitchTheme />
      </nav>
    </header>
  );
};

export default Header;
