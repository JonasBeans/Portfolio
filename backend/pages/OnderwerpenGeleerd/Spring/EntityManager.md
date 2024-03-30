==================================================
JPQL 
==================================================
Het gebruik van JPQL is aan te raden als er zaken uit een databank moeten gehaald worden 
zonder te complexe querries. 

Haal object A uit tabel A. Dit zou een rechtstreekse 1-op-1 mapping gegeven. 

Maar als er een complexere query aan te pas komt om bijvoorbeeld joins te doen, 
en zaken van tabel A en tabel B in een object moeten worden gestoken is JPQL niet aan te raden.

==================================================
Entity manager
==================================================
Je kan ook op de entity manager rechtreeks sql querries op roepen. 

--------------------------------------------------------
createnativequerry()
--------------------------------------------------------
Dit is via createNativeQuerry(). Deze methode geeft ecther een lijst terug met objecten. 
Hierin zitten er dus geen namen meer van de colummen in de databank. 

--------------------------------------------------------
Result Set Mapping
--------------------------------------------------------
Als je dit wel zou willen hebben moet er een Result Set Mapping plaats vinden. 
Dit wordt gedaan met @SqlResultSetMapping(...). 
Deze annotatie kan enkel boven een @Entity worden gezet. 

In de @SqlResultSetMapping wordt er vanalles geconfigureerd. 
Hierin wordt onderandere bepaald wat de name is van de mapping. 
Ook de targetClass en de columns. 

--------------------------------------------------------
Gebruik van Entity class
--------------------------------------------------------
link: https://thorben-janssen.com/result-set-mapping-basics/
StackOverflow link: https://stackoverflow.com/questions/25188939/how-to-map-the-result-set-of-a-jpa-nativequery-to-a-pojo-using-sqlresultsetmappi
Je kan tijdens het gebruik van nativeQuerries ook beroep doen op een
nieuwe gemaakte entity class gebaseerd op de nativeQuery die uitvoert. 

Bij een join bijvoorbeeld:

Select tableA.*, tableB.column1 from tableA inner join tableB on (tableA.id = tableB.adres_id_fk)

Entity class waarop deze querry zal gemapped worden gaat velden van beide tabellen moeten combineren. 