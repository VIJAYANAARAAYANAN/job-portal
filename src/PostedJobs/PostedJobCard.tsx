const PostedJobCard = (props: any) => {
  return (
    <div className="bg-[#ffffff] rounded-xl p-2 border-l-2 border-l-[#275DF5]">
      <div className="text-sm font-semibold">{props.jobTitle}</div>
      <div className="text-xs text-[#343434] font-medium">{props.location}</div>
      <div className="text-xs text-[#343434] font-medium">{props.posted}</div>
    </div>
  );
};
export default PostedJobCard;
