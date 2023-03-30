import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-5 py-4">
        <h1 className="text-3xl font-bold">HackerRank</h1>
        <img
          className="w-10 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="User profile"
        />
      </div>
      <hr />
    </>
  );
};

export default Header;
