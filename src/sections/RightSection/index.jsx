import About from "../About";
import {data as experienceData} from '../../Content/experience'
import {data as projectData} from '../../Content/project'
import ContentContainer from "../../components/ContentContainer";
import Footer from "../Footer";
const RightSection = ({onInitial}) => {
  return (
    <div className="grid gap-y-14 lg:gap-y-40 px-5">
      <About
          onInitial={onInitial}
          title="About"
      />
      {/* <Experience/> */}
      <ContentContainer 
            onInitial={onInitial}
            title = "Experience"
            data = {experienceData}
        />
        <ContentContainer 
            onInitial={onInitial}
            title = "Project"
            data = {projectData}
        />
        <ContentContainer 
            onInitial={onInitial}
            title = "Article"
            data = {projectData}
        />

        <Footer/>
    </div>
  );
};

export default RightSection;
