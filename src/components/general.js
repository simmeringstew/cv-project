const General = ({ generalInfo, updateGeneral }) => {

    const handleInputChange = (e) => {
        const value = e.target.value;
        const toChange = e.target.id;
        const copy = {...generalInfo};
        copy[toChange] = value;
        updateGeneral(copy);
    }

    const handleReset = () => {
        const copy = {...generalInfo};
        Object.keys(copy).forEach(i => {copy[i] = ""; return copy;}, {});
        updateGeneral(copy);
    }

    return (
        <form className="form-element general">
            <h2 className="in-form-title">General Info</h2>
            <div className="input-group">
                <input type="text" autoComplete="off" className="input" id="name" value={generalInfo.name} onChange={e => handleInputChange(e)} />
                <label className="user-label" htmlFor="name">Your Name</label>
            </div>
            <div className="input-group">
                <input type="text" autoComplete="off" className="input" id="email" value={generalInfo.email} onChange={e => handleInputChange(e)} />
                <label className="user-label" htmlFor="email">Email</label>
            </div>
            <div className="input-group">
                <input type="text" autoComplete="off" className="input" id="number" value={generalInfo.number} onChange={e => handleInputChange(e)} />
                <label className="user-label" htmlFor="number">Number</label>
            </div>
            <div className="submit-reset">
                <button className="btn-color" type="button" onClick={() => handleReset()}>Reset</button>
            </div>
        </form>
    );
}

export default General;
