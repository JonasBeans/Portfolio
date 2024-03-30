link: https://www.baeldung.com/java-socket-connection-read-timeout
Socket is combinatie van host en port. 
Via deze socket wordt er een connectie gemaakt naar het internet. 
Deze heeft als bestemming de host socket. 

- Connect timed out
method = .connect()
Als er geen connectie kan gemaakt worden (binnen de time out time) wordt er een 
exception gegeven: 

Exception in thread "main" java.net.SocketTimeoutException: Connect timed out

- Read timed out
method = .read()
Hierbij is er dus al een connection handshake gedaan en 
staat er een connectie klaar om op te ontvangen. 
Echter wordt er gewacht tot er minstens één byte doorstroomt van de socket. 
Als dit niet het geval is binnen de timeout tijd wordt er een exception gegooid. 

java.net.SocketTimeoutException: Read timed out

