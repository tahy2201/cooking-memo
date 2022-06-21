FROM amazoncorretto:11-al2-jdk AS build
COPY --chown=gradle:gradle ./ /usr/local/coome
WORKDIR /usr/local/coome
RUN ./gradlew build -x test

FROM amazoncorretto:11-al2-jdk
COPY --from=build /usr/local/coome/build/libs/coome-0.0.1-SNAPSHOT.war /usr/local/

ENTRYPOINT java -jar /usr/local/coome-0.0.1-SNAPSHOT.war
