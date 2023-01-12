const Education = ({ study, education, updateEducation, addNewEducation }) => {

    const handleInputChange = (e,  index) => {
        const value = e.target.value;
        const toChange = e.target.id;
        const copy = [...education];
        copy[index][toChange] = value;
        updateEducation(copy);
    }

    const handleAdd = () => {
        addNewEducation();
    }

    const handleRemove = (index) => {
        const lessThan = education.filter(study => study.id < index);
        const moreThan = education.filter(study => study.id > index);
        const removedOne = moreThan.map(study => removeOne(study));
        const removed = [...lessThan, ...removedOne];
        updateEducation(removed);
    }
    function removeOne(item) {
        item.id -= 1;
        return item;
    }

    const handleReset = (index) => {
        const copy = [...education];
        Object.keys(copy[index]).forEach(i => {copy[index][i] = ""; return copy;}, {});
        copy[index].id = index + 1;
        updateEducation(copy);
    }

    return (
        <div>
            <form className="form-element education">
                <h3>Degree: {study.id}</h3>
                <div className="input-group">
                    <input type="text" autoComplete="off" className="input" id="degree" value={study.degree} onChange={e => handleInputChange(e, study.id - 1)} />
                    <label className="user-label" htmlFor="degree">Degree</label>
                </div>
                <div className="input-group">
                    <input type="text" autoComplete="off" className="input" id="school" value={study.school} onChange={e => handleInputChange(e, study.id - 1)} />
                    <label className="user-label" htmlFor="school">School</label>
                </div>
                <div className="input-group">
                    <input type="text" autoComplete="off" className="input" id="graduationYear" value={study.graduationYear} onChange={e => handleInputChange(e, study.id - 1)} />
                    <label className="user-label" htmlFor="graduationYear">Graduation Year</label>
                </div>
                <div className="submit-reset">
                    {education.length === study.id && <button className="add-new" type="button" onClick={handleAdd}>+</button>}
                    <button className="btn-color" type="button" onClick={() => handleReset(study.id - 1)}>Reset</button>
                    {(education.length !== 1 && study.id !== 1) && <button className="remove" type="button" onClick={() => handleRemove(study.id)}>-</button>}
                </div>
            </form>
        </div>
    );
}

export default Education;
