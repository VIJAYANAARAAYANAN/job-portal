import { Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import PostedJob from "../PostedJobs/PostedJob";
import PostedJobDesc from "../PostedJobs/PostedJobDesc";
import JobHistory from "../JobHistory/JobHistory";

const JobHistoryPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh]  bg-[#eaf1f5] font-[Poppins] px-4">
      <Divider size="xs"/>
      <div className="my-5">
            <JobHistory />
      </div>
    </div>
  );
};
export default JobHistoryPage;
