import { useEffect } from 'react'
import { data } from '../../Content/about'
const About = ({
    onInitial,
    title = "",
}) => {

    const SECTION_ID = `${title}-section`;
    useEffect(() => {
        onInitial(SECTION_ID)
    },[])
    return (
        <div id={SECTION_ID} className='space-y-4 px-2 scroll-m-14'>
            <div className='text-primaryAccent font-medium'>{data.title}</div>
            <div>{data.description}</div>
        </div>
    )
}

export default About;