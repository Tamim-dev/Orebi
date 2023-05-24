import React from "react";

const Dropdwon = ({ children, title, className, dropref }) => {
    return (
        <div className={className} ref={dropref}>
            <p>{title}</p>
            {children}
        </div>
    );
};

export default Dropdwon;
