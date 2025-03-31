import { Tabs } from "@mantine/core";
import { jobList } from "../Data/JobsData";
import JobListCard from "./JobListCard";

const JobHistory = () => {
  return (
    <div className="">
      <div className="text-2xl font-semibold mb-5 text-[#275DF5]">
        Job History
      </div>
      <div>
        <Tabs variant="outline" defaultValue="applied" radius="lg">
          <Tabs.List className="font-semibold text-[#343434] mb-5  [&_button]:!text-xl [&_button[data-active='true']]:!text-[#275DF5]">
            <Tabs.Tab value="applied">Applied</Tabs.Tab>
            <Tabs.Tab value="saved">Saved</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>

          </Tabs.List>

          <Tabs.Panel value="applied">
          <div className="mt-10 flex flex-wrap gap-5 items-center justify-center">
        {jobList.map((job, index) => (
          <JobListCard key={index} {...job} applied/>
        ))}
      </div>
          </Tabs.Panel>
          <Tabs.Panel value="saved">
          <div className="mt-10 flex flex-wrap gap-5 items-center justify-center">
        {jobList.map((job, index) => (
          <JobListCard key={index} {...job} saved/>
        ))}
      </div>
          </Tabs.Panel>
          <Tabs.Panel value="offered">
          <div className="mt-10 flex flex-wrap gap-5 items-center justify-center">
        {jobList.map((job, index) => (
          <JobListCard key={index} {...job} offered />
        ))}
      </div>
          </Tabs.Panel>
          <Tabs.Panel value="interviewing">
          <div className="mt-10 flex flex-wrap gap-5 items-center justify-center">
        {jobList.map((job, index) => (
          <JobListCard key={index} {...job} interviewing />
        ))}
      </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
export default JobHistory;
