import { Tabs } from "@mantine/core";
import { activeJobs } from "../Data/PostedJob";
import PostJobCard from "./PostedJobCard";
import PostedJobCard from "./PostedJobCard";

const PostedJob = () => {
  return (
    <div className="w-1/6 mt-5">
      <div className="text-2xl font-semibold mb-5 text-[#275DF5]">
        Posted Jobs
      </div>
      <div>
        <Tabs variant="pills" defaultValue="active">
          <Tabs.List className="[&_button[aria-selected='false']]:bg-[#ffffff] font-medium" >
            <Tabs.Tab value="active">Active [4]</Tabs.Tab>
            <Tabs.Tab value="draft">Draft [1]</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="active">
            <div className="flex flex-col gap-5 mt-4">
                {
                    activeJobs.map((item,index) =>{
                        return(
                            <PostedJobCard key={index} {...item} />
                        )
                    })
                }
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="draft">Draft panel</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
export default PostedJob;
