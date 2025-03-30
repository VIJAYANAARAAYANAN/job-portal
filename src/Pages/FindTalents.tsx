import { Divider } from "@mantine/core";
import SearchhBar from "../FindTalents/SearchhBar";
import Talents from "../FindTalents/Talents";

const FindTalents = () => {
  return (
    <div className="min-h-[100vh]  bg-[#eaf1f5] font-[Poppins]">
      <SearchhBar />
      <Divider mr="xs" size="xs" mx="md" />
      <Talents />
    </div>
  );
};
export default FindTalents;
