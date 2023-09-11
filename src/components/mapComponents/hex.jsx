import React from "react";
import { chooseFromArrayAndRemove } from "./mapFunctions";

function Hex({hexType, hexId, children, hexagonOrientations}) {
    let rotation
    switch (hexagonOrientations) {
        case false:
        case 0:
        case 300:
        default:
            rotation = 0;
            break
        
        case 1:
        case 60:
            rotation = 60;
            break

        case 2:
        case 120:
            rotation = 120;
            break

        case 3:
        case 180:
            rotation = 180;
            break

        case 4:
        case 240:
            rotation = 240;
            break;

        case "random":
            rotation = chooseFromArrayAndRemove([0, 60, 120, 180, 240])
            console.log("rotation = " + rotation)
            break
    }

    let classList = "hex + hex-" + hexType + " rotate-" + rotation

    return (
        <div className={classList} id={"hex-" + hexId}>
            <div className="hex-child">
            {children}
            </div>
        </div>
    )
}

export default Hex