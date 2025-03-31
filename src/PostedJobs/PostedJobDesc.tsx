import { Badge, Tabs } from "@mantine/core";
import AboutCom from "../CompanyProfile/AboutCom";
import ComEmployees from "../CompanyProfile/ComEmployees";
import CompanyJob from "../CompanyProfile/CompanyJobs";
import Jobs from "../FindJobs/Jobs";
import JobDescriptionPage from "../Pages/JobDescriptionPage";
import JobsDesc from "../JobDescription/JobsDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalents/TalentCard";

const PostedJobDesc = () => {
  return (
    <div className="w-3/4 mt-5 px-5">
      <div className="text-2xl font-semibold flex items-center  text-[#275DF5]">
        Software Engineer{" "}
        <Badge variant="light" ml="sm" color="blue-ribbon.5" size="sm">
          Badge
        </Badge>
      </div>
      <div className="font-medium text-[#343434] mb-5">Coimbatore, India</div>
      <div>
        <Tabs variant="outline" defaultValue="overview" radius="lg">
          <Tabs.List className="font-semibold text-[#343434] mb-5  [&_button]:!text-xl [&_button[data-active='true']]:!text-[#275DF5]">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobsDesc edit />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="mt-10 flex flex-wrap gap-5 justify-around">
              {talents.map((talent, index) => {
                return (
                  index < 6 && <TalentCard key={index} {...talent} posted />
                );
              })}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className="mt-10 flex flex-wrap gap-5 justify-around">
              {talents.map((talent, index) => {
                return (
                  index < 6 && <TalentCard key={index} {...talent} invited />
                );
              })}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
export default PostedJobDesc;
