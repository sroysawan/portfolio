import { faGithub } from "@fortawesome/free-brands-svg-icons";
import picmjr from '../assets/project-mjr.png'
export const data = [
    {
        date:"2024",
        title:"E-commerce",
        materials:[
            {
              type:faGithub,
              link: "https://github.com/sroysawan/E-commerce"
            },
        ],
        descriptions:[    
            "• Admin: Manages users, products, categories, and orders, including updating product information, creating/deleting categories, and changing order statuses",
            "• User: Adds products to a shopping cart, places orders, stores shipping addresses, and manages account settings. Users can also view their order history and manage the cart",
            "• Cloudinary: Used for storing product images securely, reducing the load on your server",
            "• Stripe: Payment gateway for handling transactions in Thai Baht, providing a seamless checkout experience",
        ],
        skills:[
            ["React" , "Tailwaind CSS" , "Material-UI"],
            ["NodeJS" , "Express" , "Prisma" , "Cloudinary" , "Stripe"],
        ],
    },
    {
        date:"Oct 2024",
        title:"Portfolio",
        link:"https://sroysawan.netlify.app/",
        materials:[
            {
              type:faGithub,
              link: "https://github.com/sroysawan/portfolio"
            },
        ],
        descriptions:[    
                "• A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast.",

        ],
        skills:[
            ["React","Tailwind CSS"],
        ],
        picture: "https://github.com/sroysawan/portfolio/raw/main/src/assets/portfolio.gif",
    },
    {
        date:"Sep 2024",
        title:"Disney Plus Clone",
        link:"https://sroysawan-disney-clone.netlify.app/",
        materials:[
            {
              type:faGithub,
              link: "https://github.com/sroysawan/disney-clone"
            },
        ],
        descriptions:[    
                "• Responsive",
                "• Api Call By TMDB",

        ],
        skills:[
            ["React","Tailwind CSS"],
        ],
        picture: "https://github.com/sroysawan/portfolio/raw/main/src/assets/disney-clone.gif",
    },
    {
        date:"Aug 2023",
        title:"Task Management",
        link:"https://sroysawan-react-task.netlify.app/",
        materials:[
            {
              type:faGithub,
              link: "https://github.com/sroysawan/react-task"
            },
        ],
        descriptions:[    
                "• Create , Read , Update and Delete Task Management",
                "• Theme Toggles",

        ],
        skills:[
            ["React"],
        ],
        picture: "https://github.com/sroysawan/portfolio/raw/main/src/assets/taskmanagement.gif",
    },
    {
        date:"Aug 2023",
        title:"Search Image API",
        link:"https://sroysawan-search-img-api.netlify.app/",
        materials:[
            {
              type:faGithub,
              link: "https://github.com/sroysawan/search-img-app"
            },
        ],
        descriptions:[    
                "• Search Image with API Unsplash ",

        ],
        skills:[
            ["React", "API"],
        ],
        picture: "https://github.com/sroysawan/portfolio/raw/main/src/assets/search-img-with-api.gif",
    },
    {
      date:"2022-2023",
      title:"Padding Process Tracking and Task Arrangement Dashboard Project",
      descriptions:[    
              "• Retrieve data from the database and display it on the dashboard",
              "• Create , Read , Update and Delete tasks on the dashboard",
              "• Create , Read , Update and Delete employee information",
              "• for internal project"
      ],
      skills:[
          ["React" , "Bootstrap"],
          ["Laravel" , "MySQL"],
      ],
    //   picture: picmjr,
  },
]