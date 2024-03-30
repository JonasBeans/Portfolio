Lombok (en waarschijnlijk in het algemeen) zal @ compile bijvoorbeeld een inner builder creeëren 
volgens de annotaties gegeven @Builder.
In de jar bestaan dus geen annotaties dit is gewoon eenvoudiger tijdens development. 

## @Builder
[article](https://github.com/projectlombok/lombok/issues/1807)

Een oplossing hiervoor is de juiste volgorde hanteren waarin 
Het kan voor komen dat dit een fout geeft op er niet het juiste type kan worden geconvert in de vorm van: 
> java.lang<String> can not be converted to java.lang<Integer> 

Dit komt vooral voor als er een overloading is van de constructor. 
Een oplossing hiervoor is om de juiste volgorde te hanteren in de private fields die
voorkomen in de constructor.