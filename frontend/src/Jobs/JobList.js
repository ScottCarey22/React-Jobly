import React, { useState, useEffect } from "react";
import Search from "../common/SearchForm";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

// shows page with lists of jobs
// routed to /jobs

const JobList = () => {
    console.debug('JobList');

    const [jobs, setJobs] = useState(null);

    useEffect(function getAllJobsOnMount() {
        console.debug("JobList useEffect getallJobsOnMount");
        Search();

    }, []);

    // async function to search by form submit, reloads jobs
    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);

    }

    if (!jobs) return <LoadingSpinner />

    return (
        <div className="JobList col-md-8 offset-md-2">
            <Search searchFor={search} />
            {jobs.length
                ? <JobCardList jobs={jobs} />
                : <p className="lead">Sorry, no results were found!</p>
            }
        </div>

    );
}

export default JobList;