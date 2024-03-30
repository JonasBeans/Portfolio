# Docker
## Omschrijving
Docker is een mechanisme om een container te maken. 
Een container is een afgebakend stukje process die gebruik maakt 
van de gedeelde resources van de host. 

Neem bijvoorbeeld een Maven project. 

Docker werkt op basis van dockerimages. Deze images worden gemaakt 
doormiddel van dockerfiles. In deze dockerfiles worden stappen gezet 
die layers gaan creeëren. Een image is iets algemeen. 
Van elk soort technologie kan er een image gemaakt worden waardoor docker 
universeel kan gebruikt worden. 

`Universeel als dezelfde processor architecture wordt gebruikt van de computer waarop de image is gemaakt. ARM vs x86`       

Eenmaal een image is gemaakt kan deze gebruikt worden om een container te generaten. 
Het voordeel hiervan is dat deze container kan verplaats worden naar eender waar. 
Het is wel aan te raden deze container zo stateless mogelijk te maken zodat deze overal 
kan gebruikt worden. 
Moest er bijvoorbeeld een extern storage systeem gebruikt worden en de container wordt verplaats 
naar ergens anders zonder hetzelfde extern storage systeem zullen er fouten komen. 

## Export file system
Er is een mogelijkheid om het filesysteem te exporteren naar een zip bestand. 
ref: [stackoverflow](https://stackoverflow.com/questions/44769315/how-to-see-docker-image-contents)
```shell
docker ps -a 
docker export -o {export file name}.zip {container ps id}
```
