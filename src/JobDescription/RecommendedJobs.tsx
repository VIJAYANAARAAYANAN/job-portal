import { jobList } from "../Data/JobsData";
import { talents } from "../Data/TalentData";
import JobCard from "../FindJobs/JobCard";
import Jobs from "../FindJobs/Jobs";

const RecommendedJobs = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5 text-[#343434]">
        Recommended Jobs
      </div>
      <div className="flex flex-col flex-wrap gap-5 ">
        {jobList.map(
          (job, index) => index < 6 && <JobCard key={index} {...job} />
        )}
      </div>
    </div>
  );
};
export default RecommendedJobs;
