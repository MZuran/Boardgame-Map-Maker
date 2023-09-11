import React from "react";

function NumberPiece({numberType}) {
    return (
        <div className={"number number-" + numberType}>
        </div>
    )
}

export default NumberPiece