import React from "react";

function Banner(props) {
    const { img } = props;
    return (
        <img className='banner'
            src={img}
            alt='' />
    )
}

export default Banner;
