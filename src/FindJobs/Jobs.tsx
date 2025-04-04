import { jobList } from "../Data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-[Poppins]  text-[#275DF5]">
          Recommend Jobs
        </div>
        <Sort />
      </div>
      <div className="mt-10 flex flex-wrap gap-5 items-center justify-center">
        {jobList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};
export default Jobs;
