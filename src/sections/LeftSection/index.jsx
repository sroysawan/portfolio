import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = ({navbarItems,currentSection,toggleTheme,theme}) => {
    return (
    <div className="px-5 mb-14 lg:mb-0">
        <div className="sticky top-14 px-2 grid gap-y-5 lg:grid-rows-[1fr_2fr-25%] lg:h-[87vh]">
          <Header toggleTheme={toggleTheme} theme={theme}/>
          <Navbar navbarItems={navbarItems} currentSection={currentSection}/>
          <Contact/>
        </div>
      </div>
    )
}

export default LeftSection;