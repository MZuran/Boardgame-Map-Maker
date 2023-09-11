// Function to fetch and load the JSON file
async function loadJSONFile() {
    try {
      const response = await fetch('../../objects/default_map.json');
      if (!response.ok) {
        throw new Error('Failed to fetch JSON file');
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  let jsonData = await loadJSONFile()
  let jsonString = JSON.stringify(jsonData)
  
  export default jsonString