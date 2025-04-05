import {
  ActionIcon,
  Button,
  Divider,
  TagsInput,
  Textarea,
} from "@mantine/core";
import {
  IconAdjustments,
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import Certifications from "./Certifications";
import { profile } from "../Data/TalentData";
import { useState } from "react";
import SelectPInput from "./SelectPInput";
import fields from "../Data/Profile";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";

const Profile = (props: any) => {
  const [skills, setskills] = useState([
    "React",
    "Spring Boot",
    "Java",
    "Python",
    "JavaScript",
    "AWS",
    "MySQL",
    "AWS",
    "Node.js",
    "MongoDB",
    "Express",
    "Django",
    "PostgreSQL",
  ]);

  const [edit, setedit] = useState([false, false, false, false, false]);

  const select = fields;
  const handleEdit = (index: any) => {
    const newEdit = { ...edit };
    newEdit[index] = !newEdit[index];
    setedit(newEdit);
  };

  const [about, setabout] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robustapplications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and codingstandards, and contribute to the continuous improvement of the development process."
  );

  const [addexp, setaddexp] = useState(false);
  const [addCerti, setaddCerti] = useState(false);

  return (
    <div className="w-4/5 font-[Poppins] mx-auto">
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
          VijayaNaaraayanan B{" "}
          <ActionIcon
            onClick={() => handleEdit(0)}
            size="lg"
            color="blue-ribbon.5"
            variant="subtle"
          >
            {edit[0] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2 pb-2">
              <SelectPInput {...select[0]} />
              <SelectPInput {...select[1]} />
            </div>
            <SelectPInput {...select[2]} />
          </>
        ) : (
          <div className="flex flex-col gap-1.5">
            <div className="text-xl flex gap-1 items-center text-[#343434]">
              <IconBriefcase stroke={1.5} color="#275DF5" />
              Software EngineerIII &bull; Google
            </div>
            <div className="flex items-center gap-1 text-lg">
              <IconMapPin className="h-5 w-5 " color="#275DF5" stroke={1.5} />{" "}
              Coimbatore, India.
            </div>
          </div>
        )}
      </div>
      <Divider my="lg" size="xs" mx="md" />
      <div className="px-3">
        <div className="text-2xl font-medium mb-3 text-[#275DF5] flex justify-between">
          About{" "}
          <ActionIcon
            onClick={() => handleEdit(1)}
            size="lg"
            color="blue-ribbon.5"
            variant="subtle"
          >
            {edit[1] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[1] ? (
          <Textarea
            autosize
            minRows={3}
            placeholder="Enter about yourself..."
            value={about}
            onChange={(event) => setabout(event.currentTarget.value)}
          />
        ) : (
          <div className="text-sm text-justify text-[#343434]">{about}</div>
        )}
      </div>

      <Divider my="lg" size="xs" mx="md" />
      <div className="px-3">
        <div className="text-2xl font-medium mb-3 text-[#275DF5] flex justify-between">
          Skills{" "}
          <ActionIcon
            onClick={() => handleEdit(2)}
            size="lg"
            color="blue-ribbon.5"
            variant="subtle"
          >
            {edit[2] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[2] ? (
          <TagsInput
            value={skills}
            onChange={setskills}
            placeholder="Add skill"
            splitChars={[",", " ", "|"]}
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill: any, index: any) => {
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
        )}
      </div>

      <Divider my="lg" size="xs" mx="xs" />
      <div className="px-3">
        <div className="text-2xl font-medium mb-4 text-[#275DF5] flex justify-between">
          Experience{" "}
          <div className="flex gap-2">
            <ActionIcon
              onClick={() => setaddexp(true)}
              size="lg"
              color="blue-ribbon.5"
              variant="subtle"
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              onClick={() => handleEdit(3)}
              size="lg"
              color="blue-ribbon.5"
              variant="subtle"
            >
              {edit[3] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {profile.experience.map((exp: any, index: any) => {
            return <ExperienceCard key={index} {...exp} edit={edit[3]} />;
          })}
          {addexp && <ExpInput add setedit={setaddexp} />}
        </div>
      </div>

      <Divider my="lg" size="xs" mx="xs" />
      <div className="px-3">
        <div className="text-2xl font-medium mb-4 text-[#275DF5] flex justify-between">
          Certifications
          <div className="flex gap-2">
            <ActionIcon
              onClick={() => setaddCerti(true)}
              size="lg"
              color="blue-ribbon.5"
              variant="subtle"
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              onClick={() => handleEdit(4)}
              size="lg"
              color="blue-ribbon.5"
              variant="subtle"
            >
              {edit[4] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {profile.certifications.map((certi: any, index: any) => {
            return <Certifications key={index} {...certi} edit={edit[4]} />;
          })}
          {addCerti && <CertiInput setedit={setaddCerti} />}
        </div>
      </div>
    </div>
  );
};
export default Profile;
