import React from "react";
import JobCard from "./JobCard";

// lists all job cards
// Uses both JobList and CompanyDetail to list jobs

const JobCardList = ({ jobs, apply }) => {
    console.debug("JobCardList", 'jobs=', jobs);

    return (
        <div className="JobCardList">
            {jobs.map(job => (
                <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    companyName={job.companyName}
                />
            ))}
        </div>
    )
}

export default JobCardList;