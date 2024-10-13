import { useEffect, useState } from "react"
import LeftSection from "./sections/LeftSection"
import RightSection from "./sections/RightSection"


function App() {
  const [sectionIds , setSectionIds] = useState([]); //array เปล่า
  const [navbarItems , setNavbarItems] = useState([]); 
  const [currentSection , setCurrentSection] = useState(""); 
  const [theme, setTheme] = useState("lighttheme");

  useEffect(() => {
    // ดึงค่าธีมจาก Local Storage ถ้ามีเก็บไว้
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme); // ตั้งค่าธีมเริ่มต้นจาก Local Storage
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === "lighttheme" ? "darktheme" : "lighttheme";
    setTheme(newTheme); // เปลี่ยนค่าธีมใน state
    localStorage.setItem("theme", newTheme); // เก็บค่าธีมใหม่ลง Local Storage
  };
  

   // ตั้งค่า data-theme ให้กับ div#root
   useEffect(() => {
    document.getElementById("root").setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme); // เพิ่มบรรทัดนี้
  }, [theme]); // ทุกครั้งที่ theme เปลี่ยน, อัปเดต data-theme ของ div#root

const addSectionsIds = (sectionId) => {
  // console.log(sectionId)
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
  // console.log('scroll')
  for (let i = 0; i < sectionIds.length; i++){
    const el = sectionIds[i];
    // console.log(el)
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
}

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

  return (
    <div data-theme={theme} className="pt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">     
      <LeftSection navbarItems={navbarItems} currentSection={currentSection} toggleTheme={toggleTheme} theme={theme}/>
      <RightSection onInitial={addSectionsIds} currentSection={currentSection}/>
    </div>
  )
}

export default App
