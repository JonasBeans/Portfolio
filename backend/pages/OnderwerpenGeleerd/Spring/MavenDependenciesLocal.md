# .m2 file voor local dependencies

## uitleg local development
Indien een applicatie dependencies heeft van een andere module, en er gedevelopt moet 
worden is het aangeraden om dit lokaal up-te-daten.

## voorbeeld 
Als backend applicatie 'BEA' modules voorziet aan frontend applicatie 'FEA' kan het soms 
voorkomen dat er snel moet worden gechecked of aanpassingen werken in beiden. 
Nu als er aanpassingen worden gemaakt in BEA en deze worden gebruik door 
FEA zal FEA deze niet lokaal gebruiken maar downloaden van een remote server. 
In dit geval nemen we Nexus als remote server. 

Je gaat dus een kleine aanpassing maken in BEA, deze vervolgens tesen in FEA en merken 
dat het niet werkt. Je zal dus andere aanpassingen moeten doen in BEA en terug checken in 
FEA of ze werken. Een back-and-forth-operatie. 

Nu als elke keer dat je aanpassingen maakt in BEA deze moet deployen op Nexus en deze 
vervolgens moet binnentrekken in FEA kost al snel wat tijd. 

## Update local maven 
Om dit process sneller te maken kan de FEA ook lokaal aanpassingen binnentrekken. 
Dit doe je door in BEA mvn clean install te doen

```bash
mvn clean install
```

Deze zal de aanpassingen doorvoeren naar de lokale .m2 repository die overgens ook gebruikt wordt 
door FEA. Dit is minder tijdrovend dan het voorgaande process van uploaden naar Nexus. 
Je kan nagaan of deze .jar is geupdate door in de .m2 folder te kijken en de timestamp te checken. 


