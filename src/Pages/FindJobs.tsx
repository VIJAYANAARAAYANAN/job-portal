import Jobs from "../FindJobs/Jobs";
import SearchBar from "../FindJobs/SearchBar";
import { Divider } from "@mantine/core";
const FindJobs = () => {
  return (
    <div className="min-h-[100vh]  bg-[#eaf1f5]">
      <Divider mr="xs" size="xs" mx="md" />
      <SearchBar />
      <Divider mr="xs" size="xs" mx="md" />
      <Jobs />
    </div>
  );
};
export default FindJobs;
