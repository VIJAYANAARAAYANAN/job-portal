import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import Certifications from "./Certifications";

const Profile = (props: any) => {
  return (
    <div className="w-2/3 font-[Poppins] p-4 px-5">
      <div className="relative">
        <img
          className="rounded-t-2xl h-50 w-full"
          src="profilebanner.png"
          alt="Banner image"
        />
        <img
          className="h-45 w-45 rounded-full -bottom-1/4 absolute left-3"
          src="avatar.png"
          alt="Profile.img"
        />
      </div>
      <div className="px-3 mt-16 ">
        <div className="text-3xl font-semibold flex justify-between text-[#275DF5]">
          {props.name}
          <Button variant="light" color="#275DF5">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center text-[#343434]">
          <IconBriefcase stroke={1.5} color="#275DF5" />
          {props.role} &bull; {props.company}
        </div>
        <div className="flex items-center gap-1 text-lg">
          <IconMapPin className="h-5 w-5 " color="#275DF5" stroke={1.5} />{" "}
          {props.location}
        </div>
      </div>
      <Divider my="lg" size="xs" mx="md" />
      <div className="px-3">
        <div className="text-2xl font-medium mb-3 text-[#275DF5]">About</div>
        <div className="text-sm text-justify text-[#343434]">{props.about}</div>
      </div>

      <Divider my="lg" size="xs" mx="md" />
      <div className="px-3">
        <div className="text-2xl font-medium mb-3 text-[#275DF5]">Skills</div>
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill: any, index: any) => {
            return (
              <div
                key={index}
                className="bg-[#ffffff] bg-opacity-15 rounded-3xl text-sm font-medium px-3 py-1"
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>

      <Divider my="lg" size="xs" mx="xs" />
      <div className="px-3">
        <div className="text-2xl font-medium mb-4 text-[#275DF5]">
          Experience
        </div>
        <div className="flex flex-col gap-8">
          {props.experience.map((exp: any, index: any) => {
            return <ExperienceCard key={index} {...exp} />;
          })}
        </div>
      </div>

      <Divider my="lg" size="xs" mx="xs" />
      <div className="px-3">
        <div className="text-2xl font-medium mb-4 text-[#275DF5]">
          Certifications
        </div>
        <div className="flex flex-col gap-8">
          {props.certifications.map((certi: any, index: any) => {
            return <Certifications key={index} {...certi} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Profile;
