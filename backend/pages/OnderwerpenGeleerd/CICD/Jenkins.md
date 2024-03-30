Is eigenlijk gewoon een automatiserings tool die 
bv. een maven build maakt van een applicatie die op git staat. 
daarna op kubernetes zet en allerhande tussenstappen om te testen verifieren. 

Jenkins is eigenlijk gewoon een server die verschillende soorten technologieën samenbrengt.
Neem bijvoorbeeld dat je een Spring boot project op een kubernetes cluster wil krijgen. 
Je gaat eerst code van git moeten halen. Hier een jar van maken via maven. Deze op 
sonar nakijken op security issues, code quality, enzovoort. Daarna mag hiervan een 
dockerimage gemaakt worden en op de cluster gegooid worden. 

Je zou dit manueel kunnen doen maar hier komt jenkins to the rescue. 

Jenkins voorziet pipelines die dat allemaal voor jou zal doen in een volgorde die jij bepaald. 
Deze volgorde kan je bepalen door deze te definiëren in een groovy file. 
Via deze groovy file worden dan pipelines generate die gebruikt worden door de jenkins server.

Er kunnen allemaal soorten commandos worden gedaan: 
mvn versions:set ... .