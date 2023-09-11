import React from 'react'
import {connectedHexes, removeIntersection, chooseFromArrayAndRemove, sortHexesArrayById} from './mapFunctions.jsx'

function verySmartShuffle(newTerrainArray, newNumbersArray, jsonMap) {
  //******************************* CLASS AND ARRAYS *******************************
  //Hexagon Class
  class Hex {
    constructor(id, type, number) {
      this.id = id;
      this.type = type;
      this.number = number;
    }
  }

  let hexesContentsArray = []
  let hexesIdArray = []

  //We make an Id array based on the number of hexes
  for (let i = 0; i < newTerrainArray.length; i++) {
    hexesIdArray.push(i + 1)
  }

  //******************************* DESERT TILE HANDLING *******************************
  // Remove 0 from the numbers array
  let zero = newNumbersArray.splice(newNumbersArray.indexOf(0), 1)[0]

  // Remove "desert" from the strings array
  let desert = newTerrainArray.splice(newTerrainArray.indexOf('desert'), 1)[0]

  // We select the spot for the desert tile at random
  let desertHexId = chooseFromArrayAndRemove(hexesIdArray)

  let desertHex = new Hex(desertHexId, desert, zero);

  hexesContentsArray.push(desertHex)

  //******************************* BLACK NUMBER HANDLING ******************************
  //We make an array to know where black numbers can be placed
  let blackNumberHexesAvailable = hexesIdArray

  let blackNumberArray = jsonMap.pieces.blackNumberArray
  newNumbersArray = removeIntersection(newNumbersArray, blackNumberArray)

  //Repeats for as many black numbers there are on the board
  let blackNumberAmount = blackNumberArray.length
  for (let i=0; i < blackNumberAmount; i++) {
    let id = chooseFromArrayAndRemove(blackNumberHexesAvailable)
    blackNumberHexesAvailable = removeIntersection(blackNumberHexesAvailable, connectedHexes(id, jsonMap))

    let type = chooseFromArrayAndRemove(newTerrainArray)

    let number = chooseFromArrayAndRemove(blackNumberArray)

    let newBlackHex = new Hex(id, type, number);

    hexesContentsArray.push(newBlackHex)
  }

  //******************************* REINSERTING DESERT AND BLACK HEXES INTO ARRAYS ******************************
  //Shuffle the rest of the tiles and numbers normally
  newTerrainArray.sort(() => Math.random() - 0.5)
  newNumbersArray.sort(() => Math.random() - 0.5)

  hexesContentsArray = sortHexesArrayById(hexesContentsArray)
  //Once for each special hex in the hexes contents array
  for (let i = 0; i < hexesContentsArray.length; i++) {
    let currentHex = hexesContentsArray[i]
    newTerrainArray.splice(currentHex.id - 1, 0, currentHex.type)
    newNumbersArray.splice(currentHex.id - 1, 0, currentHex.number)
  }
  return { newTerrainArray, newNumbersArray }
}

function mapShuffler(jsonMap) {
  let terrain = jsonMap.pieces.terrainArray
  let numbers = jsonMap.pieces.numberArray

  return verySmartShuffle(terrain, numbers, jsonMap)
}

export default mapShuffler
