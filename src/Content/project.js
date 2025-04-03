import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const data = [
    {
        date:"2024",
        title:"Camping",
        // link:"https://camping-production.vercel.app",
        materials:[
            {
              type:faGithub,
              link: "https://github.com/sroysawan/Camping"
            },
        ],
        descriptions:[    
            "• User Registration and Profile Management: Powered by Clerk, users can sign up, log in, and update their profiles, including their names, profile pictures, and other personal details",
            "• Create, Edit, and Delete Landmarks: Users can create landmarks for camping spots, add detailed descriptions, upload images, and pin exact locations on an interactive map powered by React Leaflet. They can also edit or delete landmarks they’ve created",
            "• Favorite Landmarks: Users can save landmarks to their favorites, building a personalized list of preferred camping spots",
            "• Search Functionality: The search system allows users to easily and quickly find landmarks using keywords.",
        ],
        skills:[
            ["NextJS" , "TypeScript", "Tailwind CSS" , "Shadcn/ui" , "React Leaflet"],
            ["NodeJS" , "Prisma" , "Supabase" , "Clerk"],
        ],
        picture: "https://github.com/sroysawan/portfolio/raw/main/src/assets/camping_port.gif",              
    },
    {
        date:"2024",
        title:"E-commerce",
        link:"https://e-com2024-web.vercel.app/",
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
            ["React" , "Tailwind CSS" , "Material-UI" , "Zustand" ],
            ["NodeJS" , "Express" , "Prisma" , "Cloudinary" , "Stripe"],
        ],
        picture: "https://github.com/sroysawan/portfolio/raw/main/src/assets/ecom.gif",
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
                "• A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast",

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
        descriptions: [    
            "• Responsive: Fully optimized for all screen sizes, ensuring a seamless user experience across devices",
            "• API Integration: Fetches movie and TV show data dynamically using TMDB API",
            "• Frontend Design: Replicates Disney Plus UI using React and TailwindCSS",
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
                "• Create, Read, Update, Delete (CRUD): Users can add, edit, and delete tasks efficiently",
                "• Theme Toggle: Allows switching between light and dark themes with persistent theme state",
                "• Local Storage Integration: Tasks are stored locally, ensuring data persistence across sessions",
                "• User-friendly Interface: Simple and clean UI with responsive design for better user experience",
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
                "• Search for high-quality images using the Unsplash API.",
                "• Implemented dynamic search functionality with real-time API calls to fetch image results based on user input",
                "• Features responsive design for optimal usability on various screen sizes",
                "• Includes smooth loading animations and error handling for a better user experience",

        ],
        skills:[
            ["React", "API"],
        ],
        picture: "https://github.com/sroysawan/portfolio/raw/main/src/assets/search-img-with-api.gif",
    },
    {
      date:"2022-2023",
      title:"Padding Process Tracking and Task Arrangement Dashboard Project (University Graduation Project)",
      descriptions:[    
              "• Developed a production tracking system for factories to monitor progress and task arrangement",
              "• Features include adding, deleting, updating, and rearranging task queues to display real-time production status",
              "• Displays machine-specific tasks, completed quantities, and estimated completion time directly on the dashboard",
              "• Includes an employee management system for adding, editing, and deleting employee data",
              "• Integrated employee data with the dashboard using employee IDs or RFID to display personalized production details.",
              "• Frontend developed entirely using ReactJS with responsive design for seamless usability",
      ],
      skills:[
          ["React" , "Bootstrap"],
          ["Laravel" , "MySQL"],
      ],
  },
]