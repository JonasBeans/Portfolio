FROM maven:3.9.6-eclipse-temurin-17 as backend-builder
WORKDIR /code
COPY ./backend/ /code/backend
COPY ./pom.xml /code/
RUN mvn -f /code/pom.xml clean package

FROM eclipse-temurin:17-jre-jammy
RUN mkdir /mnt/posts
RUN mkdir /certs
ENV PAGES_PATH="/mnt/posts/"
ENV ALLOWED_ORIGINS=*
ENV KEYSTORE_FILE="/certs/keystore.p12"
ARG JAR_FILE=/code/backend/target/*.jar
COPY --from=backend-builder $JAR_FILE /app/application.jar
EXPOSE 8080
ENTRYPOINT java -jar /app/application.jar --spring.profiles.active="production"