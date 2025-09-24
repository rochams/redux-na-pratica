import React from "react";

const Escudo = (props) => {

    const source = props.source

    return (
        <img src={source} width={props.width} height={props.height} alt="escudo" />
    )

}

export default Escudo;