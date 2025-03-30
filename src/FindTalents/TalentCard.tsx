import { IconBookmark,IconHeart } from "@tabler/icons-react";
import { Text, Divider, Avatar, Button } from "@mantine/core";
import { IconClockHour3 } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  return (
    <div className="bg-white p-4 w-80 font-[Poppins] flex flex-col gap-2 rounded-md">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-1 bg-[#eaf1f5] rounded-full">
            <Avatar 
              className="h-5 w-5"
              size="lg"
              src={`/${props.image}.png`}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-[#275DF5] font-semibold font-[Poppins]">
            {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="cursor-pointer" stroke={2} color="#275DF5" />
      </div>

      <div className="pt-3 flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-[#eaf1f5] [&>div]:rounded-lg [&>div]:text-xs [&>div]:text-nowrap font-[Poppins]  ">
       {
          props.topSkills?.map((skill:any,index:any) =>{
            return(
              <div key={index}>{skill}</div>
            )
          })
       }
      </div>

      <Text
        style={{ fontSize: 12, textAlign: "justify" }}
        className="text-xs text-justify "
        lineClamp={3}
      >
        {props.about}
      </Text>
      <Divider mr="xs" size="xs" color="#275DF5" />

      <div className="flex justify-between">
        <div className="text-md font-semibold ">&#8377;{props.expectedCtc}</div>
        <div className="flex items-center gap-1 text-xs">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          {props.location}
        </div>
      </div>
      <div className="flex [&>*]:w-1/2 [&>*]:p-1 ">
        <Link to="/talent-profile">
          <Button variant="outline" color="#275DF5" fullWidth>
            Profile
          </Button>
        </Link>
        <div>
          <Button variant="light" color="#275DF5" fullWidth>
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};
export default TalentCard;
