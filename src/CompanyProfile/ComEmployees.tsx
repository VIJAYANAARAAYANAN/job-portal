import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalents/TalentCard";

const ComEmployees = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-5 justify-center">
      {talents.map((talent, index) => {
        return index < 6 && <TalentCard key={index} {...talent} />;
      })}
    </div>
  );
};
export default ComEmployees;
