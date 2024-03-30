# Beschrijving

Camel is een manier voor automagische config en message routing.

Baeldung link: https://www.baeldung.com/apache-camel-intro

## Routes

Het framework maakt gebruik van routes. 
Dit zijn batch achtige configuraties om te definieren wat er moet 
gebeuren moest er iets binnenkomen op de aangegeven url (ingevuld bij from()).
Daaracther staat alles gedefineerd wat er allemaal met de file moet gebeuren. 
Wat er moet gebeuren met de file (process) en indien er een output is 
waar het naartoe moet. 

"_Simplest way to define routes is that they are a chain of Processors_"

### RouteBuilder

Elke route is gedefinieerd in een class. Deze class gaat altijd van 
de RouteBuilder moeten overerven.

## Components

Naar mijn bevindingen momenteel werkt het zo dat er in de configuratie de connectie worden gemaakt en 
worden bewaard in een soort context. Alles daarachter wordt dan in de routes geconfigureerd. 


## Camel context

Dit is het centraal gedeelte (container). Het geeft toegang tot allerhande services: 

- Components
- Endpoints
- Routes
- Data Formats
- Languages 
- Type Convertes 
- Registry
