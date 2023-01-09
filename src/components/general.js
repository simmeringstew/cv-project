import { useState } from "react";

const General = () => {

    const focusElement = (e) => {
        e.target.className = "input focused";
    }

    const removeFocusElement = (e) => {
        if (!e.target.value) {
            e.target.className = "input";
        }
    }

    const [name, setName] = useState("");
    const updateName = (e) => {
        setName(e.target.value);
    }

    const [number, setNumber] = useState("");
    const updateNumber = (e) => {
        setNumber(e.target.value);
    }

    const [email, setEmail] = useState("");
    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <form>
            <h2>General Info</h2>
            <div className="input-group">
                <input required="" type="text" autoComplete="off" className="input" id="fullName" value={name} onChange={updateName} onFocus={focusElement} onBlur={removeFocusElement} />
                <label className="user-label" htmlFor="fullName">Your Name</label>
            </div>
            <div className="input-group">
                <input required="" type="text" autoComplete="off" className="input" id="phoneNumber" value={number} onChange={updateNumber} onFocus={focusElement} onBlur={removeFocusElement} />
                <label className="user-label" htmlFor="phoneNumber">Number</label>
            </div>
            <div className="input-group">
                <input required="" type="text" autoComplete="off" className="input" id="email" value={email} onChange={updateEmail} onFocus={focusElement} onBlur={removeFocusElement} />
                <label className="user-label" htmlFor="email">Email</label>
            </div>
            <div className="submit-reset">
                <button className="btn-light">Reset</button>
                <button className="btn-color">Submit</button>
            </div>
        </form>
    );
}

export default General;
