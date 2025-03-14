# getWikiEntityDetails
Funzione per l'ottenimento di informazioni su un'entità tramite API Wikidata



## Importazione


### CDN

jsDelivr serve automaticamente i file GitHub con il tipo MIME `application/javascript`, l'URL segue il formato `https://cdn.jsdelivr.net/gh/<user>/<repo>@<branch>/<file>`

```
import { searchWikiEntitiesByLabel } from 'https://cdn.jsdelivr.net/gh/labaib/getWikiEntityDetails@main/index.js';
```

> Pro: aggiornamento automatico; Contro: pagina carica più lentamente 

### Download locale

Il file può essere scaricato localmente e caricato insieme agli altri file JavaScript
```
import { getWikiEntityDetails } from './js/getWikiEntityDetails.js';
```

> Pro: più veloce; Contro: aggiornamento manuale 


## Esempi

```
<script type="module">
        
 import { getWikiEntityDetails } from 'https://cdn.jsdelivr.net/gh/labaib/getWikiEntityDetails@main/index.js';

 (async () => {
     const entity = await getWikiEntityDetails("Q1067");
 })();

</script>
```
```
<script type="module">
        
  import { getWikiEntityDetails } from './js/getWikiEntityDetails.js';

  (async () => {
    const entity = await getWikiEntityDetails("Q1067");
  })();

</script>
```