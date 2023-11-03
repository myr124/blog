import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-3 border-b border-bodcol">
        <div className="flex flex-row justify-start">
          <div className="p-6">
            <a href="/blog/about">About</a>
          </div>
          <div className="p-6">
            <a href="/blog/posts">Posts</a>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="p-6 ">
            <a href="/blog">_DEV</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
