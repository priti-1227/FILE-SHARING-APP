import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-white">LOGO</div>
      <div className="flex gap-3 m-3">
        <ui className="nav-links list-none flex gap-3 justify-evenly p-3 bg-white text-black rounded-lg">
          <li>Feature</li>
          <li>Pricing</li>
          <li>Use cases</li>
          <li>Resource</li>
        </ui>
        <div className="p-1 flex gap-3 bg-white rounded-lg">
          <button className="">Log in</button>
          <button className="bg-black rounded-lg px-2 text-white">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
