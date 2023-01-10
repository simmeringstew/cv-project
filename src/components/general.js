import { useState } from "react";

const General = ({ displayGeneral, clearGeneral }) => {

    const focusElement = (e) => {
        e.target.className = "input focused";
    }

    const removeFocusElement = (e) => {
        if (!e.target.value) {
            e.target.className = "input";
        }
    }

    const [name, setName] = useState("");
    const updateName = (e) => {setName(e.target.value);}

    const [email, setEmail] = useState("");
    const updateEmail = (e) => {setEmail(e.target.value);}

    const [number, setNumber] = useState("");
    const updateNumber = (e) => {setNumber(e.target.value);}

    const resetElements = () => {
        const general = document.querySelector(".general");
        const inputs = general.querySelectorAll(".input");
        setName("");
        setNumber("");
        setEmail("");
        inputs.forEach(input => input.classList = "input");
        clearGeneral();
    }

    const submit = (e) => {
        e.preventDefault();
        displayGeneral(name, email, number);
    }

    return (
        <form className="form-element general" onSubmit={submit}>
            <h2 className="in-form-title">General Info</h2>
            <div className="input-group">
                <input type="text" autoComplete="off" className="input" id="fullName" value={name} onChange={updateName} onFocus={focusElement} onBlur={removeFocusElement} />
                <label className="user-label" htmlFor="fullName">Your Name</label>
            </div>
            <div className="input-group">
                <input type="text" autoComplete="off" className="input" id="email" value={email} onChange={updateEmail} onFocus={focusElement} onBlur={removeFocusElement} />
                <label className="user-label" htmlFor="email">Email</label>
            </div>
            <div className="input-group">
                <input type="text" autoComplete="off" className="input" id="phoneNumber" value={number} onChange={updateNumber} onFocus={focusElement} onBlur={removeFocusElement} />
                <label className="user-label" htmlFor="phoneNumber">Number</label>
            </div>
            <div className="submit-reset">
                <button className="btn-light" onClick={resetElements}>Reset</button>
                <button className="btn-color" type="submit">Submit</button>
            </div>
        </form>
    );
}

export default General;
