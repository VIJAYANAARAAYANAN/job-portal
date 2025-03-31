import "@mantine/core/styles.css";
import { createTheme, Divider } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css"
import Header from "./Header/Header";
import Footer from "./LandingPage/Footer";

import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindJobs from "./Pages/FindJobs";
import FindTalents from "./Pages/FindTalents";
import TalentProfile from "./Pages/TalentProfile";
import PostJob from "./PostJobs/PostJob";
import PostJobPage from "./Pages/PostJobPage";
import JobDescriptionPage from "./Pages/JobDescriptionPage";
import ApplyJobpage from "./Pages/ApplyJobpage";
import CompanyPage from "./Pages/CompanyPage";
import PostedJobPage from "./Pages/PostedJobPage";
import JobHistory from "./JobHistory/JobHistory";
import JobHistoryPage from "./Pages/JobHistoryPage";
//The routing check from the top to bottom matches with each routes so * will not be executed at the very first if it is at the end
function App() {
  const theme = createTheme({
    colors: {
      "blue-ribbon": [
        "#eef5ff",
        "#d9e8ff",
        "#bcd8ff",
        "#8ebfff",
        "#599cff",
        "#3276ff",
        "#275df5",
        "#1440e1",
        "#1734b6",
        "#19328f",
        "#142057",
      ],
    },
    fontFamily: "Poppins , sans-serief",
    focusRing: "never",
    primaryColor: "blue-ribbon",
    primaryShade: 7,
  });
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <div className='relative'>
          <Header />
          <Divider size="xs" mx="md" />
          <Routes>
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/find-talent" element={<FindTalents />} />
            <Route path="/talent-profile" element={<TalentProfile />} />
            <Route path="/apply-job" element={<ApplyJobpage />} />
            <Route path="/jobs" element={<JobDescriptionPage />} />
            <Route path="/post-job" element={<PostJobPage />} />
            <Route path="/posted-job" element={<PostedJobPage />} />
            <Route path="/job-history" element={<JobHistoryPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="*" element={<Homepage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
