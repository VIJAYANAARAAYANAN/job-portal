import banimage from "../assets/homimage.png";
import { TextInput } from "@mantine/core";
import { Avatar } from '@mantine/core';
import { IconSearch } from "@tabler/icons-react";
import avatar from '../assets/avatar.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';

const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-5">
        <div className="text-6xl font-bold leading-tight font-[Poppins] text-[#275ef6]">
          Find your dream job{" "}
        </div>
        <div className="text 3xl font font-[Poppins]">
          A great career begins with the right opportunity. Explore thousands of
          jobs and take the next step toward your dream role today!"
        </div>
        <div className="flex gap-3 items-center mt-4">
          <TextInput
            className="bg-[#ffffff] border-2 border-gray-200 rounded-lg p-1 px-2 [&_input]:!text-gray-000"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-[#ffffff] border-2 border-gray-200 rounded-lg p-1 px-2 [&_input]:!text-gray-900"
            variant="unstyled"
            label="Job Type"
            placeholder="Full Time"
          />
          <div className="flex items-center justify-center h-full w-12 border-2 border-gray-300 hover:bg-white rounded-lg p-1 cursor-pointer">
            <IconSearch className="h-[85%] w-[85%] " stroke={1.5} />
          </div>
        </div>
      </div>

      <div className="w=[55%] flex items-center justify-center">
        <div className="w-[40rem]">
          <img src={banimage} alt="Home-Image" />
          <div className="w-fit">
            <div className="text-center mb-1 text-sm text-black  ">10K + got job</div>
            <Avatar.Group>
              <Avatar src={avatar} />
              <Avatar src={avatar1} />
              <Avatar src={avatar2} />
              <Avatar>+9k</Avatar>
            </Avatar.Group>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DreamJob;
