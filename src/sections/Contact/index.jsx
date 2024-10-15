import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className="flex items-end gap-4 text-2xl ">
            <a href="https://github.com/sroysawan" target="_blank">
              <FontAwesomeIcon className="hover:scale-125 hover:text-primary transition-all" icon={faGithub}/>
            </a>
              <a href="https://linkedin.com/in/sroysawan-kladcheydee-8058a9287" target="_blank">
                <FontAwesomeIcon className="hover:scale-125 hover:text-primary transition-all" icon={faLinkedin}/> 
              </a>
        </div>
    )
}

export default Contact;