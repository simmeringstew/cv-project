const WorkDisplay = ({ experience }) => {
    console.log(experience);
    if (experience.jobTitle === "" && experience.company === "" && experience.startDate === "" && experience.endDate === "" && experience.description === "") {
        return (
            <div></div>
        );
    }
    else if (experience.id === 1) {
        return (
            <div className="work-experience">
                <h2 className="section-title">Experience</h2>
                <h3 className="section-subtitle">{experience.jobTitle}</h3>
                <h4 className="section-minititle">{experience.company}</h4>
                <div className="dates">
                    <span>From: {experience.startDate}</span>
                    <span>To: {experience.endDate}</span>
                </div>
                <p className="description">{experience.description}</p>
            </div>
        );
    }
    return (
        <div className="work-experience">
            <h3 className="section-subtitle">{experience.jobTitle}</h3>
            <h4 className="section-minititle">{experience.company}</h4>
            <div className="dates">
                <span>From: {experience.startDate}</span>
                <span>To: {experience.endDate}</span>
            </div>
            <p className="description">{experience.description}</p>
        </div>
    );
}

export default WorkDisplay;
