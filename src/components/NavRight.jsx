import React from "react";

function NavRight({ children }) {
  return (
    <div className="flex flex-col items-center justify-center hover:scale-105 hover:bg-slate-200 px-2 py-1 rounded-xl hover:border-gray-300 border border-slate-50 transition-all 0.4s ">
      {children}
    </div>
  );
}

export default NavRight;
