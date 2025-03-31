import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const CompanyJob = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-3 items-center ">
      {jobList.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};
export default CompanyJob;
