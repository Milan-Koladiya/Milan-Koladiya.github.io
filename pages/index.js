import AboutMe from "@/src/components/aboutMe";
import GetInTouch from "@/src/components/getInTouch";
import Introduction from "@/src/components/introduction";
import LatestBlogs from "@/src/components/latestBlogs";
import LatestWorks from "@/src/components/latestWorks";
import MyServices from "@/src/components/myServices";
import MySkills from "@/src/components/mySkills";
import Testimonials from "@/src/components/testimonials";

export default function Home() {
  return (
    <div>
      <Introduction />
      <AboutMe />
      <MySkills />
      <MyServices />
      <LatestWorks />
      <Testimonials />
      <LatestBlogs />
      <GetInTouch />
    </div>
  )
}
