import { Button, Divider } from "@mantine/core";
import { IconBookmark, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { ActionIcon } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";

const JobsDesc = () => {
  return (
    <div className="w-2/3">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-[rgb(255,255,255)] rounded-xl">
            <img className="h-14 w-14" src="Icons/Google.png" alt="logo" />
          </div>

          <div>
            <div className="font-semibold text-xl text-[#275DF5]">
              Software Engineer
            </div>
            <div className="text-lg  font-semibold font-[Poppins]">
              Google &#x2022; 3 Days ago &#x2022; 48 Applications
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button size="sm" variant="light" color="#275DF5">
              Apply
            </Button>{" "}
          </Link>
          <IconBookmark className="cursor-pointer" stroke={2} color="#275DF5" />
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex">
        <div className="flex flex-col items-center">
          <ActionIcon
            color="blue-ribbon.6"
            className="!h-12 !w-12"
            variant="filled"
            radius="xl"
            aria-label="Settings"
          >
            <IconMapPin className="h-4/5 w-4/5" stroke={2} />
          </ActionIcon>
          <div className="text-sm text-[#343434]">Location</div>
          <div className="font-semibold text-[#343434]">Coimbatore</div>
        </div>
      </div>
    </div>
  );
};
export default JobsDesc;
