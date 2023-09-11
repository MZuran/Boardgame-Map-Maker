import React from "react";

function MapColumn({children, columnId}) {
    return (
        <div className="map-column">
            {children}
        </div>
    )
}

export default MapColumn