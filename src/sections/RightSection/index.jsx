import About from "../About";
import {data as experienceData} from '../../Content/experience'
import {data as projectData} from '../../Content/project'
import {data as certificateData} from '../../Content/certificate'
import ContentContainer from "../../components/ContentContainer";
import Footer from "../Footer";
const RightSection = ({onInitial,currentSection }) => {
  return (
    <div className="grid gap-y-14 lg:gap-y-40 px-5">
      <About
          onInitial={onInitial}
          title="About"
          currentSection={currentSection}
      />
      {/* <Experience/> */}
      <ContentContainer 
            onInitial={onInitial}
            title = "Experience"
            data = {experienceData}
            currentSection={currentSection}
        />
        <ContentContainer 
            onInitial={onInitial}
            title = "Project"
            data = {projectData}
            currentSection={currentSection}
        />
        <ContentContainer 
            onInitial={onInitial}
            title = "Certification"
            data = {certificateData}
            currentSection={currentSection}
        />

        <Footer/>
    </div>
  );
};

export default RightSection;
