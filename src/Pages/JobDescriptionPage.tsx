import { Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowLeft } from '@tabler/icons-react';
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";
import JobsDesc from "../JobDescription/JobsDesc";
import RecommendedJobs from "../JobDescription/RecommendedJobs";


const JobDescriptionPage = () => {
  return (
    <div className="min-h-[100vh]  bg-[#eaf1f5] font-[Poppins]">
      <Link className="my-4 p-3 inline-block" to="/find-jobs">
          <Button leftSection={<IconArrowLeft size={20} stroke={2} />
} variant="light" color="#275DF5">
            Back
          </Button>
        </Link>
        <div className="flex gap-5 px-3 justify-around">
          <JobsDesc />
          <RecommendedJobs />
        </div>
    </div>
  );
};
export default JobDescriptionPage;
