import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../App.css";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import VNavbar from "./VNavbar";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  let [showMenu, setShowMenu] = useState(false)
  let navigate = useNavigate();
  let [showBar, setShowBar] = useState(false)
  let [showBtn, setShowBtn] = useState(true)
  let [showBtn1, setShowBtn1] = useState(true)
  let [showCount, setShowCount] = useState(0)
  let handle_Logout = () => {
    localStorage.removeItem('token');
    navigate("/SignIn")
  }
  useEffect(() => {

    console.log("logout")

  }, [localStorage.getItem('token')])

  let openSearch = () => {

    if (showCount === 0) {
      console.log("c==1");
      setShowBar(true)
      setShowCount(2);
      setShowBtn(false)
    }
    if (showCount === 2) {
      console.log("c==2");
      setShowBar(false)
      setShowCount(0);
      setShowBtn(true)
    }


  }
  let openMenu = () => {

    if (showCount === 0) {
      console.log("c==1");
      setShowMenu(true)
      setShowCount(2);
      setShowBtn1(false)
    }
    if (showCount === 2) {
      console.log("c==2");
      setShowMenu(false)
      setShowCount(0);
      setShowBtn1(true)
    }


  }
  return (
    <>
      <nav className="navbar bg-purple-500 h-16 flex w-full ">
        <div className="nav-items flex p-8 items-center justify-between w-full overflow-hidden md:w-full sm:w-full sticky top-0">
          <div className="logo items-center mt-1 mr-auto ssm:-ml-3">
            <h1 className="text-white font-sans text-2xl ssm:text-lg ssm:relative ssm:-right-4 sssm:relative right-6">
              <strong className="text-4xl font-serif ssm:text-3xl ">N</strong>otia
            </h1>
          </div>

          <div className={`nav-items pr-8 flex items-center justify-center relative md:block lg:translate-x-0 md:translate-x-14 transition-all duration-700 ease-in-out md:bg-none sm:hidden ssm:hidden sssm:hidden`}>

            <ul className="flex gap-x-12 lg:gap-x-8 smd:gap-x-7 md:gap-x-5 sm:gap-x-4">

              <Link to={"/"}><li className=" text-white cursor-pointer text-[16px] lg:text-[16px] smd:text-[14px] md:text-[13px] md:text-white ">
                Home
              </li>
              </Link>
              <Link to={"/about"}>  <li className=" text-white cursor-pointer text-[16px] lg:text-[16px] smd:text-[14px] md:text-[13px] md:text-white ">
                About
              </li>
              </Link>
              <Link to={"/contact"}> <li className=" text-white cursor-pointer text-[16px] lg:text-[16px] smd:text-[14px] md:text-[13px] md:text-white ">
                Contacts
              </li>
              </Link>

              <Link to={"/AllNotes"}> <li className=" text-white cursor-pointer text-[16px] lg:text-[16px] smd:text-[14px] md:text-[13px] md:text-white ">
                Notes
              </li>
              </Link>
              <Link to={"/help"}>  <li className=" text-white cursor-pointer text-[16px] lg:text-[16px] smd:text-[14px] md:text-[13px] md:text-white ">
                Help
              </li>
              </Link>
              <Link to={"/links"}>  <li className=" text-white cursor-pointer text-[16px] lg:text-[16px] smd:text-[14px] md:text-[13px] md:text-white ">
                Links
              </li>
              </Link>
            </ul>
          </div>

          <form action="/" className="flex items-center ml-auto gap-x-2 ">

            <div className={`flex transition-all duration-500 ease-in-out gap-x-2 sssm:relative left-6 `}>
              {localStorage.getItem("token") ? <Link className=" ssm:text-[14px] p-2 cursor-pointer bg-purple-700 border-1 rounded-sm outline-none text-white border-none text-sm text-center shadow-sm sssm:text-[10px] " onClick={handle_Logout} to={"/SignIn"} role="button">Log Out</Link> : <Link className=" ssm:text-[14px] p-2 cursor-pointer bg-purple-700 border-1 rounded-sm outline-none text-white border-none text-sm text-center shadow-sm sssm:text-[10px] " to="/SignIn" role="button">Sign in</Link>}
              <Link className=" ssm:text-[14px] p-2 cursor-pointer bg-purple-700 border-1 rounded-sm outline-none text-white border-none text-sm text-center shadow-sm sssm:text-[10px] " to="/SignUp" role="button">Sign Up</Link>
              {/* <input
            type="text"
            placeholder="Type Some Text "
            className="p-1  bg-white border-1 rounded-sm outline-none placeholder:text-sm focus:outline:none text-purple-900 focus:border-none lg:w-[10rem] lg:h-9 smd:w-[8rem] smd:h-7 smd:placeholder:text-xs smd:text-sm md:w-[8rem] md:h-7 md:placeholder:text-xs md:text-sm sm:w-[8rem] sm:h-7 sm:placeholder:text-xs sm:text-sm ssm:w-[8rem] ssm:h-7 ssm:placeholder:text-xs ssm:text-sm"
          />
          <input
            type="button"
            value="Submit"
            className="p-1 cursor-pointer ml-1 bg-purple-600 text-white shadow-sm shadow-black lg:p-2 lg:h-9 smd:h-7 smd:text-xs md:h-7 md:text-xs sm:h-7 sm:text-xs ssm:h-7 ssm:text-xs"
          /> */}
            </div>
            <div className="flex gap-x-3 relative left-4 ssm:relative left-4">
              <FontAwesomeIcon icon={showBtn1 ? faBars : faXmark} className='text-white p-1 cursor-pointer text-lg hidden sm:block transition-all duration-700 ease-in-out md:hidden ssm:block sssm:block sssm:ml-2' onClick={openMenu} />
            </div>
          </form>
        </div>
      </nav>
      <VNavbar show={showMenu} />
    </>
  );
};

export default Navbar;
