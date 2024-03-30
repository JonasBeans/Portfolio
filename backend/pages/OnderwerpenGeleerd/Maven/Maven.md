# Maven en Maven plugins
Table of contents:
- [Maven en Maven plugins](#maven-en-maven-plugins)
  - [Plugins](#plugins)
    - [**-Surefire**](#-surefire)
    - [**-Failsafe**](#-failsafe)
  - [Jacoco](#jacoco)

## Plugins
Maven is een tool voor het compilen van java code. 
Bij het compilen kunnen er allerlei plugins gebruikt worden voor 
allemaal leuke dingetjes zoals:
- Testing
- Reporting
- Building docker images
- ...

Het wordt ook gebruikt voor het resolven van dependencies.
Ook voor het declareren van modules.

### **-Surefire**
Wordt gebruikt voor het uitvoeren van unit tests.
### **-Failsafe**
Wordt gebruikt voor het uitvoeren van integrations tests. 
## Jacoco 
_Java Code Coverage_

Wordt gebruikt voor het genereren van testing reports. 
Ook voor de code coverage van de testen te bepalen. 

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Acerta-Payroll-Service_connect-internal-api&metric=alert_status&token=cad81ffa7b32b8b1604e61c7e370d528e25ab65d)](https://sonarcloud.io/summary/new_code?id=Acerta-Payroll-Service_connect-internal-api)

## Libraray in module

### Probleem 
File not found exception van klasse op het classpath. 

Failed to parse configuration class [be.acerta.backend.custmgt.lci.app.App]; nested exception is java.io.FileNotFoundException: class path resource [com/sap/conn/jco/ext/DestinationDataProvider.class] cannot be opened because it does not exist.

In het LCI project zijn er meerdere modules gedefinieërd. 
Één daarvan bevatte een lib/sap folder met daarin een .jar library. 
Bij het builden van dit project was het voorgevallen dat er tijdens het opstarten 
van de image een "File not found" exception werd gegeven op het classpath. 

Hij kon een klasse niet vinden die gedefinieerd stond in de extern toegevoegde lib. 
Waarom het voordien werkte en op dat moment niet meer kwam door een migratie van de 
repository van Bitbucket naar GitHub. 

Toen de repository op bitbucket stond werd er gebruik gemaakt van een build plugin. 
In deze plugin kon configuratie toegevoegd worden die te maken hadden met hoe de build 
moest gebeuren. ("jib-maven-plugin" van google). 
Voor de migratie naar GitHub moetst deze verwijdered worden. 

In deze plugin stond een extra classpath gedefinieerd. 
Daardoor zal deze library toen wel zijn meegenomen en na de migratie niet meer. 

### Conclusie
Het kan voorkomen dat er een "File not found" exception wordt gegeven waarbij 
een klasse op het classpath niet meer gevonden kan worden omdat er ergens een 
extra classpath gedefinieerd staat. 

### Oplossing 
In dit geval hebben we een extra classpath toegevoegd in de META-INF/MANIFEST.MF file.
Dit kan worden gedaan met een plugin: [maven-jar-plugin](https://maven.apache.org/plugins/maven-jar-plugin/) .

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jar-plugin</artifactId>
    <configuration>
        <archive>
            <manifestEntries>
                <Class-Path>lib/sap/sapjco3.jar</Class-Path>
            </manifestEntries>
        </archive>
    </configuration>
</plugin>
```

Deze configuratie geeft aan dat er extra library jar kan gevonden worden in /lib/sap/ .
Deze plaats staat relatief tegenover de plaats waar de executable jar zich bevindt. 