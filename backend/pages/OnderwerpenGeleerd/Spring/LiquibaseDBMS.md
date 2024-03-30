Je kan liquibase scripts laten uitvoeren op basis van het type database. 
Dit is handig voor bijvoorbeeld h2 databanken. 
Dan kan je ervoor zorgen dat enkel data word geïnsterd als het een h2 databank is. 

voor sql: 

in de comments vanboven aangeven:
--liquibase formatted sql
--changeset author:id dbms:h2,...

Het is een csv dus je kan meerdere types meegeven

