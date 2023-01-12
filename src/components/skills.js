const Skills = ({ skill, skills, updateSkills, addNewSkill }) => {

    const handleInputChange = (e,  index) => {
        const value = e.target.value;
        const copy = [...skills];
        copy[index].skill = value;
        updateSkills(copy);
    }

    const handleAdd = (e, index) => {
        if (e.key === "Enter") {
            addNewSkill();
        }
        else if (e.key === "Delete" && index !== 0) {
            const lessThan = skills.filter(skill => skill.id < index);
            const moreThan = skills.filter(skill => skill.id > index);
            const removedOne = moreThan.map(skill => removeOne(skill));
            const removed = [...lessThan, ...removedOne];
            updateSkills(removed);
        }
    }
    function removeOne(item) {
        item.id -= 1;
        return item;
    }

    return (
        <div className="input-group skill-input" onKeyDown={e => handleAdd(e, skill.id - 1)}>
            <input type="text" autoComplete="off" className="input" id="skill" value={skill.skill} onChange={e => handleInputChange(e, skill.id - 1)} />
            <label className="user-label" htmlFor="skill">Skill</label>
        </div>
    );
}

export default Skills;
