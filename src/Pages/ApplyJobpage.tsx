import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJobCom from "../ApplyJobs/ApplyJobCom";

const ApplyJobpage = () => {
  return (
    <div className="min-h-[100vh]  bg-[#eaf1f5] font-[Poppins]">
      <Link className="my-4 p-3 inline-block" to="/jobs">
        <Button
          leftSection={<IconArrowLeft size={20} stroke={2} />}
          variant="light"
          color="#275DF5"
        >
          Back
        </Button>
      </Link>
      <ApplyJobCom />
    </div>
  );
};
export default ApplyJobpage;
