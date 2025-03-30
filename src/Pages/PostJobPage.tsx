import { Divider } from "@mantine/core";
import PostJob from "../PostJobs/PostJob";

const PostJobPage = () => {
  return (
    <div className="min-h-[100vh]  bg-[#eaf1f5] font-[Poppins]">
      <Divider mr="xs" size="xs" mx="md" />
      <PostJob />
    </div>
  );
};
export default PostJobPage;
