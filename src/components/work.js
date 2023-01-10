import { useState } from "react";

const Work = ({ data, addWork, addJobArea, removeJobArea }) => {

    const focusElement = (e) => {
        e.target.className = "input focused";
    }

    const removeFocusElement = (e) => {
        if (!e.target.value) {
            e.target.className = "input";
        }
    }

    const createData = () => {
        data.jobTitle = jobTitle;
        data.company = company;
        data.startDate = startDate;
        data.endDate = endDate;
        data.description = description;
    }

    const [jobTitle, setJobTitle] = useState(data.jobTitle);
    const updateJobTitle = (e) => {setJobTitle(e.target.value);}

    const [company, setCompany] = useState(data.company);
    const updateCompany = (e) => {setCompany(e.target.value);}

    const [startDate, setStartDate] = useState(data.startDate);
    const updateStartDate = (e) => {setStartDate(e.target.value);}

    const [endDate, setEndDate] = useState(data.endDate);
    const updateEndDate = (e) => {setEndDate(e.target.value);}

    const [description, setDescription] = useState(data.description);
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
        // add ability to clear this one specifically if it has been submitted already
    }

    const submit = (e) => {
        e.preventDefault();
        createData();
        addWork(data);
    }

    const addNew = (e) => {
        e.preventDefault();
        createData();
        addJobArea(data);
    }

    const toggleRemove = (e) => {
        e.preventDefault();
        createData();
        removeJobArea(data);
    }

    if (data.id <= 0) {
        return
    }
    return (
        <div>
            <form className="form-element work" onSubmit={submit}>
                <h3>Job: {data.id}</h3>
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
                    <button className="add-new" onClick={addNew}>+</button>
                    <button className="btn-light" onClick={resetElements}>Reset</button>
                    <button className="btn-color" type="submit">Submit</button>
                    <button className="remove" onClick={toggleRemove}>-</button>
                </div>
            </form>
        </div>
    );
}

export default Work;
