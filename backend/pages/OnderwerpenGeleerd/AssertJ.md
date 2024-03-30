# AssertJ 

## Beschrijving
Het is een library om mooie, leesbaardere testen te schrijven. 

## Features 
- assertThat().{somethings}()
- assertThatThrownBy(() -> ...)     
    .{assertions}

## Catch exceptions van private mehtods

[stack overflow](https://stackoverflow.com/questions/19164020/how-to-explain-whether-exception-will-catch-runtimeexception)

voorbeeld:
```java
    @Test
    public void incomingEvent_WithoutDebts_ThrowException(){
        String event = fromClassPath("events/UpdateDebtWithoutFollowUpAmountEventNoDebt.json");

        Throwable thrown = catchThrowable(() -> {
            eventHandler.execute(event);
        });

        assertThat(thrown)
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining(format("Incoming event with type=%s, does not have debt", VALIDATED_REPAYMENTS_FINALIZED_EVENT));
    }
```
