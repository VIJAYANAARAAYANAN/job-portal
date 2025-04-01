import { IconBookmark } from "@tabler/icons-react";

const ExperienceCard = (props:any) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between  items-center mb-1">
        <div className="flex gap-2 items-center py-1 ">
          <div className="p-1 bg-[#ffffff] rounded-md">
            <img className="h-7 w-7" src={`/Icons/${props.company}.png`} alt="logo" />
          </div>

          <div className="flex flex-col">
            <div className="font-semibold">{props.title}</div>
            <div className="text-sm text-[#275DF5] font-semibold font-[Poppins]">
              {props.company} &#x2022; {props.location}
            </div>
          </div>
        </div>
        <div className="text-sm text-[#343434] px-2">{props.startDate} - {props.endDate}</div>
      </div>

      <div className="text-sm text-[#343434] text-justify">
       {props.description}
      </div>
    </div>
  );
};
export default ExperienceCard;
