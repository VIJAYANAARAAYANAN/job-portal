import {
  IconBookmark,
  IconBookmarkFilled,
  IconCalendar,
} from "@tabler/icons-react";
import { Text, Divider, Button } from "@mantine/core";
import { IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
const JobListCard = (props: any) => {
  return (
    <Link
      to="/jobs"
      className="bg-white p-4 w-80 font-[Poppins] flex flex-col gap-2 rounded-md"
    >
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-1 bg-[#eaf1f5] rounded-md">
            <img
              className="h-7 w-7"
              src={`/Icons/${props.company}.png`}
              alt="logo"
            />
          </div>

          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-[#275DF5] font-semibold font-[Poppins]">
              {props.company} &#x2022; {props.applicants} Applications
            </div>
          </div>
        </div>
        {props.saved ? (
          <IconBookmarkFilled
            className="cursor-pointer"
            stroke={2}
            color="#275DF5"
          />
        ) : (
          <IconBookmark className="cursor-pointer" stroke={2} color="#275DF5" />
        )}
      </div>

      <div className="pt-3 flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-[#eaf1f5] [&>div]:rounded-lg [&>div]:text-xs font-[Poppins]">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>

      <Text
        style={{ fontSize: 12, textAlign: "justify" }}
        className="text-xs text-justify "
        lineClamp={3}
      >
        {props.description}
      </Text>

      <Divider mr="xs" size="xs" color="#275DF5" />

      <div className="flex justify-between">
        <div className="text-md font-semibold ">&#8377; {props.package}</div>
        <div className="flex items-center gap-1 text-xs">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} />{" "}
          {props.applied || props.interviewing ? "Applied" : props.offered ? "Interviewed" : "Posted"}{" "}
          {props.postedDaysAgo} days ago.
        </div>
      </div>
      {props.offered || props.interviewing &&  <Divider mr="xs" size="xs" color="#275DF5" />}
      {props.offered && (
        <div className="flex gap-2">
          <Button variant="outline" color="#275DF5" fullWidth>
            Accept
          </Button>
          <Button variant="light" color="#275DF5" fullWidth>
            Reject
          </Button>
        </div>
      )}
      {props.interviewing && (
        <div className="flex gap-1  text-sm items-center my-1">
          <IconCalendar className="w-5 h-5 text-[#275DF5]" stroke={1.5} /> Sunday, 25 August &bull; <span className="text-[#343434] font-medium">10:00 AM</span>
        </div>
      )}
    </Link>
  );
};
export default JobListCard;
