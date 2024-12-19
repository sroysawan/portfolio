
/*
<ContentContainer
    title = ""
    data={[]}
/>

*/
import { useEffect, useState } from "react";
import FormatDate from "../FormatDate";
import Picture from "../Picture";
import TitileLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";
const ContentContainer = ({
    onInitial,
    title: sectionTitle = "",
    data = [],
    currentSection ,
}) => {
    const [isMouseEnter , setIsMouseEnter] = useState({});
    const SECTION_ID = `${sectionTitle}-section`;

    useEffect(() => {
        onInitial(SECTION_ID)
        // console.log(sectionTitle);
    },[])

    // เช็คว่า currentSection ตรงกับ sectionTitle ของคอนเทนต์นี้ไหม
    const isCurrentSection = currentSection === SECTION_ID;
    return (
            <div id={SECTION_ID} className="scroll-m-14">
                <div className={`text-primary font-medium px-2 ${isCurrentSection ? 'border-l-4 border-primary pl-2' : ''}`}>
                {sectionTitle}
            </div>
                {
                    data.map(({
                        date ="",
                        title ="",
                        link ="",
                        materials = [],
                        descriptions = [],
                        skills = [],
                        picture = "",
                    }, index) =>(
                    <div 
                        key={`section-id-${index}`}
                        className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter[`section-id-${index}`] ? "bg-secondary" : ""}`}
                        onMouseEnter={() => setIsMouseEnter({[`section-id-${index}`]: true})}  
                        onMouseLeave={() => setIsMouseEnter({[`section-id-${index}`]: false})}  
                    >
                        <div className="space-y-2">
                            <FormatDate isHighlight={isMouseEnter[`section-id-${index}`]}>{date}</FormatDate>
                            <Picture picture={picture} title="Title"/>
                        </div>
                        <div className="grid gap-y-4">
                            <TitileLink isHighlight={isMouseEnter[`section-id-${index}`]} title={title} link={link} />
                            {
                                materials.length > 0 ? 
                                <div className="flex gap-4 text-xl items-center">
                                {materials.map((e,i)=>(
                                    <Material key={`material-${i}`} icon={e.type} link={e.link} />
                                ))}
                            </div>
                                : null
                            }
                            {
                                descriptions.map((e,i)=>(
                                    <Description key={`description-${i}`} description={e}/>
                                ))
                            }
                            {
                                skills.map((e,i)=> (
                                    <Tech key={`skill-${i}`} isHighlight={isMouseEnter[`section-id-${index}`]} data={e}/>
                                ))
                            }
                        </div>
                    </div>
                    ))
                }
            </div>
        )
}

export default ContentContainer;