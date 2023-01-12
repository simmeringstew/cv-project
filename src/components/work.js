const Work = ({ experience, workExperience, updateWorkExperience, addNewWork }) => {

    const handleInputChange = (e,  index) => {
        const value = e.target.value;
        const toChange = e.target.id;
        const copy = [...workExperience];
        copy[index][toChange] = value;
        updateWorkExperience(copy);
    }

    const handleAdd = () => {
        addNewWork();
    }

    const handleRemove = (index) => {
        const lessThan = workExperience.filter(experience => experience.id < index);
        const moreThan = workExperience.filter(experience => experience.id > index);
        const removedOne = moreThan.map(experience => removeOne(experience));
        const removed = [...lessThan, ...removedOne];
        console.log(removed);
        updateWorkExperience(removed);
    }
    function removeOne(item) {
        item.id -= 1;
        return item;
    }

    const handleReset = (index) => {
        const copy = [...workExperience];
        Object.keys(copy[index]).forEach(i => {copy[index][i] = ""; return copy;}, {});
        copy[index].id = index + 1;
        updateWorkExperience(copy);
    }

    console.log(experience);

    return (
        <div>
            <form className="form-element work">
                <h3>Job: {experience.id}</h3>
                <div className="input-group">
                    <input type="text" autoComplete="off" className="input" id="jobTitle" value={experience.jobTitle} onChange={e => handleInputChange(e, experience.id - 1)} />
                    <label className="user-label" htmlFor="jobTitle">Job Title</label>
                </div>
                <div className="input-group">
                    <input type="text" name="company" autoComplete="off" className="input" id="company" value={experience.company} onChange={e => handleInputChange(e, experience.id - 1)} />
                    <label className="user-label" htmlFor="company">Company</label>
                </div>
                <div className="input-group">
                    <input type="text" autoComplete="off" className="input" id="startDate" value={experience.startDate} onChange={e => handleInputChange(e, experience.id - 1)} />
                    <label className="user-label" htmlFor="startDate">Start Date</label>
                </div>
                <div className="input-group">
                    <input type="text" autoComplete="off" className="input" id="endDate" value={experience.endDate} onChange={e => handleInputChange(e, experience.id - 1)} />
                    <label className="user-label" htmlFor="endDate">End Date</label>
                </div>
                <div className="input-group">
                    <textarea type="text" rows={"6"} autoComplete="off" className="input" id="description" value={experience.description} onChange={e => handleInputChange(e, experience.id - 1)}></textarea>
                    <label className="user-label" htmlFor="description">Description</label>
                </div>
                <div className="submit-reset">
                    {workExperience.length === experience.id && <button className="add-new" type="button" onClick={handleAdd}>+</button>}
                    <button className="btn-color" type="button" onClick={() => handleReset(experience.id - 1)}>Reset</button>
                    {(workExperience.length !== 1 && experience.id !== 1) && <button className="remove" type="button" onClick={() => handleRemove(experience.id)}>-</button>}
                </div>
            </form>
        </div>
    );
}

export default Work;
