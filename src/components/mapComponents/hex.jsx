import React from "react";

function generateRandomInteger() {
    return Math.floor(Math.random() * 6); // Generates a random number between 0 (inclusive) and 6 (exclusive)
  }  

function Hex({hexType, hexId, children, randomHexagonOrientations}) {
    let classList = "hex + hex-" + hexType + " rotate-60"

    return (
        <div className={classList} id={"hex-" + hexId}>
            <div className="hex-child">
            {children}
            </div>
        </div>
    )
}

export default Hex