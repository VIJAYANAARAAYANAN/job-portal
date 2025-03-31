import { ActionIcon } from "@mantine/core";
import { IconAdjustments, IconBookmark, IconLink } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const CompanyCard = (props: any) => {
  return (
    <div className="flex justify-between items-center rounded-2xl bg-white">
      <div className="flex gap-2 items-center  px-2 py-1 rounded-xl">
        <div className="p-1 bg-[#eaf1f5] rounded-md">
          <img
            className="h-7 w-7"
            src={`/Icons/${props.name}.png`}
            alt="logo"
          />
        </div>

        <div>
          <div className="font-semibold">{props.name}</div>
          <div className="text-xs text-[#275DF5] font-semibold font-[Poppins]">
            {props.employees} Employees
          </div>
        </div>
      </div>
      <div className="pr-2 flex items-center justify-center">
        <ActionIcon color="blue-ribbon.5" variant="transparent">
          <IconLink className="mr-1" stroke={1.5} />
        </ActionIcon>
      </div>
    </div>
  );
};
export default CompanyCard;
