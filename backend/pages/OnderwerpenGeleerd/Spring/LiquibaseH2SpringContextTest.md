link: http://www.h2database.com/html/features.html 

Er was eens een wonder mooi probleem in het grote bos van Informatica. 
Laten we het probleem fucking_h2_databanken ook wel bekend als FHD noemen.

Bij het maken van een test wordt een h2 databank namelijk gemaakt op de spring context. 
Liquibase gaat op deze databank veel werk leveren waar hij zo goed in is, 
en allemaal kleine tabelletjes maken, en vullen met lekkere data. 
Deze betoverende databank houdt in stand zolang er een hibernate connectie is. 

Maar toen kwam de grote slechte test. 
De grote slechte test vertelde dat er helemaal geen Creditor tabel was. 
Blijkbaar had FHD geen tabellen meer.

Liquiabse voerdt dus uit op de h2 databank van de spring context en sluit de connectie 
met de in-memory databank af. 
Hierdoor werden alle tabellen waar liquibase zoveel werk in had gestoken gewoon 
in de vuilbak gesmeten door fucking_h2_databanken... euh.. euh.. FHD. 

In het vervolg gebruiken wij dus allemaal ;DB_CLOSE_DELAY=-1 in de hibernate url waardoor 
FHD niet fucking moeilijk doet en zijn schijt job kan doen.

fucking_h2_databanken in combinatie met liquibase werkte weer en alle devs leefden nog lang en ongelukkig. 
einde. 