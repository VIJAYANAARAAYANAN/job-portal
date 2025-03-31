import { similar } from "../Data/Company";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalents/TalentCard";
import CompanyCard from "./CompanyCard";

const SimilarCompanies = () => {
  return (
    <div className="w-1/4">
      <div className="text-xl font-semibold mb-5 text-[#343434]">
        Similar Companies
      </div>
      <div className="flex flex-col flex-wrap gap-5">
            {
                similar.map((company,index) =>{
                    return(
                        <CompanyCard key={index} {...company} />
                    )
                })
            }    
      </div>
    </div>
  );
};
export default SimilarCompanies;
