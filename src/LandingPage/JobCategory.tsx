import React, { useRef } from "react";
import { jobCategory } from "../Data/Data";

const JobCategory = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollLeft -= e.deltaY;
      e.preventDefault();
    }
  };

  return (
    <div className="mt-10 pb-5">
      <div className="text-center text-4xl mb-5 font-semibold font-['Poppins']">
        Browse <span className="text-[#275DF5]">Job</span>Category
      </div>
      <div className="mx-auto font-medium text-lg w-1/2 text-[#000000] text-center font-['Poppins']">
        Explore Job Opportunities of your skills. Start your career journey today
      </div>

      <div
        ref={scrollRef}
        onWheel={handleScroll}
        className="mt-10 mb-10 flex gap-5 overflow-x-auto scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing font-['Poppins'] px-10"
      >
        {jobCategory.map((category, index) => (
          <div key={index} className="flex-shrink-0 w-64 bg-gray-100 p-5 rounded-xl shadow-md border-1 border-[#275DF5] hover:backdrop-blur-2xl">
            <div className="p-2 bg-white rounded-full w-fit flex justify-center mx-auto">
              <img
                className="h-8 w-8 object-contain"
                src={`/Category/${category.name}.png`}
                alt={category.name}
              />
            </div>
            <div className="text-[#275DF5] text-center text-[16px] font-semibold mt-2">{category.name}</div>
            <div className="text-[14px] text-center mt-2">{category.desc}</div>
            <div className="text-gray-500 text-center text-[14px] font-semibold mt-2">
              {category.jobs}+ Jobs Posted
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
