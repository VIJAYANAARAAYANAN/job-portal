import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";

const Companies = () => {
  return (
    <div className="mt-18 pb-5">
      <div className="text-center text-4xl  mb-10 font-semibold font-['Poppins']">
        Trusted by <span className="text-[#275DF5]">1000+</span>Companies
      </div>
      <Marquee >
        {companies.map((company, index) => (
          <div key={index} className="mx-8 px-2 py-2">
            <img
              className="h-16"
              src={`/companies/${company}.png`}
              alt="company"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
export default Companies;
