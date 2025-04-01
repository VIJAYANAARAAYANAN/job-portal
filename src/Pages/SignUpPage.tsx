import { Divider } from "@mantine/core";
import { IconAsset } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {
  const location = useLocation();

  return (
    <div className="min-h-[100vh]  bg-[#eaf1f5] font-[Poppins] overflow-hidden">
      <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-700 flex [&>*]:flex-shrink-0 ${location.pathname == '/signup'?'-translate-x-1/2':'translate-x-0' }`}>
        <Login />
        <div className={`w-1/2 h-full transition-all ease-in-out duration-700 ${location.pathname == "/signup"?"rounded-r-[200px]" : "rounded-l-[200px]"} bg-[#275DF5] flex items-center justify-center flex-col gap-5`}>
          <div className="flex gap-1 items-center">
            <IconAsset className="h-16 w-16" stroke={2} color="#FFFFFF" />
            <div className="text-6xl items-center font-semibold text-[#FFFFFF] font-['Poppins']">
              JobSeek
            </div>
          </div>

          <div className="text-2xl text-[#FFFFFF] font-semibold">
            Find the Job made for you
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};
export default SignUpPage;
