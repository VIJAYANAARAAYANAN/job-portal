import { IconBookmark } from "@tabler/icons-react";
import { Text, Divider } from "@mantine/core";
import { IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
const JobCard = (props:any) => {
  return (
    <Link to="/jobs" className="bg-white p-4 w-80 font-[Poppins] flex flex-col gap-2 rounded-md">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-1 bg-[#eaf1f5] rounded-md">
            <img className="h-7 w-7" src={ `/Icons/${props.company}.png`} alt="logo" />
          </div>

          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-[#275DF5] font-semibold font-[Poppins]">
              {props.company} &#x2022; {props.applicants} Applications
            </div>
          </div>
        </div>
        <IconBookmark className="cursor-pointer" stroke={2} color="#275DF5"/>
      </div>

      <div className="pt-3 flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-[#eaf1f5] [&>div]:rounded-lg [&>div]:text-xs font-[Poppins]">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>

      <Text  style={{ fontSize: 12, textAlign: 'justify' }}  className="text-xs text-justify " lineClamp={3}>
        {props.description}
      </Text>
      <Divider mr="xs" size="xs" color="#275DF5" />

      <div className="flex justify-between">
        <div className="text-md font-semibold ">&#8377; {props.package}</div>
        <div className="flex items-center gap-1 text-xs">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} /> {props.postedDaysAgo} days ago.
        </div>
      </div>
    </Link>
  );
};
export default JobCard;
