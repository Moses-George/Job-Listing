import React from "react";


const JobFilter = (props) => {
    return (
        <div className="tag">
            <p> {props.tagName} </p>
            <img src="../images/icon-remove.svg" alt="" onClick={()=> props.onDeleteTag(props.tagName)} />
        </div>
    )
}

export default JobFilter;