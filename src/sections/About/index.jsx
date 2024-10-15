import { useEffect } from 'react'
import { data } from '../../Content/about'
const About = ({
    onInitial,
    title = "",
    currentSection,
}) => {

    const SECTION_ID = `${title}-section`;
    useEffect(() => {
        onInitial(SECTION_ID)
    },[])
    // เช็คว่า currentSection ตรงกับ sectionTitle ของคอนเทนต์นี้ไหม
    const isCurrentSection = currentSection === SECTION_ID;
    return (
        <div id={SECTION_ID} className='space-y-4 px-2 scroll-m-14'>
            <div className={`text-primary font-medium px-2 ${isCurrentSection ? 'border-l-4 border-primary pl-2' : ''}`}>{data.title}</div>
            <div className='text-sm'>{data.description}</div>
        </div>
    )
}

export default About;