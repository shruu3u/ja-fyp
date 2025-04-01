import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-52 bg-[#1D1F27] p-6 flex flex-col gap-6 text-lg font-medium">
      <h1 className="text-2xl font-bold text-[#D7BDAE] mb-8">JournAsleep.</h1>
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/journal" className="hover:underline">Journal</Link>
      <Link to="/tracker" className="hover:underline">Tracker</Link>
      <Link to="/unwind" className="hover:underline">Unwind Activities</Link>
      <Link to="/settings" className="hover:underline">Settings</Link>
    </div>
  );
}

export default NavBar;
