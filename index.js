/**
* Ottieni dettaglio elemento Wikidata
* @param {string} itemId - ID Elemento Wikidata nel formato "Q123"
* @param {string} [endpoint="www.wikidata.org"] - opzionale
* @returns {Object|null} - Ritorna un oggetto oppure null 
*/

const getWikiEntityDetails = async (itemId, endpoint = "www.wikidata.org") => {

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
