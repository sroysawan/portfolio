import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
  { title : "About", sectionId: "About-section" },
  { title : "Experience", sectionId: "Experience-section"},
  { title : "Project", sectionId: "Project-section"},
  { title : "Certificate", sectionId: "Certificate-section"},
]

const Navbar = ({navbarItems,currentSection}) => {

  const [isMouseEnter, setIsMouseEnter] = useState({})
  const handleClick = (sectionId) => {
    // console.log(sectionId)
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth"})
  }
  // console.log(currentSection)
    return (
        <div className="hidden lg:flex flex-col font-semibold mt-7"        >
            {
              navbarItems.map((e,i) => (
              <div 
                key={`e.sectionId-index`}
                onClick={() => (handleClick(e.sectionId))}
                className="cursor-pointer flex py-2"
                onMouseEnter={(() => setIsMouseEnter({[e.title]:true}))}
                onMouseLeave={(() => setIsMouseEnter({[e.title]:false}))}
              >
                <div>
                  <FontAwesomeIcon 
                    className={`new-arrow ${currentSection === e.sectionId ? "text-primary" : isMouseEnter[e.title] ? "" : "hidden"}`} 
                    icon={faArrowRight} />    
                </div>
                {/* <div className={`${currentSection === e.sectionId || isMouseEnter[e.title] ? "translate-x-3" : ""} duration-500 ease-out`}>{e.title}</div> */}
                <div className={`${currentSection === e.sectionId ? "text-primary" : ""} ${ isMouseEnter[e.title] ? "translate-x-3" : ""} duration-500 ease-out`}>
                  {e.title}
                </div>
              </div>
              ))
            }
          </div>
    )
}
export default Navbar;