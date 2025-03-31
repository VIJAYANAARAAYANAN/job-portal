import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import AboutCom from "./AboutCom";
import CompanyJob from "./CompanyJobs";
import ComEmployees from "./ComEmployees";

const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative">
        <img
          className="rounded-t-2xl h-50 w-full"
          src="profilebanner.png"
          alt="Banner image"
        />
        <img
          className="h-35 w-35 rounded-3xl -bottom-1/4 p-2 absolute left-6 bg-[#eaf1f5]"
          src="/Icons/Google.png"
          alt="Profile.img"
        />
      </div>
      <div className="px-3 mt-16 ">
        <div className="text-3xl font-semibold flex justify-between text-[#275DF5]">
          Google
          <Avatar.Group>
            <Avatar src="avatar.png" />
            <Avatar src="avatar1.png" />
            <Avatar src="avatar2.png" />
            <Avatar>10k</Avatar>
          </Avatar.Group>
        </div>

        <div className="flex items-center gap-1 text-lg">
          <IconMapPin className="h-5 w-5 " color="#275DF5" stroke={1.5} />{" "}
          Coimbatore, India
        </div>
        <Divider my="xl" />
        <div>
          <Tabs variant="outline" defaultValue="About" radius="lg">
            <Tabs.List className="font-semibold text-[#343434] mb-5  [&_button]:!text-xl [&_button[data-active='true']]:!text-[#275DF5]">
              <Tabs.Tab value="About">About</Tabs.Tab>
              <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
              <Tabs.Tab value="employe">Employees</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="About">
                <AboutCom />
            </Tabs.Panel>
            <Tabs.Panel value="jobs">
                <CompanyJob />
            </Tabs.Panel>
            <Tabs.Panel value="employe">
                <ComEmployees />
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default Company;
