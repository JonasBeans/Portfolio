# Mockito features

## Beschrijving
Om dingen te mocken he. Is sneller om klassen te testen.
Neem te testen class, mock alles ervoor en erna en test dan de gewenste functionaliteiten. Is sneller omdate er geen Context moet worden opgestart. 

Time = $$$

## Mock vs Spy
[Baeldung](https://www.baeldung.com/mockito-spy)
- **Mock** moet gebruikt worden in combinatie met when().thenreturn();
- **Spy** kan zo gebruikt worden. De methodes van de spy kunnen gebruikt worden.

## MockBean 
[Baeldung](baeldung.com/java-spring-mockito-mock-mockbean)

Mockbean wordt gebruikt als er een springcontext aanwezig is. 
Beans met deze annotatie worden dan vervangen in de context door de mock. 
Er kan vervolgens gebruik worden gemaakt van when().thenReturn();

## @Injectmocks

De te injecteren mocks worden aangeduid met @Spy, @Mock, @MockBean.
Wordt gebruikt om mock te injecteren in de klasse met deze annotatie erboven. 

## Argumentcaptor 
[StackOverflow](https://stackoverflow.com/questions/12244341/intercept-object-on-method-invocation-with-mockito)        

Wordt gebruikt in combinatie met verify om arguments te capteren gebruikt in private methodes.

Voorbeeld:
```java 
    private final argumentcaptor<createdebttransactioninputvo> argumentcaptor = argumentcaptor.forclass(createdebttransactioninputvo.class);

    @test
    public void incomingevent_parse_ok() throws orchestrationfeedbacknotification, jsonprocessingexception {
        createdebttransactioninputvo debttransactioninputvo = getvalidincomingevent();
        string event = fromclasspath("events/updatedebtwithoutfollowupamountevent.json");
        eventhandler.execute(event);

        verify(objectmapper).readvalue(event, updatedebtwithoutfollowupamountevent.class);
        verify(debtdossierfacade).createdebttransactionfromevent(argumentcaptor.capture());
        assertthat(argumentcaptor.getvalue().tostring())
                .isequalto(debttransactioninputvo.tostring());
    }
```

## ArgumentMatchers.argThat (org.mockito)
[article](https://medium.com/kenshoos-engineering-blog/mockito-gotcha-beware-of-method-invocation-when-stubbing-65cf5cf2e4af)<sup>[*nullpointer](#nullpointerwhenstubbing)</sup>

Bij het mocken van een klasse kan het zijn dat er een functie een 
Object als parameter krijgt. Op basis van deze parameter wordt er dan 
iets "gereturned". Om op basis van de ingevulde velden iets speciefiek 
te returnen kan er gebruik worden gemaakt van ArgumentMatchers.argThat. 

```java
public void testieWestie(){
    //1e stub
    when(databaseFacade.searchDebtHistories(argThat(searchParameters -> searchParameters.getDebtId().equals(2L))))
        .thenReturn(List.of(debtHistoryTO2));

    //2e stub read article why it's different from the first stub
    doReturn(List.of(debtHistoryTO3))
        .when(databaseFacade).searchDebtHistories(argThat(searchParameters -> searchParameters.getDebtId() == 3L));
}
```
### Nullpointer When Stubbing

Als een functie > 1 keer wordt gestupped, kan het voor komen dat er een
**Nullpointer** wordt gesmeten. In het artikel kan je lezen waarom dit komt. 
Dit heeft iets te maken met hoe de open source library is opezet. 