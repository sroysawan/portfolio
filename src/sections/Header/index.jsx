import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../Content/header";
const Header = ({ toggleTheme, theme }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl text-primary font-semibold flex gap-x-3">
        {data.name}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            onClick={toggleTheme}
          />
          {/* sun icon */}
          <svg
            className="swap-on h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      <div className="text-accent font-semibold">{data.title}</div>
      <div className="text-sm w-4/6">
        <img src="https://skillicons.dev/icons?i=html,css,js,bootstrap,tailwind,react,vite,nodejs,express,mysql,prisma,postman" />
      </div>
      <div className="text-sm w-4/6">
        <a
          href={`https://mail.google.com/mail/?view=cm&to=${data.caption}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-1 hover:text-accent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <span>{data.caption}</span>
        </a>
      </div>
      <div className="mt-4">
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <span className="bg-primary text-gray-200 px-3 py-2 rounded-md hover:bg-accent">
            {data.btnText}
            <span className="rotate-90 inline-block ml-2 text-sm">
              <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
