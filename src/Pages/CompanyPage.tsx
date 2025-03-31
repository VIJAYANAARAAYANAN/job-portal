import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import SimilarCompanies from "../CompanyProfile/SimilarCompanies";
import Company from "../CompanyProfile/Company";
const CompanyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100vh]  bg-[#eaf1f5] font-[Poppins] p-4">
      <Button
        className="my-4"
        leftSection={
          <IconArrowLeft size={20} stroke={2} onClick={() => navigate(-1)} />
        }
        variant="light"
        color="#275DF5"
      >
        Back
      </Button>
      <div className="flex gap-5 justify-around">
        <Company />
        <SimilarCompanies />
      </div>
    </div>
  );
};
export default CompanyPage;
