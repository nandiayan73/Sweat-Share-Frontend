import React from 'react'
import { Link } from 'react-router-dom';
const src = "https://fontawesome.com/icons/plus?f=classic&s=light"
function Circlehighlights() {
    return (
        <>

            <div className="circle-container">
                <div className="circle">
                    <div className="icon">
                        <Link to={src}> <i className="fa-light fa-plus"></i></Link>

                    </div>

                </div>

                <div className="heading">
                    <p>New</p>
                </div>

            </div>
        </>
    )
}

export default Circlehighlights
