import React from "react";
import './Listing.css';

const Listing = (props) => {

    return (

        <div className={`${"listing"} ${props.isFeatured && "border"}`}>

            <div className="job-info">
                <img src={props.logo} alt="" />
                <div>
                    <div>
                        <p> {props.company} </p>
                        {props.isNew && <p> NEW </p>}
                        {props.isFeatured && <p> FEATURED! </p>}
                    </div>
                    <div> {props.position} </div>
                    <div>
                        <p> {props.postedAt} .</p>
                        <p> {props.contract} .</p>
                        <p> {props.location} </p>
                    </div>
                </div>
            </div>

            <hr />

            <div className="categories">
                <div>
                    {props.jobTags.map((tag, index) => {
                        return <p key={index} onClick={() => props.onHandleFilter(tag)} >{tag}</p>
                    })}
                </div>
            </div>

        </div>

    )
}

export default Listing;