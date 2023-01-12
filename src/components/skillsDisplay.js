const SkillsDisplay = ({ skills }) => {
    if (skills.length === 1 && skills[0].skill === "") {
        return (
            <div></div>
        );
    }
    return (
        <div className="skills">
            <h2 className="section-title">Skills</h2>
            {skills.map(skill =>
            <li key={skill.id}>{skill.skill}</li>
            )}
        </div>
    );
}

export default SkillsDisplay;
