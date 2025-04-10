
import filecert from '../assets/Certificate of Internship.pdf'
import certpic from '../assets/Certificate-of-Internship-img.webp'
import iccert from '../assets/1375IC31375-650113-สร้อยสวรรค์-กลัดเฉยดี.pdf'
import icpic from '../assets/1375IC31375-650113-สร้อยสวรรค์-กลัดเฉยดี-img.webp'
import reactcert from '../assets/Certificate-udemy-พัฒนาเว็บแอพพลิเคชั่นด้วย React (Real-World Projects).pdf'
import reactpic from '../assets/Certificate-udemy-พัฒนาเว็บแอพพลิเคชั่นด้วย-React-_Real-World-Projects_-img.webp'
import btdpic from '../assets/Verified-Certificate-of-Participation.webp'
import btdcert from '../assets/Certificate-btd.pdf'
export const data = [
    {
        date:"Aug 2023",
        title:"Verified Certificate of Participation",
        link:btdcert,
        descriptions:[    
                "• the course DevLab 3 Open Access Program with rank",
        ],
        skills:[
            ["Javascript" ,],
        ],
        picture: btdpic,
    },
    {
        date:"Aug 2023",
        title:"พัฒนาเว็บแอพลิเคชั่นด้วย React (Real-World Projects)",
        link:reactcert,
        // materials:[
        //     {
        //       type:faGithub,
        //       link: "https://github.com/sroysawan"
        //     },
        //     {
        //       type:faGithub,
        //       link: "https://github.com/sroysawan"
        //     }
        // ],
        descriptions:[    
                "• Learn the Basics of React 18",
                "• Task Management App (useEffect & Local Storage)",
                "• Blog Application (React Router V6)",
                "• Shopping Cart System (Context & Reducers)",
                "• Image Search System with API (Update)",
        ],
        skills:[
            ["React" , "Context", "Reducer"],
        ],
        picture: reactpic,
    },
    {
        date:"Jun 2022",
        title:"Certificate of Internship",
        link:filecert,
        descriptions:[    
                "• Frontend Developer - Majorette (THAILAND) Co., Ltd (internship)"
        ],
        skills:[
            ["React" , "Bootstrap"],
        ],
        picture: certpic,
    },
    {
      date:"Jan 2022",
      title:"e-Training Digital Literacy",
      link:iccert,
      descriptions:[    
              "• Computer and information Technology Skills",
      ],
      picture: icpic,
  },
]