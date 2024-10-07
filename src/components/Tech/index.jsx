const Tech = ({isHighlight,data}) => {
    return (
        <div>
            <div className="flex gap-2 text-sm">
            {
                data.map((e,i) => (
                    <div key={`${e}-tech-${i}`} className={`bg-primarySubcontent px-2 py-1 rounded-md ${isHighlight ? "text-primaryTitle cursor-pointer" : ""}`}>{e}</div>
                )
                )
            }
        </div>
        </div>
    )
}

export default Tech