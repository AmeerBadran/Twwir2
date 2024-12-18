import { FaFacebook } from 'react-icons/fa';
import { GrInstagram } from "react-icons/gr";
const SocialLinks = () => {
  return (
    <div className="flex gap-5 items-center border-t w-1/2 p-5">
      <a href="https://www.instagram.com/twwir_ps?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose-600 transition-all duration-500">
        <GrInstagram className="text-2xl" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100063984704032" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition-all duration-500">
        <FaFacebook className="text-2xl" />
      </a>
    </div>
  );
};

export default SocialLinks;