import React from 'react'

export function connectedHexes(hex, jsonMap) {
  return jsonMap.hexes[hex].adjacentHexes
}

export function removeHexPrefix(inputString) {
    // Use the replace method with a regular expression to remove "hex-"
    return inputString.replace(/^hex-/i, ''); // The "i" flag makes it case-insensitive
  }

export function removeIntersection(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item))
}

export function chooseFromArrayAndRemove(array) {
  if (array.length === 0) {
    return undefined // Return undefined if the array is empty
  }
  const randomIndex = Math.floor(Math.random() * array.length)
  const chosenElement = array.splice(randomIndex, 1)[0]
  return chosenElement
}

export function sortHexesArrayById(hexesArray) {
  return hexesArray.sort((a, b) => a.id - b.id)
}

export function isNextToSea(hex, jsonMap) {
  if (jsonMap.hexes[hex].adjacentWater.length) {
    return jsonMap.hexes[hex].adjacentWater
  } else {
    return false
  }
}

export function shuffleArray(array) {
    const shuffledArray = [...array]; // Create a copy of the original array
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const randomIndex = Math.floor(Math.random() * (i + 1));
  
      // Swap elements at randomIndex and i
      [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
  
    return shuffledArray;
  }

export default {
  connectedHexes,
  removeIntersection,
  chooseFromArrayAndRemove,
  sortHexesArrayById,
  isNextToSea,
  shuffleArray,
  removeHexPrefix
}
