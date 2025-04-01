import {
  IconAsset,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { useLocation } from "react-router-dom";

const Footer = () => {

  const location = useLocation();
  return (
    location.pathname != '/signup' && location.pathname != '/login'?
    <div className="bg-[#1E1E1E] text-white font-[Poppins] py-10 mt-10">
      <div className="w-fill flex justify-between px-15">
        {/* Section 1 - JobHook Info */}
        <div>
          <div className="text-[#275DF5] text-2xl font-semibold flex items-center gap-2 ">
            <IconAsset className="h-7 w-7" stroke={2} color="#257DF5" />
            JobSeek
          </div>
          <p className="text-sm mt-3 text-gray-400 w-[60%]">
            Job portal with user profiles, skill updates, certifications, work
            experience, and admin job postings.
          </p>
          {/* Social Icons */}
          <div className="flex mt-5 gap-3">
            <div>
              <IconBrandFacebook className="text-white w-6 h-6 cursor-pointer" />
            </div>
            <div>
              <IconBrandInstagram className="text-white w-6 h-6 cursor-pointer" />
            </div>
            <div>
              <IconBrandX className="text-white w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Section 2 - Product */}
        <div>
          <h4 className="text-[#275DF5] text-lg font-semibold mb-4">Product</h4>
          <ul className="text-gray-400 space-y-2">
            <li className="cursor-pointer hover:text-white">Find Job</li>
            <li className="cursor-pointer hover:text-white">Find Company</li>
            <li className="cursor-pointer hover:text-white">Find Employee</li>
          </ul>
        </div>

        {/* Section 3 - Company */}
        <div>
          <h4 className="text-[#275DF5] text-lg font-semibold mb-4">Company</h4>
          <ul className="text-gray-400 space-y-2">
            <li className="cursor-pointer hover:text-white">About Us</li>
            <li className="cursor-pointer hover:text-white">Contact Us</li>
            <li className="cursor-pointer hover:text-white">Privacy Policy</li>
            <li className="cursor-pointer hover:text-white">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Section 4 - Support */}
        <div>
          <h4 className="text-[#275DF5] text-lg font-semibold mb-4">Support</h4>
          <ul className="text-gray-400 space-y-2">
            <li className="cursor-pointer hover:text-white">Help & Support</li>
            <li className="cursor-pointer hover:text-white">Feedback</li>
            <li className="cursor-pointer hover:text-white">FAQs</li>
          </ul>
        </div>
      </div>
    </div> : <></>
  );
};

export default Footer;
