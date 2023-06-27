import React, { useContext, useState } from "react";
import "./JobCard.css";
import UserContext from "../auth/UserContext";

// show information about a specifc job
// rendered by JobCardList

const JobCard = ({ id, title, salary, equity, companyName }) => {
    console.debug("JobCard");

    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();

    React.useEffect(function updatedAppliedStatus() {
        console.debug("JobCard useEffect updateAppliedStatus", 'id=', id);
        setApplied(hasAppliedToJob(id));

    }, [id, hasAppliedToJob]);

    //  function to apply to job
    async function handleApply(e) {
        if (hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }

    return (
        <div className="JobCard card"> {applied}
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p>{companyName}</p>
                {salary && <div><small>Salary: {formatSalary(salary)}</small></div>}
                {equity !== undefined && <div><small>Equity: {equity}</small></div>}
                <button
                    className="btn btn-danger font-weight-bold text-uppercase float-right"
                    onClick={handleApply}
                    disabled={applied}
                >
                    {applied ? "Applied" : "Apply"}
                </button>
            </div>
        </div>
    )
}