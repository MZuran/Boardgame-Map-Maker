//port port-up-right port-sheep
import React from "react";
import jsonString from './default_map_json.jsx'
import { chooseFromArrayAndRemove } from "./mapFunctions.jsx";

let jsonMap = JSON.parse(jsonString)

function Port({portId, portTypeArray, trulyRandomPorts}) {

    let index = portId-1
    let possibleDirections = jsonMap.hexes[portId].adjacentWater
    let chosenDiection

    if (trulyRandomPorts) {
        chosenDiection = chooseFromArrayAndRemove(possibleDirections)
    } else {
        chosenDiection = possibleDirections[0]
    }

    let answer = null

    if (portTypeArray[index]) {
        answer = <div className={"port " + portTypeArray[index] + " port-" + chosenDiection}></div>
    }

    return answer
}

export default Port