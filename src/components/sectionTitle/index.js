const SectionTitle = ({ title, desc }) => {
    return (
        <div className="section-title">
            <h3 className="font-bold text-[35px] mb-2.5 uppercase relative">{title}</h3>
            <p className="text-lighter-gray text-sm tracking-[2px] uppercase">{desc}</p>
        </div>
    )
}

export default SectionTitle;