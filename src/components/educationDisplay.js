const EducationDisplay = ({ study }) => {
    if (study.degree === "" && study.school === "" && study.graduationYear === "") {
        return (
            <div></div>
        );
    }
    else if (study.id === 1) {
        return (
            <div className="education">
                <h2 className="section-title">Education</h2>
                {study.degree !== "" && <h3 className="section-subtitle">{study.degree}</h3>}
                {study.school !== "" && <h4 className="section-minititle">{study.school}</h4>}
                {study.graduationYear !== "" && <span className="section-minititle">{study.graduationYear}</span>}
            </div>
        );
    }
    return (
        <div className="education">
            {study.degree !== "" && <h3 className="section-subtitle">{study.degree}</h3>}
            {study.school !== "" && <h4 className="section-minititle">{study.school}</h4>}
            {study.graduationYear !== "" && <span className="section-minititle">{study.graduationYear}</span>}
        </div>
    );
}

export default EducationDisplay;
