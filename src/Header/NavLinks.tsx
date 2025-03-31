import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Job", url: "/post-job" },
    { name: "Posted Job", url: "/posted-job" },
    { name: "Job History", url:"/job-history"}
  ];

  const location = useLocation();

  return (
    <div className="flex gap-5 h-full items-center pointer font-['Poppins']">
      {links.map((link, index) => (
        <div
          key={index}
          className={`h-full flex items-center border-t-[3px] ${
            location.pathname === link.url
              ? "border-[#275DF5] text-[#275ef6]"
              : "border-transparent text-black"
          }`}
        >
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
