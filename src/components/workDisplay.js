const WorkDisplay = ({ data }) => {
    if (data.jobTitle === "" && data.company === "" && data.startDate === "" && data.endDate === "" && data.description === "") {
        return;
    }
    return (
        <h6>Hello</h6>
    );
}

export default WorkDisplay;
