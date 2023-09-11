import React from "react";
import { connectedHexes } from "./mapFunctions";
import { removeIntersection } from "./mapFunctions";
import { chooseFromArrayAndRemove } from "./mapFunctions";
import { shuffleArray } from "./mapFunctions";
import { removeHexPrefix } from "./mapFunctions";

export function makePortsArray(jsonMap)  {
    let keys = Object.keys(jsonMap.hexes)

    let totalHexes = jsonMap.hexes

    let availableHexes = []
    let totalHexesCount = []
    let portList = jsonMap.pieces.portsArray

    for (let i = 0; i < keys.length; i++) {
        if (jsonMap.hexes[i + 1].adjacentWater[0]) {
            availableHexes.push(removeHexPrefix(jsonMap.hexes[i + 1].id))
        }
        totalHexesCount.push(i + 1)
    }


    let portsTypeArray = new Array(keys.length).fill(null)

    let iterations = availableHexes.length

    for (let i = 0; i < iterations; i++) {
        if (!portList.length > 0) {
            
        } else {
            let portType = chooseFromArrayAndRemove(portList)

            let portLocation = chooseFromArrayAndRemove(availableHexes)

            portsTypeArray[portLocation - 1] = portType
        }
    }

    return portsTypeArray
}

export function shufflePorts() {

}

export default {makePortsArray, shufflePorts}