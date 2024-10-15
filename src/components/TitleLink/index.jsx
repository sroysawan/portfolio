import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TitileLink = ({ isHighlight, title, link }) => {
    if(!link){
        return <div
        className={`text-accent ${isHighlight ? "text-primary" : ""}`}
      >
          {title}
      </div>
    }
  return (
    <div
      className={`text-accent ${isHighlight ? "text-primary" : ""}`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
        <FontAwesomeIcon
          className={`text-xs -rotate-45 duration-100 ease-out ${
            isHighlight ? "translate-x-1 -translate-y-1" : ""
          }`}
          icon={faArrowRight}
        />
      </a>
    </div>
  );
};

export default TitileLink;
