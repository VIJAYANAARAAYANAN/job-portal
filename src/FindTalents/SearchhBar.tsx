import { dropdownData } from "../Data/JobsData";
import { Divider, Input } from "@mantine/core";
import { RangeSlider } from "@mantine/core";
import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";
const SearchhBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex px-5 py-8 items-center">
      <div className="w-1/5 flex items-center bg-white px-2 py-2 mr-2">
        <div className="text-[#257DF5] bg-white rounded-full p-1 mr-2">
          <IconUserCircle size={20} />
        </div>
        <Input className="border-b-2 border-b-[#eaf1f5]" variant="unstyled" placeholder="Talent Name" />
      </div>
      {searchFields.map((item, index) => (
        <>
          <div key={index} className="w-1/5 bg-white px-2 py-2 rounded-lg">
            <MultiInput {...item} />
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
        </>
      ))}
      <div className="w-1/5 bg-white px-2 py-2 rounded-lg [&_.mantine-Slider-label]:!translate-y-11">
        <div className="flex text-sm justify-between pb-1">
          <div>Salary</div>
          <div>
            &#8377;{value[0]} LPA - &#8377;{value[1]} LPAS
          </div>
        </div>
        <RangeSlider
          variant="unstyled"
          size="xs"
          color="blue-ribbon.7"
          value={value}
          labelTransitionProps={{
            transition: "skew-down",
            duration: 150,
            timingFunction: "linear",
          }}
          onChange={setValue}
        />
      </div>
    </div>
  );
};
export default SearchhBar;
