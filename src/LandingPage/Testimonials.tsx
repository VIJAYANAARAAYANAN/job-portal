import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-10 pb-5 font-['Poppins']">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100 font-['Poppins']">
        What <span className="text-[#275DF5]">Users</span> say about us?
      </div>

      <div className="flex justify-evenly">
        {testimonials.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 p-3 rounded-xl mt-10"
          >
            <div className="flex gap-2 items-center">
              <Avatar
                className="!h-14 !w-14"
                src="/boyavatar.jpg"
                alt="User Avatar"
              />
              <div>
                <div className="text-lg text-mine-shaft-100 font-semibold">
                  {data.name}
                </div>
                <Rating value={data.rating} fractions={2} readOnly />
              </div>
            </div>
            <div className="text-xs text-mine-shaft-300">
              {data.testimonial}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
