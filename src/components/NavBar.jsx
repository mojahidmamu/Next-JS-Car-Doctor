import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const NavMenu = () => {
    return (
      <>
        <li> <Link href={'/'}> Home</Link> </li>
        <li> <Link href={'/about'}> About</Link> </li>
        <li> <Link href={'/services'}> Services</Link> </li>
        <li> <Link href={'/blogs'}> Blogs</Link> </li>
        <li> <Link href={'/contacts'}> Contacts </Link> </li> 
      </>
    );
  };

  return (
    <div>
      <div className="navbar bg-base-100 mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            > 
              {NavMenu()}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Image
              src={"/assets/logo.svg"}
              width={80}
              height={60}
              alt="Website Logo"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavMenu()}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href='/login'> <li className="btn m-3">Login</li></Link> 
          <Link href='/register'> <li className="btn m-3">Register</li></Link>
          <a className="btn btn-outline">Appointment</a>
        </div>
      </div>
    </div>
  );
}
