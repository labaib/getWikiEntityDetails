const getWikiEntityDetails = async (endpoint, itemId) => {

  const url = `https://${endpoint}/wiki/Special:EntityData/${itemId}.json`;
  const response = await fetch(url, { credentials: "include" });
  const json = await response.json();
  const data = json.entities

  return data

}

export { getWikiEntityDetails };
