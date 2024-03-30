# Object Oriented Programming
## Logica in object zelf 
### Beschrijving 
Zet logica die verbonden is aan een object in het object zelf. 
Neem bijvoorbeeld de leeftijd. Je gaat niet elke keer je een leeftijd nodig hebt van een persoon 
hetzelfde algoritme oproepen. Beter is om een methode te maken in het persoon object die de leeftijd 
berekend op basis van de geboortedatum. 
Als er bijvoorbeeld een aanpassing gebeurt op de berekening van leeftijd (slecht voorbeeld maar just go with it) 
moet die maar op één plaats worden aangepast. Deze plaats is het Persoon object zelf. 
Nu zal deze update plaatsvinden overval waar deze methode wordt gebruikt. 

Als je dit niet had gedaan moest de berekening van de leeftijd op alle plaatsen in de code 
worden aangepast. 

Je vinden niet al deze plaatsen terug! Vergeet je één berekening aan te passen heb je een grote bug 
die misschien onopgemerkt blijft!

Contcreet is het dus goed omdat: 
- je fouten kan vermijden
- makkelijk om aanpassingen te doen (maintainability)
- overzicht!
- de developer na jou zal je oneindig dankbaar zijn 

```
anakdote: Material startdate, contractStartDate, executionStartDate, ...
```