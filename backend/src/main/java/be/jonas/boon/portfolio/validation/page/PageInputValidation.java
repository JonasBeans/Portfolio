package be.jonas.boon.portfolio.validation.page;

import io.micrometer.common.util.StringUtils;

import java.util.function.Predicate;

public class  PageInputValidation {

    public static void validate(String title) {
        validateInputNotNull.test(title);
    }

    private static final Predicate<String> validateInputNotNull = (title) -> {
        if (StringUtils.isBlank(title)) ValidationError.emptyTitle();
        return true;
    };

    static class ValidationError extends RuntimeException{

        public ValidationError(String message) {
            super(message);
        }

        static void emptyTitle() {
            throw new ValidationError("Title can not by empty");
        }
    }
}
