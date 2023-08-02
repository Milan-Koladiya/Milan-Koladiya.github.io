const ProgressBar = ({ title, pers, className, animateSkills }) => {

    const progressBarStyles = {
        width: `${pers}%`,
    };

    return (
        <div className={className}>
            <h3 className="font-medium text-base mb-2">{title}</h3>
            <div className="w-full bg-[#eee]">
                <div className={`bg-primary h-[5px] relative ${animateSkills ? `progress-animate progress-${pers}` : ''}`} style={progressBarStyles}>
                    <span className="absolute top-[-30px] right-0 text-sm text-lighter-gray">{pers}%</span>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;