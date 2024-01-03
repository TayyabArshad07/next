import Link from "next/link";
import React from "react";

const sidebar = () => {
  
  return (
    <aside className="sidebar">
      <Link href="/" className="sidebar-buttons">
        All
      </Link>
      <Link href="/" className="sidebar-buttons">
        Recommended
      </Link>
      <Link href="/" className="sidebar-buttons">
        Best-Selling
      </Link>
      <Link href="/" className="sidebar-buttons">
        Latest
      </Link>
      <Link href="/" className="sidebar-buttons">
        T-Shirts
      </Link>
      <Link href="/" className="sidebar-buttons">
        Hoodies
      </Link>
    </aside>
  );
};

export default sidebar;
