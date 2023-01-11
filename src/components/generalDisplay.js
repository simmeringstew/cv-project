const GeneralDisplay = ({ info }) => {
    if (!info) {
        return (
            <div></div>
        );
    }
    return (
        <div className="info-section">
            <h2>{info.name}</h2>
            <div className="email-number">
                <span>{info.email}</span>
                <span>-</span>
                <span>{info.number}</span>
            </div>
        </div>
    );
}

export default GeneralDisplay;
