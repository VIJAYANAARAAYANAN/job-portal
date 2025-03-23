import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/Dreamjob";
import JobCategory from "../LandingPage/JobCategory";
import Testimonials from "../LandingPage/Testimonials";

const Homepage = ()=>{
    return(
        <div className="min-h-[100vh]  bg-[#eaf1f5]">
            <DreamJob />
            <Companies />
            <JobCategory />
            <Testimonials />
        </div>
    )
}
export default Homepage;