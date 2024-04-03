import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { IoSunny } from "react-icons/io5";
import { RiMoonClearFill } from "react-icons/ri";

export default function Navbar() {

  const [status, setStatus] = useState(false);
  const [isDark, setIsDark] = React.useState(false)

  // ** Dark Mode Handler
  function handleTheme() {
    setIsDark(!isDark)
    themeSwitch();
  }

  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;              // It matches the user's system theme

  // **Initial Theme Check
  useEffect(() => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
    }
  }, [userTheme, systemTheme]);

  // **Manual Theme Switcher
  const themeSwitch = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      return;
    }
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  return (
    <div>
      <div className="navbar max-w-6xl mx-auto">
        <div className="flex-1">
          <a className="text-xl">NOTES</a>
        </div>

        <div className="flex-none gap-5">
          <div className='flex items-center gap-5'>
            <div>
              <button className='p-2 hover:text-green-300' onClick={handleTheme}>{isDark ? <RiMoonClearFill size='1.5em' /> : <IoSunny size='1.5em' />}  </button>
            </div>
          </div>

          <ul className='flex gap-7 font-semibold uppercase text-sm'>
            <Link><li to={'/'} className='cursor-pointer hover:text-green-500'>Home</li></Link>
            <li className='cursor-pointer hover:text-green-500'>Service</li>
            <li className='cursor-pointer hover:text-green-500'>Featured</li>
          </ul>

          <div>
            {status ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="User" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <ul className="mt-3 z-[1] px-5 gap-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-52">
                  <li className='cursor-pointer hover:text-green-500'>Profile </li>
                  <li className='cursor-pointer hover:text-green-500'>Settings</li>
                  <Button className='cursor-pointer hover:text-green-500'>Logout</Button>
                </ul>
              </div>
            ) : (
              <div>
                <Link><Button>Signup</Button></Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
