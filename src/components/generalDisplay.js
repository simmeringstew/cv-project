const GeneralDisplay = ({ generalInfo }) => {
    if (generalInfo.name === "" && generalInfo.email === "" && generalInfo.number === "") {
        return (
            <div></div>
        );
    }
    return (
        <div className="info-section">
            {generalInfo.name !== "" && <h2>{generalInfo.name}</h2>}
            {
            (generalInfo.email !== "" || generalInfo.number !== "") && 
            <div className="email-number">
                <span>{generalInfo.email}</span>
                <span>-</span>
                <span>{generalInfo.number}</span>
            </div>
            }
        </div>
    );
}

export default GeneralDisplay;
