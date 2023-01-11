import { useState } from "react";

const Work = ({ workAreaNumber, add, remove, addWorkExperience }) => {

    const focusElement = (e) => {
        e.target.className = "input focused";
    }

    const removeFocusElement = (e) => {
        if (!e.target.value) {
            e.target.className = "input";
        }
    }

    const [jobTitle, setJobTitle] = useState("");
    const updateJobTitle = (e) => {setJobTitle(e.target.value);}

    const [company, setCompany] = useState("");
    const updateCompany = (e) => {setCompany(e.target.value);}

    const [startDate, setStartDate] = useState("");
    const updateStartDate = (e) => {setStartDate(e.target.value);}

    const [endDate, setEndDate] = useState("");
    const updateEndDate = (e) => {setEndDate(e.target.value);}

    const [description, setDescription] = useState("");
    const updateDescription = (e) => {setDescription(e.target.value);}

    const resetElements = () => {
        const general = document.querySelector(".general");
        const inputs = general.querySelectorAll(".input");
        setJobTitle("");
        setCompany("");
        setStartDate("");
        setEndDate("");
        setDescription("");
        inputs.forEach(input => input.classList = "input");
    }

    const submit = (e) => {
        e.preventDefault();
        const experienceObject = {
            jobTitle: jobTitle,
            company: company,
            startDate: startDate,
            endDate: endDate,
            description: description,
            id: workAreaNumber
        }
        addWorkExperience(experienceObject);
    }

    const addNew = () => {
        add(workAreaNumber);
    }

    const removeItem = () => {
        remove(workAreaNumber);
    }

    return (
        <div>
            <form className="form-element work" onSubmit={submit}>
                <h3>Job: {workAreaNumber}</h3>
                <div className="input-group">
                    <input type="text" autoComplete="off" className="input" id="jobTitle" value={jobTitle} onChange={updateJobTitle} onFocus={focusElement} onBlur={removeFocusElement} />
                    <label className="user-label" htmlFor="jobTitle">Job Title</label>
                </div>
                <div className="input-group">
                    <input type="text" autoComplete="off" className="input" id="company" value={company} onChange={updateCompany} onFocus={focusElement} onBlur={removeFocusElement} />
                    <label className="user-label" htmlFor="company">Company</label>
                </div>
                <div className="input-group">
                    <input type="text" autoComplete="off" className="input" id="startDate" value={startDate} onChange={updateStartDate} onFocus={focusElement} onBlur={removeFocusElement} />
                    <label className="user-label" htmlFor="startDate">Start Date</label>
                </div>
                <div className="input-group">
                    <input type="text" autoComplete="off" className="input" id="endDate" value={endDate} onChange={updateEndDate} onFocus={focusElement} onBlur={removeFocusElement} />
                    <label className="user-label" htmlFor="endDate">End Date</label>
                </div>
                <div className="input-group">
                    <textarea type="text" rows={"6"} autoComplete="off" className="input" id="description" value={description} onChange={updateDescription} onFocus={focusElement} onBlur={removeFocusElement} ></textarea>
                    <label className="user-label" htmlFor="description">Description</label>
                </div>
                <div className="submit-reset">
                    <button className="add-new" onClick={addNew} type="button">+</button>
                    <button className="btn-light" onClick={resetElements} type="button">Reset</button>
                    <button className="btn-color" type="submit">Submit</button>
                    <button className="remove" onClick={removeItem} type="button">-</button>
                </div>
            </form>
        </div>
    );
}

export default Work;
