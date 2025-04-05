import { ActionIcon } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

const Certifications = (props: any) => {
  return (
    <div className="flex justify-between  items-center mb-1">
      <div className="flex gap-2 items-center py-1 ">
        <div className="p-1 bg-[#ffffff] rounded-md">
          <img
            className="h-7 w-7"
            src={`/Icons/${props.issuer}.png`}
            alt="logo"
          />
        </div>

        <div className="flex flex-col">
          <div className="font-semibold">{props.name}</div>
          <div className="text-sm text-[#275DF5] font-semibold font-[Poppins]">
            {props.issuer}
          </div>
        </div>
      </div>

      <div className="flex item-center gap-2">
        <div className="flex flex-col text-[#343434] px-2 items-end">
          <div className="text-sm">{props.issueDate}</div>
          <div className="text-sm">{props.certificateId}</div>
        </div>
        {props.edit && (
          <ActionIcon size="lg" color="red.8" variant="subtle">
            <IconTrash className="h-4/5 w-4/5" stroke={1.5} />
          </ActionIcon>
        )}
      </div>
    </div>
  );
};
export default Certifications;
