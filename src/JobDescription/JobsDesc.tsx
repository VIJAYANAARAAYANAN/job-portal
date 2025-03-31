import { Button, Divider } from "@mantine/core";
import { IconBookmark, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { ActionIcon } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";
import { card, desc, skills } from "../Data/JobDescData";
import DOMPurify from "dompurify";
const JobsDesc = (props : any) => {
  const data = DOMPurify.sanitize(desc);
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
            <div className="text-lg  font-semibold font-[Poppins] text-[#343434]">
              Google &#x2022; 3 Days ago &#x2022; 48 Applications
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button size="sm" variant="light" color="#275DF5">
              {props.edit?"Edit" : "Apply"}
            </Button>{" "}
          </Link>

          {props.edit? <Button size="sm" variant="outline" color="red.5">
              Delete
            </Button>:<IconBookmark className="cursor-pointer" stroke={2} color="#275DF5" />}
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-between">
        {card.map((item: any, index: any) => {
          return (
            <div key={index} className="flex flex-col items-center gap-1">
              <ActionIcon
                color="blue-ribbon.5"
                className="!h-12 !w-12"
                variant="filled"
                radius="xl"
                aria-label="Settings"
              >
                <item.icon className="h-4/5 w-4/5" stroke={2} />
              </ActionIcon>
              <div className="text-sm text-[#343434]">{item.name}</div>
              <div className="font-semibold text-[#343434]">{item.value}</div>
            </div>
          );
        })}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5 text-[#275DF5]">
          Required Skills
        </div>
        <div className="flex flex-wrap gap-2 ">
          {skills.map((item: any, index: any) => {
            return (
              <ActionIcon
                key={index}
                color="blue-ribbon.6"
                className="!h-fit !w-fit font-semibold !text-sm"
                variant="light"
                radius="xl"
                aria-label="Settings"
                p="xs"
              >
                {item}
              </ActionIcon>
            );
          })}
        </div>
      </div>

      <Divider my="xl" />

      <div
        className="[&_*]:text-[#343434] [&-li]:marker:text-[#275DF5] [&_li]:mb-2 [&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-[#275DF5] [&_p]:text-justify"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>

      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5 text-[#275DF5]">
          About Company
        </div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-[rgb(255,255,255)] rounded-xl">
              <img className="h-8" src="Icons/Google.png" alt="logo" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-xl text-[#275DF5]">Google</div>
              <div className="font-medium font-[Poppins] text-[#343434]">
                10K+ Employees
              </div>
            </div>
          </div>

          <Link to="/company">
            <Button variant="light" color="#275DF5">
              Company Page
            </Button>{" "}
          </Link>
        </div>
        <div className="text-[#343434] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt
          quidem, eius placeat accusamus soluta eveniet dolores ullam voluptate
          eum, vel sit autem consequuntur incidunt, aperiam saepe! Maiores
          impedit explicabo eveniet ullam reprehenderit quisquam. In commodi
          laudantium sint ab quas?
        </div>
      </div>
    </div>
  );
};
export default JobsDesc;
