import React from 'react'

//Imports
import jsonString from './mapComponents/default_map_json.jsx'
import Column from './mapComponents/map_column.jsx'
import Hex from './mapComponents/hex.jsx'
import mapShuffler from './mapComponents/mapShuffler.jsx'
import NumberPiece from './mapComponents/number_pieces.jsx'
import Port from './mapComponents/port.jsx'
import { makePortsArray, shufflePorts } from './mapComponents/addPorts.jsx'
import { chooseFromArrayAndRemove } from './mapComponents/mapFunctions.jsx'

function Map({ trulyRandomPorts, randomHexagonOrientations}) {
  //Get Json
  let jsonMap = JSON.parse(jsonString)

  //Get Number and Terrain Array
  let newPieces = mapShuffler(jsonMap)

  //Place Hexes
  jsonMap.pieces.terrainArray = newPieces.newTerrainArray
  let terrainArray = jsonMap.pieces.terrainArray

  //Place Numbers
  jsonMap.pieces.numberArray = newPieces.newNumbersArray
  let numberArray = jsonMap.pieces.numberArray

  //Place Ports
  let portLocationPriority
  let portsArray = makePortsArray(jsonMap)

  //Initialize variables necessary for map construction loop
  let mapColumns = []
  let hexCounter = 0

  //For each column
  for (
    let columnIndex = 0;
    columnIndex < jsonMap.hexesByRow.length;
    columnIndex++
  ) {
    let columnContent = []

    //For each hex inside each column
    for (
      let hexIndex = 0;
      hexIndex < jsonMap.hexesByRow[columnIndex];
      hexIndex++
    ) {
      hexCounter++
      columnContent.push(
        <Hex
          hexType={terrainArray[hexCounter - 1]}
          hexId={hexCounter}
          key={'hex-' + hexCounter}
          randomHexagonOrientations={randomHexagonOrientations}
        >
          <Port
            portId={hexCounter}
            portTypeArray={portsArray}
            trulyRandomPorts = {trulyRandomPorts}
          ></Port>
          <NumberPiece
            key={'number-' + hexCounter}
            numberType={numberArray[hexCounter - 1]}
          ></NumberPiece>
        </Hex>,
      )
    }
    mapColumns.push(
      <Column key={'column-' + columnIndex}>{columnContent}</Column>,
    )
  }

  return (
    <>
      <div className="map-container" key={'map-1'}>
        {mapColumns}
      </div>
    </>
  )
}

export default Map
