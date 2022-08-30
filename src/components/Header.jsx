import React from "react";
import JobFilter from "./JobFilter";
import './Header.css';

const Header = (props) => {

    return (
        <div className="header">

            <img src="../images/bg-header-mobile.svg" alt="" />
            <img src="../images/bg-header-mobile.svg" alt="" />

            {props.tagList.length > 0 && <div className="filter" >
                <div>
                    {props.tagList.map((tag, index) =>
                        <JobFilter key={index}
                            tagName={tag}
                            onDeleteTag={props.onDeleteTag}
                        />)}
                </div>
                <p onClick={props.onClearAll} >Clear</p>
            </div> }

        </div>
    )
}

export default Header;