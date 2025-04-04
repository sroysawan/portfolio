const Tech = ({isHighlight,data}) => {
    return (
        <div>
            <div className="flex flex-wrap gap-2 text-sm">
            {
                data.map((e,i) => (
                    <div key={`${e}-tech-${i}`} className={`bg-neutral px-2 py-1 rounded-md ${isHighlight ? "text-primary cursor-pointer" : ""}`}>{e}</div>
                )
                )
            }
        </div>
        </div>
    )
}

export default Tech