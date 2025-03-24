import { dropdownData } from "../Data/JobsData";
import MultiInput from "./MultiInput";
import { Divider } from "@mantine/core";
import { RangeSlider } from "@mantine/core";
import { useState } from "react";
const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex px-5 py-8">
      {dropdownData.map((item, index) => (
        <>
          <div key={index} className="w-1/5 bg-white px-2 py-2 rounded-lg">
            <MultiInput {...item} />
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
        </>
      ))}
      <div className="w-1/5 bg-white px-2 py-2 rounded-lg [&_.mantine-Slider-label]:!translate-y-11">
        <div className="flex text-sm justify-between ">
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
export default SearchBar;
