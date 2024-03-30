# Pulsar
## Omschrijving
Pulsar is een messagegin platform.
Het principe werkt op basis van subscription, topics, producers en consumers.

## Local container 
Het is mogelijk om topic na te kijken door in de container te gaan met: 
`docker exec -it {container-id} /bin/bash`

vervolgens kan je gebruik maken van pulsar-admin, pulsar-client, ... met: 
`bin/pulsar-admin {command} [{options}]`