import { Divider } from "@mantine/core";
import Profile from "../Profile/Profile";

const ProfilePage = () =>{
    return(
        <div className="min-h-[100vh]  bg-[#eaf1f5] font-[Poppins]">
            <Divider mx="md" mb="xl" />
            <Profile />
        </div>
    )
}
export default ProfilePage;