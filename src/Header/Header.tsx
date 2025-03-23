import { IconBellRinging } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import { Indicator, Avatar, NavLink } from '@mantine/core';
import { IconAsset } from "@tabler/icons-react";
import avatar from '../assets/avatar.png';
import NavLinks from "./NavLinks";
const Header = () => {
  return (
    <div className="w-full px-10 bg-white h-20 flex justify-between items-center">
      <div className="flex gap-1 items-center">
        <IconAsset className="h-7 w-7" stroke={2} color="#257DF5" />
        <div className="text-2xl items-center font-semibold text-[#275DF5] font-['Poppins']">
          JobSeek
        </div>
      </div>

      {NavLinks()}

      <div className="flex gap-3 items-center font-['Poppins']">
        <div className="flex items-center gap-1.5">
          <div>Vijay</div>

          <Avatar src={avatar} alt="it's me" />
        </div>
        <div className="bg-[#eaf1f5] p-1 rounded-full" >
        <IconSettings stroke={1.25} />
        </div>
        <div className= "bg-[#eaf1f5] p-1 rounded-full">
        <Indicator offset={2} color="blue-ribbon.7" size={12} withBorder processing>
        <IconBellRinging stroke={1.25}/>
        </Indicator>
        </div>
      </div>
    </div>
  );
};
export default Header;
