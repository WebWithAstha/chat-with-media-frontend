import React from "react";

const Header = ({user}) => (
  <div className="bg-zinc-800 text-white p-4 flex items-center gap-4">
    <div className="flex w-14 aspect-square rounded-full bg-zinc-500"></div>
    <div>
      <h2 className="text-lg font-bold leading-none">{user}</h2>
      <p>Typing..</p>
    </div>
  </div>
);

export default Header;
