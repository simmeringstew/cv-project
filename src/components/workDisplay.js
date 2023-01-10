const WorkDisplay = ({ data }) => {
    if (data.jobTitle === "" && data.company === "" && data.startDate === "" && data.endDate === "" && data.description === "") {
        return;
    }
    else if (data.id === 1) {
        return (
            <div className="work-experience">
                <h2 className="section-title">Experience</h2>
                <h3 className="section-subtitle">{data.jobTitle}</h3>
                <h4 className="section-minititle">{data.company}</h4>
                <div className="dates">
                    <span>From: {data.startDate}</span>
                    <span>To: {data.endDate}</span>
                </div>
                <p className="description">{data.description}</p>
            </div>
        );
    }
    return (
        <div className="work-experience">
            <h3 className="section-subtitle">{data.jobTitle}</h3>
            <h4 className="section-minititle">{data.company}</h4>
            <div className="dates">
                <span>From: {data.startDate}</span>
                <span>To: {data.endDate}</span>
            </div>
            <p className="description">{data.description}</p>
        </div>
    );
}

export default WorkDisplay;
