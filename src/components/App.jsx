import React, { useState } from "react";
import Header from "./Header.jsx";
import Listing from './Listing.jsx'
import Jobs from "./Jobs.json";

const App = () => {

    const [filters, setFilters] = useState([]);

    const handleFilters = (tag) => {
        if (filters.indexOf(tag) === -1) {
            setFilters(prev => [...prev, tag])
        }
    }

    const deleteTagHandler = (tag) => {
        setFilters(prev => {
            const updatedList = prev.filter(item => item !== tag);
            return updatedList;
        })
    }

    const clearAll = () => {
        setFilters([]);
    }



    const createList = (Job) => {

        const jobtags = [Job.role, Job.level, ...(Job.languages) || [], ...(Job.tools) || []];

        const filterJobs = (jobtags, filters) =>
            filters.every(value => jobtags.includes(value));

        return filters.length === 0 ? (

            <Listing
                key={Job.id}
                logo={Job.logo}
                company={Job.company}
                position={Job.position}
                postedAt={Job.postedAt}
                contract={Job.contract}
                location={Job.location}
                jobTags={jobtags}
                isNew={Job.new}
                isFeatured={Job.featured}
                onHandleFilter={handleFilters}
            />
        ) :
            (filterJobs(jobtags, filters) &&
                <Listing
                    key={Job.id}
                    logo={Job.logo}
                    company={Job.company}
                    position={Job.position}
                    postedAt={Job.postedAt}
                    contract={Job.contract}
                    location={Job.location}
                    isNew={Job.new}
                    isFeatured={Job.featured}
                    jobTags={jobtags}
                    onHandleFilter={handleFilters}
                />
            )


    }

    return (
        <React.Fragment>
            <Header tagList={filters} onDeleteTag={deleteTagHandler} onClearAll={clearAll} />
            <main>
                {Jobs.map(createList)}
            </main>
            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">George Moses</a>.
            </div>
        </React.Fragment>
    )
}

export default App;