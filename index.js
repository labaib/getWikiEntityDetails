/**
* Ottieni dettaglio elemento Wikidata
* @param {string} endpoint - Istanza wiki ["www.wikidata.org"]
* @param {string} itemId - ID Elemento Wikidata nel formato "Q123"
* @returns {Object|null} - Ritorna un oggetto oppure null 
*/

const getWikiEntityDetails = async (endpoint, itemId) => {

  try {
    
    const url = `https://${endpoint}/wiki/Special:EntityData/${itemId}.json`;
    const response = await fetch(url);
    const json = await response.json();
    const data = Object.values(json.entities)[0]
    return data
  
  } catch { 
    return null; 
  }

}

export { getWikiEntityDetails };
