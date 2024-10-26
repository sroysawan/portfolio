import { useEffect, useState } from "react"
import LeftSection from "./sections/LeftSection"
import RightSection from "./sections/RightSection"

const themeKey  = "port_show"; 

function App() {
  const [sectionIds , setSectionIds] = useState([]); //array เปล่า
  const [navbarItems , setNavbarItems] = useState([]); 
  const [currentSection , setCurrentSection] = useState(""); 
  const [theme, setTheme] = useState("lighttheme");
  const [showScrollTop, setShowScrollTop] = useState(false); // state สำหรับการแสดงปุ่ม ScrollToTop

  useEffect(() => {
    // ดึงค่าธีมจาก Local Storage ถ้ามีเก็บไว้
    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme) {
      setTheme(savedTheme); // ตั้งค่าธีมเริ่มต้นจาก Local Storage
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === "lighttheme" ? "darktheme" : "lighttheme";
    setTheme(newTheme); // เปลี่ยนค่าธีมใน state
    localStorage.setItem(themeKey , newTheme); // เก็บค่าธีมใหม่ลง Local Storage
  };
  

   // ตั้งค่า data-theme ให้กับ div#root
   useEffect(() => {
    document.getElementById("root").setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme); // เพิ่มบรรทัดนี้
  }, [theme]); // ทุกครั้งที่ theme เปลี่ยน, อัปเดต data-theme ของ div#root

  const addSectionsIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => [...new Set([...prev, elementId])]);

    const elementTitile = document.getElementById(sectionId).childNodes[0].textContent;
    const obj = {title:elementTitile , sectionId:elementId}
    setNavbarItems((prev) => {
      if(prev.findIndex(e=>e.title === obj.title) < 0){
        return [...prev,obj]
      }
      return prev;
    })
  }


  const handleScroll = () =>{
  for (let i = 0; i < sectionIds.length; i++){
    const el = sectionIds[i];
    // find value scroll window = y+height/2
    const elOffsetTop = document.getElementById(el).getClientRects()[0].y;
    const height = document.getElementById(el).getClientRects()[0].height*0.5;
    const viewportHeight = window.innerHeight * 0.3;

    if(elOffsetTop <= 0){
      if((elOffsetTop + height) > viewportHeight){
        setCurrentSection(el)
      }
      } else if(elOffsetTop > 0 && elOffsetTop < viewportHeight){
        setCurrentSection(el)
      }
    }
      // ตรวจสอบการเลื่อนเพื่อแสดง/ซ่อนปุ่ม ScrollToTop
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(()=> {
    if(sectionIds.length > 0){
      // console.log(sectionIds[0])
      setCurrentSection(sectionIds[0])
    }
  },[sectionIds])

  useEffect(()=> {
    window.addEventListener('scroll',handleScroll);  
    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  },[sectionIds])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // ใช้สำหรับการเลื่อนแบบนุ่มนวล
    });
  };
  

  return (
    <div data-theme={theme} className="pt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">     
      <LeftSection navbarItems={navbarItems} currentSection={currentSection} toggleTheme={toggleTheme} theme={theme}/>
      <RightSection onInitial={addSectionsIds} currentSection={currentSection}/>
      {/* ปุ่ม ScrollToTop */}
      {showScrollTop && (
        <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 p-1 rounded-full shadow-md hover:opacity-90 lg:hidden ${
          theme === "lighttheme"
            ? "bg-primary text-white"
            : "bg-primary text-black"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
        </button>
      )}
    </div>
  )
}

export default App
