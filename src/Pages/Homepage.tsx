import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/Dreamjob";
import Footer from "../LandingPage/Footer";
import JobCategory from "../LandingPage/JobCategory";
import Testimonials from "../LandingPage/Testimonials";

const Homepage = ()=>{
    return(
        <div className="min-h-[100vh]  bg-[#eaf1f5]">
            <Header/>
            <DreamJob />
            <Companies />
            <JobCategory />
            <Testimonials />
            <Footer />
        </div>
    )
}
export default Homepage;