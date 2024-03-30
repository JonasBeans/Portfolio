Voor stringbuilder is het soms meer aan te raden om string concatenatie te doen. 


BAD 
StringBuilder queryString = new StringBuilder();

        queryString.append("...");
        queryString.append("...");
        queryString.append("...");
        queryString.append("...");

BETTER
StringBuilder queryString = new StringBuilder()
        .append("...")
        .append("...")
        .append("...")
        .append("...");