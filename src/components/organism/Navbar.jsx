import mainLogo from "../../assets/images/twwir-icon.jpg";
import psflage from "../../assets/images/psflage.png";
import { IoMdClose } from "react-icons/io";
// import { IoLogIn } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import NavLinks from "../atoms/NavLink";
// import AuthButton from "../atoms/AuthBotton";
import { Link } from "react-router-dom";

function Navbar() {
  const [isHalfScreen, setIsHalfScreen] = useState(window.innerWidth > 950);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHalfScreen(window.innerWidth > 950);
      if (isHalfScreen !== window.innerWidth > 950) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isHalfScreen]);

  const handleNavButton = () => {
    setOpenNav(!openNav);
    console.log('sdg')
  };

  return (
    <div className="w-full absolute z-50 border-b shadow-xl bg-my-color">
      <header
        className={` max-w-[1400px] mx-auto flex items-center justify-between h-24 px-4 relative`}>
        <Link to="/" className="flex items-center gap-3">
          <img src={mainLogo} alt="Logo" className="h-16" />
          <p className="text-white font-bold text-2xl">طوّر</p>
        </Link>
        {isHalfScreen ? (
          <>
            <ul className="flex gap-6 slg:gap-8 xl:gap-14 justify-center items-center p-4 ">
              <NavLinks linksLayout={"fullPage"} bgColor={'dark'} />
            </ul>
            <div className="flex gap-1">
              {/*<AuthButton label="إنشاء حساب" icon={IoMdPersonAdd} roundedPosition="right" bgType="dark" to={'signUp'} />
                <AuthButton label="تسجيل الدخول" icon={IoLogIn} roundedPosition="left" bgType="dark" to={'logIn'} />*/}
                <img src={psflage} alt="" className="h-20"/>
            </div>
          </>
        ) : (
          <button type="button" onClick={handleNavButton} className="flex justify-center items-center w-10 h-10 min-w-10 rounded-md bg-white">
            {!openNav ? <FaBars className="text-my-color text-2xl" /> : <IoMdClose className="text-my-color text-3xl" />}
          </button>
        )}
        <div
          className={`absolute bg-white right-2 left-2 z-50 rounded-md p-5 transition-all duration-300 ${openNav && !isHalfScreen ? "top-24 opacity-100" : "-top-96 opacity-0"}`}>
          <div className="flex flex-col w-full justify-between">
            <ul className="flex flex-col flex-1 gap-4 justify-start items-start w-full">
              <NavLinks linksLayout={"halfPage"} bgColor={'light'} handleNavButton={handleNavButton} />
            </ul>
            <div className="flex gap-1 mt-5 flex-col max-w-44 border-t border-my-color pt-2">
              {/* <AuthButton label="إنشاء حساب" icon={IoMdPersonAdd} roundedPosition="full" bgType="light" to={'signUp'} />
                <AuthButton label="تسجيل الدخول" icon={IoLogIn} roundedPosition="full" bgType="light" to={'logIn'} /> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
