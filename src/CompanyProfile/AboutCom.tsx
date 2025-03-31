import { companyData } from "../Data/Company";

const AboutCom = () => {
  const company: { [key: string]: any } = companyData;

  return (
    <div className="flex flex-col gap-5">
      {Object.keys(company).map((key, index) => {
        return (
          key != "Name" && (
            <div key={index}>
              <div className="text-xl mb-3 font-semibold">{key}</div>
              {key != "Website" && (
                <div className="text-small text-[#343434] text-justify">
                  {key != "Specialties"
                    ? company[key]
                    : company[key].map((item: any, index: any) => (
                        <span key={index}> &bull; {item}</span>
                      ))}
                </div>
              )}
              {key == "Website" && (
                <a
                  href={company[key]}
                  target="_blank"
                  className="text-small text-[#275DF5] text-justify"
                >
                  {company[key]}
                </a>
              )}
            </div>
          )
        );
      })}
    </div>
  );
};
export default AboutCom;
