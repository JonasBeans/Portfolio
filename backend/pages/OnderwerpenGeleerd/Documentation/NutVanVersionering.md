Versionering is belangrijk in verband met dependencies in andere applicaties.
Het geeft een anker om op verder te gaan indien er zich voordoen en er uitgevist moet worden waar het wel 
werkte en waar niet meer. Dit is effieciënter en sneller. 

Voorbeeld: 

FE maakt gebruik van BE versie 3.0.0. 

BE zit op versie 3.14.0-SNAPSHOT.

Er is geopteerde om de FE up-te-daten dus zullen we rechtstreeks naar versie 
3.14.0-SNAPSHOT gaan. Echter blijkt dat de FE niet kan werken met BE versie 3.14.0-SNAPSHOT. 
"Oke dan zoeken we een versie dit wel werkte.": zegt men dan. 

3.2.0 werkt bijvoorbeeld wel en als het onderzoek verder gaat naar 3.3.0 werkt het niet meer. 
van 3.3.0 -> latest versie zijn er geen significante aanpassingen gemaakt die betrekking hebben op 
de error. "Oke dan zoeken we welke aanpassingen er zijn gemaakt tussen 3.2.0 en 3.3.0 waardoor deze fout zich kan voordoen".

Dit kan gevonden worden doormiddel van de Git-geschiedenis. "Aah oke hier zit iets dat veranderd is dat ervoor kan zorgen dat de code breekt.".
Probleem is opgelost en iedereen is blij.

Conclusie:

Versionering zorgt ervoor dat er effieciënter kan onderzocht worden indien er zich een fout zich voordoet in applicaties die afhankelijk zijn 
aan deze module. Je kan dan nagaan in de Git-geschiedenis waar er aanpassigen zijn gemaakt die beterkking hebben op deze fout. En zo bespaar je 
veel tijd omdat niet de volledige applicatie ondersteboven moet gehaald worden.  

